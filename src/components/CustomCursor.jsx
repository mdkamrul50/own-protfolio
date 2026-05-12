'use client';

import { MousePointer2, PenTool } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const circleRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const circlePos = useRef({ x: 0, y: 0 });

  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener('mousemove', move);

    const hoverItems = document.querySelectorAll(
      'a, button, input, textarea, .cursor-hover'
    );

    const enter = () => setHover(true);
    const leave = () => setHover(false);

    hoverItems.forEach((el) => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });

    const animate = () => {
      // DOT (fast)
      dotPos.current.x = mouse.current.x;
      dotPos.current.y = mouse.current.y;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0)`;
      }

      // CIRCLE (smooth follow)
      circlePos.current.x += (mouse.current.x - circlePos.current.x) * 0.12;
      circlePos.current.y += (mouse.current.y - circlePos.current.y) * 0.12;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circlePos.current.x}px, ${circlePos.current.y}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', move);

      hoverItems.forEach((el) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  return (
    <>
      {/* DOT (fast pointer) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
      >
        <PenTool
          className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
          size={24}
        />
      </div>

      {/* MAIN CURSOR */}
      <div
        ref={circleRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
      >
        <div
          className={`
      rounded-full transition-all duration-300 ease-out
      bg-blue-600/70
      blur-md
      shadow-[0_0_40px_rgba(34,211,238,0.6)]
      ${hover ? 'w-2 h-2' : 'w-6 h-6'}
      animate-pulse
    `}
        />
      </div>
    </>
  );
}
