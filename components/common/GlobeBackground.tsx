import React from 'react';

const nodes = [
  { cx: "20%", cy: "30%" },
  { cx: "40%", cy: "60%" },
  { cx: "60%", cy: "20%" },
  { cx: "75%", cy: "50%" },
  { cx: "80%", cy: "70%" },
  { cx: "30%", cy: "80%" },
];

export function GlobeBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        className="absolute w-full h-full opacity-[0.07]"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Globe outline */}
        <circle
          cx="500"
          cy="500"
          r="400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-white"
        />
        
        {/* Latitude lines */}
        {[-30, -15, 0, 15, 30].map((angle) => (
          <ellipse
            key={angle}
            cx="500"
            cy="500"
            rx="400"
            ry={400 * Math.cos((angle * Math.PI) / 180)}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-white/50"
          />
        ))}
        
        {/* Longitude lines */}
        {[-60, -30, 0, 30, 60].map((angle) => (
          <path
            key={angle}
            d={`M 500 100 Q ${500 + 400 * Math.sin((angle * Math.PI) / 180)} 500 500 900`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-white/50"
          />
        ))}

        {/* Pulsing nodes */}
        {nodes.map((node, index) => (
          <circle
            key={index}
            cx={node.cx}
            cy={node.cy}
            r="4"
            fill="currentColor"
            className="text-white animate-nodePulse"
            style={{ animationDelay: `${index * 1}s` }}
          />
        ))}
      </svg>
    </div>
  );
} 