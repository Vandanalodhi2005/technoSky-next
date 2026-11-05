"use client";

import { useId } from "react";

/**
 * FloatingBubbles — Premium water-like floating bubbles component
 * Features glassmorphic translucent bubbles with realistic reflections,
 * soft highlights, and continuous organic floating physics.
 *
 * Configurable props:
 * @param {number} count - Number of bubbles (default: 14)
 * @param {string} variant - "upward" (rising hero bubbles) | "water" (bobbing on water surface)
 * @param {string} className - Additional CSS classes
 * @param {number} minSize - Minimum bubble diameter in px (default: 16)
 * @param {number} maxSize - Maximum bubble diameter in px (default: 68)
 * @param {number} baseOpacity - Base bubble opacity (default: 0.6)
 * @param {string} color - Primary accent color: "cyan" | "blue" | "white"
 */

// Predefined deterministic distributions to ensure stable rendering without hydration mismatch
const PRESET_BUBBLES = [
  { left: 6, bottom: 8, size: 42, duration: 11, delay: 0, drift: 28, scaleAmp: 1.06 },
  { left: 16, bottom: 22, size: 24, duration: 8.5, delay: 1.2, drift: -22, scaleAmp: 1.04 },
  { left: 28, bottom: 5, size: 56, duration: 13, delay: 2.8, drift: 35, scaleAmp: 1.08 },
  { left: 38, bottom: 35, size: 18, duration: 7.2, delay: 0.6, drift: -18, scaleAmp: 1.03 },
  { left: 48, bottom: 12, size: 64, duration: 15, delay: 3.5, drift: 40, scaleAmp: 1.09 },
  { left: 58, bottom: 48, size: 28, duration: 9.8, delay: 1.8, drift: -25, scaleAmp: 1.05 },
  { left: 68, bottom: 15, size: 50, duration: 12, delay: 2.2, drift: 30, scaleAmp: 1.07 },
  { left: 78, bottom: 30, size: 22, duration: 8.0, delay: 0.9, drift: -20, scaleAmp: 1.04 },
  { left: 88, bottom: 10, size: 60, duration: 14, delay: 3.1, drift: 38, scaleAmp: 1.08 },
  { left: 94, bottom: 40, size: 26, duration: 9.2, delay: 1.5, drift: -24, scaleAmp: 1.05 },
  { left: 22, bottom: 55, size: 34, duration: 10.5, delay: 2.0, drift: 26, scaleAmp: 1.06 },
  { left: 52, bottom: 62, size: 20, duration: 7.8, delay: 0.4, drift: -16, scaleAmp: 1.03 },
  { left: 74, bottom: 58, size: 38, duration: 11.8, delay: 2.6, drift: 32, scaleAmp: 1.07 },
  { left: 84, bottom: 68, size: 16, duration: 6.9, delay: 1.1, drift: -14, scaleAmp: 1.02 },
];

export default function FloatingBubbles({
  count = 12,
  variant = "upward",
  className = "",
  baseOpacity = 0.65,
  color = "cyan",
  interactive = false,
}) {
  const componentId = useId();
  const bubbles = PRESET_BUBBLES.slice(0, Math.min(count, PRESET_BUBBLES.length));

  // Gradients and glow based on palette
  const getGradient = (isWater) => {
    if (color === "white") {
      return "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.05) 100%)";
    }
    if (color === "blue") {
      return "radial-gradient(circle at 35% 30%, rgba(88,185,255,0.85) 0%, rgba(37,150,190,0.5) 55%, rgba(10,79,212,0.15) 100%)";
    }
    // Default cyan palette matching Sofbox
    return isWater
      ? "radial-gradient(circle at 32% 28%, #7de2fc 0%, #38bdf8 40%, #2596be 85%)"
      : "radial-gradient(circle at 32% 28%, rgba(125,226,252,0.8) 0%, rgba(56,189,248,0.45) 50%, rgba(37,150,190,0.12) 100%)";
  };

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
    >
      {bubbles.map((b, i) => {
        const isUpward = variant === "upward";
        const bubbleStyle = {
          position: "absolute",
          left: `${b.left}%`,
          bottom: `${b.bottom}%`,
          width: `${b.size}px`,
          height: `${b.size}px`,
          borderRadius: "50%",
          background: getGradient(false),
          opacity: baseOpacity,
          border: "1px solid rgba(255, 255, 255, 0.45)",
          boxShadow:
            "0 8px 24px rgba(37, 150, 190, 0.22), inset -3px -3px 8px rgba(255,255,255,0.25), inset 4px 4px 10px rgba(255,255,255,0.5)",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
          animation: isUpward
            ? `bubbleRise ${b.duration}s cubic-bezier(0.4, 0, 0.2, 1) infinite`
            : `bubbleBob ${b.duration}s ease-in-out infinite`,
          animationDelay: `${b.delay}s`,
          willChange: "transform, opacity",
        };

        return (
          <div key={`${componentId}-${i}`} style={bubbleStyle}>
            {/* Soft specular highlight at top-left inside bubble */}
            <span
              style={{
                position: "absolute",
                top: "16%",
                left: "20%",
                width: "28%",
                height: "22%",
                borderRadius: "50%",
                background: "radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 80%)",
                transform: "rotate(-30deg)",
                display: "block",
              }}
            />
            {/* Subtle bottom reflection */}
            <span
              style={{
                position: "absolute",
                bottom: "14%",
                right: "18%",
                width: "22%",
                height: "14%",
                borderRadius: "50%",
                background: "radial-gradient(ellipse at center, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 80%)",
                display: "block",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

