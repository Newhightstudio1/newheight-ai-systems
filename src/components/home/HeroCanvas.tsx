import React, { useEffect, useRef } from 'react';

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  category: string;
}

interface Connection {
  from: number;
  to: number;
  progress: number;
  speed: number;
}

const NETWORK_LABELS = [
  'CRM', 'AI AGENT', 'EMAIL', 'LEADS', 'DATABASE',
  'SLACK', 'SHOPIFY', 'CALENDAR', 'WEBSITES', 'AUTOMATION'
];

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse position state
    const mouse = { x: width / 2, y: height / 2, radius: 150 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Create Nodes
    const nodes: Node[] = NETWORK_LABELS.map((label, idx) => {
      const angle = (idx / NETWORK_LABELS.length) * Math.PI * 2;
      const radiusOffset = Math.min(width, height) * 0.32;
      return {
        id: `node-${idx}`,
        label,
        x: width / 2 + Math.cos(angle) * radiusOffset + (Math.random() - 0.5) * 40,
        y: height / 2 + Math.sin(angle) * radiusOffset + (Math.random() - 0.5) * 40,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: idx === 1 || idx === 9 ? 24 : 18,
        color: idx === 1 ? '#00f0ff' : idx === 9 ? '#3b82f6' : '#94a3b8',
        category: label
      };
    });

    // Create Signal Pulses Connections
    const connections: Connection[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < width * 0.45) {
          connections.push({
            from: i,
            to: j,
            progress: Math.random(),
            speed: 0.003 + Math.random() * 0.005
          });
        }
      }
    }

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Background ambient glow around mouse
      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius);
      gradient.addColorStop(0, 'rgba(0, 240, 255, 0.06)');
      gradient.addColorStop(1, 'rgba(7, 9, 14, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Update Node positions & bounce
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 50 || node.x > width - 50) node.vx *= -1;
        if (node.y < 50 || node.y > height - 50) node.vy *= -1;

        // Slight magnetic repulsion from mouse
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          node.x -= (dx / dist) * force * 1.5;
          node.y -= (dy / dist) * force * 1.5;
        }
      });

      // Draw Connections
      connections.forEach((conn) => {
        const n1 = nodes[conn.from];
        const n2 = nodes[conn.to];

        const dx = n2.x - n1.x;
        const dy = n2.y - n1.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 320) {
          const alpha = (1 - dist / 320) * 0.25;
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Draw moving pulse packet
          conn.progress += conn.speed;
          if (conn.progress > 1) conn.progress = 0;

          const px = n1.x + dx * conn.progress;
          const py = n1.y + dy * conn.progress;

          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = '#00f0ff';
          ctx.shadowColor = '#00f0ff';
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Draw Nodes
      nodes.forEach((node) => {
        // Node outer glow ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.05)';
        ctx.fill();

        // Node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.id === 'node-1' ? '#00f0ff' : 'rgba(13, 17, 26, 0.9)';
        ctx.strokeStyle = node.id === 'node-1' ? '#ffffff' : 'rgba(0, 240, 255, 0.5)';
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();

        // Node Label badge
        ctx.font = '600 10px "JetBrains Mono", monospace';
        ctx.fillStyle = '#f8fafc';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, node.x, node.y + node.radius + 16);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto opacity-70">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
