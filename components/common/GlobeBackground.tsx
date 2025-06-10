"use client";

import { useEffect, useRef, useState } from "react";

export function GlobeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      if (typeof window === "undefined") return;

      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Set canvas size
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      // Draw globe
      const drawGlobe = () => {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(canvas.width, canvas.height) * 0.4;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw globe outline
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = "#0EA5E9";
        ctx.globalAlpha = 0.25;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw grid lines
        const gridLines = 12;
        for (let i = 0; i < gridLines; i++) {
          const angle = (i * Math.PI) / gridLines;
          
          // Horizontal lines
          ctx.beginPath();
          ctx.ellipse(
            centerX,
            centerY,
            radius * Math.cos(angle),
            radius * Math.sin(angle),
            0,
            0,
            Math.PI * 2
          );
          ctx.stroke();

          // Vertical lines
          ctx.beginPath();
          ctx.ellipse(
            centerX,
            centerY,
            radius,
            radius * Math.sin(angle),
            Math.PI / 2,
            0,
            Math.PI * 2
          );
          ctx.stroke();
        }

        // Add subtle glow
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius + 2, 0, Math.PI * 2);
        ctx.strokeStyle = "#0EA5E9";
        ctx.globalAlpha = 0.1;
        ctx.lineWidth = 4;
        ctx.stroke();
      };

      drawGlobe();

      // Animation
      let animationFrameId: number;
      const animate = () => {
        drawGlobe();
        animationFrameId = requestAnimationFrame(animate);
      };
      animate();

      return () => {
        window.removeEventListener("resize", resizeCanvas);
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to initialize globe"));
      return () => {};
    }
  }, []);

  if (error) {
    console.error("GlobeBackground error:", error);
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
} 