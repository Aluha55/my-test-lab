import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  baseR: number;
  phase: number;
  color: string;
}

const SoulNodes: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Configuration for a calmer, "Psychology" feel
    const particleCount = 45;
    
    // Soft, calming color palette
    const colors = [
        'rgba(76, 175, 80, 0.15)',   // Green
        'rgba(255, 235, 59, 0.15)',  // Yellow
        'rgba(33, 150, 243, 0.1)',   // Blue
        'rgba(156, 39, 176, 0.08)'   // Purple
    ];

    // Initialize nodes
    const nodes: Node[] = d3.range(particleCount).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3, // Very slow movement
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 40 + 20,
      baseR: Math.random() * 40 + 20,
      phase: Math.random() * Math.PI * 2,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));

    // Clear previous content to prevent duplication on re-renders
    svg.selectAll('*').remove();

    const circles = svg.selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('r', d => d.r)
      .attr('fill', d => d.color)
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .style('filter', 'blur(12px)') // Soft, ethereal look
      .style('mix-blend-mode', 'multiply');

    let time = 0;

    const timer = d3.timer(() => {
      time += 0.005;

      nodes.forEach(node => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Wrap around screen edges
        if (node.x < -100) node.x = width + 100;
        if (node.x > width + 100) node.x = -100;
        if (node.y < -100) node.y = height + 100;
        if (node.y > height + 100) node.y = -100;

        // Breathing effect (radius pulsation)
        node.r = node.baseR + Math.sin(time + node.phase) * 10;
      });

      circles
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .attr('r', d => d.r);
    });

    const handleResize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        svg.attr('width', width).attr('height', height);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      timer.stop();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
      width="100%"
      height="100%"
    />
  );
};

export default SoulNodes;