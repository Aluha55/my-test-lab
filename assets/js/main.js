document.addEventListener('DOMContentLoaded', () => {
    // A simple QR Code generator library (self-contained in HTML)
    const QRCode = window.QRCode;
    const testContainer = document.getElementById('test-container');
    const resultContainer = document.getElementById('result-container');
    const progressBarEl = document.getElementById('progress-bar');
    const progressTextEl = document.getElementById('progress-text');
    const testName = document.body.dataset.test;

    // --- 新增：檢測是否為移動設備 ---
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // --- 新增：創建圖片預覽的浮層 ---
    function createImagePreviewModal(imageDataUrl) {
        const modal = document.createElement('div');
        modal.id = 'image-preview-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <p class="save-instruction">請長按圖片保存到相冊</p>
                <img src="${imageDataUrl}" alt="測試結果分享圖">
            </div>
        `;
        document.body.appendChild(modal);

        modal.querySelector('.close-btn').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                 document.body.removeChild(modal);
            }
        });
    }
    
    const generateShareImage = (result) => {
        const shareCard = document.getElementById('share-card-template');
        const shareButton = resultContainer.querySelector('.create-image');
        if (!shareCard || !shareButton || !window.html2canvas || !window.QRCode) {
            alert('圖片生成功能加載失敗，請刷新頁面後重試。');
            return;
        }

        const originalButtonText = shareButton.textContent;
        shareButton.textContent = '正在生成...';
        shareButton.disabled = true;

        const avatarPlaceholder = shareCard.querySelector('.share-avatar-placeholder');
        const titlePlaceholder = shareCard.querySelector('.share-title-placeholder');
        const descPlaceholder = shareCard.querySelector('.share-desc-placeholder');
        const qrcodePlaceholder = shareCard.querySelector('.share-qrcode-placeholder');
        const sloganPlaceholder = shareCard.querySelector('.share-slogan');
        
        const resultAvatar = resultContainer.querySelector('.avatar-shape').cloneNode(true);
        avatarPlaceholder.innerHTML = '';
        avatarPlaceholder.appendChild(resultAvatar);

        titlePlaceholder.textContent = `${result.title} (${result.type})`;
        descPlaceholder.textContent = result.description;
        sloganPlaceholder.innerHTML = '一個輕鬆有趣的地方，<br>開始探索真實的你吧！';

        qrcodePlaceholder.innerHTML = '';
        try {
            new QRCode(qrcodePlaceholder, {
                text: "https://www.personalitytestlab.com",
                width: 170, height: 170, colorDark: "#4a4a4a",
                colorLight: "#ffffff", correctLevel: QRCode.CorrectLevel.H
            });
        } catch (e) {
            console.error('QR Code generation failed:', e);
            qrcodePlaceholder.textContent = '二維碼生成失敗。';
        }

        shareCard.style.display = 'flex';

        setTimeout(() => {
            html2canvas(shareCard, {
                scale: 2, useCORS: true, backgroundColor: null
            }).then(canvas => {
                const imageDataUrl = canvas.toDataURL("image/png");
                
                if (isMobile) {
                    createImagePreviewModal(imageDataUrl);
                } else {
                    const link = document.createElement('a');
                    link.download = `我的性格是-${result.type}.png`;
                    link.href = imageDataUrl;
                    link.click();
                }

            }).catch(err => {
                console.error('Image generation failed:', err);
                alert('圖片生成失敗，請稍后再試。');
            }).finally(() => {
                shareCard.style.display = 'none';
                shareButton.textContent = originalButtonText;
                shareButton.disabled = false;
            });
        }, 200);
    };

    function copyTextToClipboard(text, btn) {
        const originalText = btn.textContent;
        const successText = btn.classList.contains('wechat') ? '鏈接已複製,快去分享吧!' : '已複製!';

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                btn.textContent = successText;
                setTimeout(() => { btn.textContent = originalText; }, 2500);
            }).catch(() => {
                fallbackCopyTextToClipboard(text, btn, originalText, successText);
            });
        } else {
            fallbackCopyTextToClipboard(text, btn, originalText, successText);
        }
    }

    function fallbackCopyTextToClipboard(text, btn, originalText, successText) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed"; 
        textArea.style.top = "-9999px";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                btn.textContent = successText;
                setTimeout(() => { btn.textContent = originalText; }, 2500);
            } else {
                 alert('複製失敗，請手動複製鏈接。');
            }
        } catch (err) {
            alert('複製失敗，請手動複製鏈接。');
        }
        document.body.removeChild(textArea);
    }


    function initializeShareButtons(container, result = null) {
        const shareTitle = document.title;
        const shareUrl = "https://www.personalitytestlab.com";

        container.querySelector('.share-btn.weibo')?.addEventListener('click', () => {
            const url = `http://service.weibo.com/share/share.php?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`;
            window.open(url, '_blank', 'width=600,height=400');
        });
        container.querySelector('.share-btn.facebook')?.addEventListener('click', () => {
            const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
            window.open(url, '_blank', 'width=600,height=400');
        });
        
        container.querySelector('.share-btn.wechat')?.addEventListener('click', (e) => {
            copyTextToClipboard(shareUrl, e.currentTarget);
        });
        container.querySelector('.share-btn.copy-link')?.addEventListener('click', (e) => {
            copyTextToClipboard(shareUrl, e.currentTarget);
        });

        if (result) {
            container.querySelector('.share-btn.create-image')?.addEventListener('click', () => generateShareImage(result));
        }
    }

    document.querySelectorAll('.share-container').forEach(container => initializeShareButtons(container));
    
    if (!testContainer || !testName) return;

    let testData, questions;

    fetch(`../data/${testName}.json`)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            testData = data;
            questions = data.questions;
            displayQuestions();
            updateProgress();
        })
        .catch(e => {
            console.error('Error fetching/parsing JSON:', e);
            testContainer.innerHTML = '<h1>抱歉，加載測試題庫時出錯。</h1>';
        });

    function displayQuestions() {
        testContainer.innerHTML = `<h1>${testData.title || '心理測驗'}</h1><div id="questions-wrapper"></div>`;
        const questionsWrapper = document.getElementById('questions-wrapper');
        
        questions.forEach((q, index) => {
            const questionBlock = document.createElement('div');
            questionBlock.className = 'question-block';
            questionBlock.innerHTML = `<p>${index + 1}. ${q.q}</p>`;
            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'options';
            q.options.forEach((option) => {
                const label = document.createElement('label');
                const radio = document.createElement('input');
                
                if (option.color) {
                    label.style.backgroundColor = option.color;
                }

                radio.type = 'radio';
                radio.name = `question-${index}`;
                radio.value = option.value !== undefined ? option.value : option.text;
                radio.addEventListener('change', updateProgress);
                label.appendChild(radio);
                label.appendChild(document.createTextNode(` ${option.text}`));
                optionsDiv.appendChild(label);
            });
            questionBlock.appendChild(optionsDiv);
            questionsWrapper.appendChild(questionBlock);
        });

        const submitButton = document.createElement('button');
        submitButton.id = 'submit-btn';
        submitButton.textContent = '完成並查看結果';
        submitButton.addEventListener('click', calculateResult);
        testContainer.appendChild(submitButton);
    }

    function updateProgress() {
        if (!progressBarEl) return;
        const totalQuestions = questions.length;
        const answeredQuestions = document.querySelectorAll('input[type="radio"]:checked').length;
        const percentage = totalQuestions > 0 ? (answeredQuestions / totalQuestions) * 100 : 0;
        progressBarEl.style.width = percentage + '%';
        progressTextEl.textContent = `進度: ${answeredQuestions} / ${totalQuestions}`;
    }

    function calculateResult() {
        if (document.querySelectorAll('input[type="radio"]:checked').length < questions.length) {
            alert('請回答所有問題！');
            return;
        }
        let resultType;
        const scores = {};
        
        document.querySelectorAll('input[type="radio"]:checked').forEach(radio => {
            const value = radio.value;
            if (value !== 'N/A') {
                scores[value] = (scores[value] || 0) + 1;
            }
        });

        if (testName === 'mbti') {
            resultType = '';
            resultType += (scores.E || 0) >= (scores.I || 0) ? 'E' : 'I';
            resultType += (scores.S || 0) >= (scores.N || 0) ? 'S' : 'N';
            resultType += (scores.T || 0) >= (scores.F || 0) ? 'T' : 'F';
            resultType += (scores.J || 0) >= (scores.P || 0) ? 'J' : 'P';
        } else if (testName === 'alignment') {
            let axis1 = (scores.L || 0) > (scores.C || 0) ? 'L' : ((scores.C || 0) > (scores.L || 0) ? 'C' : 'N');
            let axis2 = (scores.G || 0) > (scores.E || 0) ? 'G' : ((scores.E || 0) > (scores.G || 0) ? 'E' : 'N');
            if (axis1 === 'N' && axis2 === 'N') {
                resultType = 'N';
            } else {
                resultType = axis1 + axis2;
            }
        } else if (testName === 'dass35') {
            const dassScores = { depressive: 0, anxious: 0, stressful: 0 };
            document.querySelectorAll('input[type="radio"]:checked').forEach((radio, index) => {
                const questionData = questions[index];
                const scoreValue = parseInt(radio.value, 10);
                if (dassScores[questionData.dimension] !== undefined) {
                    dassScores[questionData.dimension] += scoreValue;
                }
            });
            resultType = Object.keys(dassScores).reduce((a, b) => dassScores[a] > dassScores[b] ? a : b);

        } else if (['big5', 'holland', 'color', 'enneagram', 'disc', 'cattell16pf', 'darktriad', 'attachment', 'lovelanguages', 'bdsm'].includes(testName)) {
            if (Object.keys(scores).length === 0) {
                 if(testName === 'big5') resultType = 'O';
                 else if (testName === 'holland') resultType = 'R';
                 else if (testName === 'color') resultType = 'red';
                 else if (testName === 'enneagram') resultType = '1';
                 else if (testName === 'disc') resultType = 'D';
                 else if (testName === 'cattell16pf') resultType = 'interpersonal';
                 else if (testName === 'darktriad') resultType = 'narcissism';
                 else if (testName === 'attachment') resultType = 'secure';
                 else if (testName === 'lovelanguages') resultType = 'words';
                 else if (testName === 'bdsm') resultType = 'switch';
                 else resultType = '1';
            } else {
                 resultType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
            }
        }
        
        displayResult(testData.results[resultType]);
    }

    function displayResult(result) {
        if (!result) {
            resultContainer.innerHTML = '<h1>抱歉，無法計算您的結果。</h1><p>請檢查計分邏輯或題庫文件。';
            return;
        }

        const shapeClasses = ['shape-1', 'shape-2', 'shape-3', 'shape-4', 'shape-5'];
        const randomShape = shapeClasses[Math.floor(Math.random() * shapeClasses.length)];
        
        // --- 核心修改：為色彩測試定義專屬調色板 ---
        const colorTestPalettes = {
            'red': ['#F48FB1', '#FF5252'],
            'orange': ['#FFB74D', '#FFAB40'],
            'yellow': ['#FFF176', '#FFFF00'],
            'green': ['#AED581', '#B9F6CA'],
            'blue': ['#90CAF9', '#82B1FF'],
            'purple': ['#CE93D8', '#E040FB'],
            'pink': ['#F48FB1', '#FF80AB'],
            'brown': ['#BCAAA4', '#8D6E63'],
            'black': ['#757575', '#424242'],
            'white': ['#F5F5F5', '#E0E0E0'],
            'gray': ['#BDBDBD', '#9E9E9E']
        };

        let finalPalette;
        
        if (testName === 'color' && colorTestPalettes[result.type]) {
            // 如果是色彩測試，且結果顏色在我們的調色板中，則使用專屬顏色
            finalPalette = colorTestPalettes[result.type];
        } else {
            // 否則，使用原來的中性色隨機調色板
            const neutralPalettes = [
                ['#b2a294', '#a7a8a0'], ['#9e9a89', '#c0b8af'], ['#8d9398', '#b3b3b3'],
                ['#ab9d97', '#d4cbc2'], ['#a2a7a1', '#cfd3cd'], ['#c4b8b1', '#e0d8d1'],
                ['#949e99', '#d1d5d3'], ['#b3a6a0', '#dcd4cf'], ['#74787a', '#a9acaf']
            ];
            finalPalette = neutralPalettes[Math.floor(Math.random() * neutralPalettes.length)];
        }


        document.body.classList.add('modal-open');
        window.scrollTo({ top: 0, behavior: 'smooth' });

        testContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        const progressContainer = document.querySelector('.progress-container');
        if (progressContainer) progressContainer.classList.add('hidden');
        
        let avatarText = result.type || '';
        if (['enneagram', 'cattell16pf', 'dass35', 'darktriad', 'attachment', 'lovelanguages', 'bdsm', 'alignment'].includes(testName)) {
            avatarText = result.title.split(' ')[0];
        }
        
        let formattedAvatarText = '';
        let avatarClass = ''; 
        const isChinese = (str) => /^[\u4e00-\u9fa5]+$/.test(str);

        if (isChinese(avatarText)) {
            if (avatarText.length === 4) {
                formattedAvatarText = avatarText.slice(0, 2) + '<br>' + avatarText.slice(2);
                avatarClass = 'chinese-four-chars';
            } else if (avatarText.length > 4) {
                const mid = Math.ceil(avatarText.length / 2);
                formattedAvatarText = avatarText.slice(0, mid) + '<br>' + avatarText.slice(mid);
                avatarClass = 'chinese-long-chars';
            } else {
                formattedAvatarText = avatarText;
                avatarClass = 'chinese-single-line';
            }
        } else {
            formattedAvatarText = avatarText;
            avatarClass = 'english-single-line';
            if (avatarText.length > 4) {
                 avatarClass += ' english-long-chars';
            }
        }


        const shareBarHTML = `
            <div class="share-container">
                <h3>分享給更多朋友</h3>
                <div class="share-bar">
                    <button class="share-btn weibo">分享到微博</button>
                    <button class="share-btn facebook">分享到Facebook</button>
                    <button class="share-btn wechat">分享到微信</button>
                    <button class="share-btn copy-link">複製鏈接</button>
                    <button class="share-btn create-image">生成分享圖</button>
                </div>
            </div>`;
        
        const disclaimerHTML = (testName === 'dass35' || testName === 'darktriad' || testName === 'bdsm') ? `
            <div class="result-disclaimer">
                <strong>重要提示：</strong>本測驗結果僅為初步的傾向探索，不構成任何專業建議。所有現實中的互動都應基於“安全、理智、知情同意(SSC)”的原則。如果您對相關議題有疑慮，請尋求專業社群或人士的幫助。
            </div>` : '';
            
        resultContainer.innerHTML = `
            ${disclaimerHTML}
            <h2>測驗結果</h2>
            <div class="result-avatar-wrapper">
                <div class="avatar-shape ${randomShape} ${avatarClass}" style="--c1: ${finalPalette[0]}; --c2: ${finalPalette[1]};">
                    <span>${formattedAvatarText}</span>
                </div>
            </div>
            <h3>${result.title} (${result.type})</h3>
            <p><strong>特點：</strong> ${result.description}</p>
            <p><strong>建議：</strong> ${result.suggestion || '根據您的特點，探索更多可能性。'}</p>
            ${shareBarHTML} 
            <a href="../index.html" class="home-link">返回首頁</a>
        `;
        initializeShareButtons(resultContainer, result);
    }
});