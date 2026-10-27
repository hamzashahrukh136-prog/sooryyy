import { useMemo } from "react";
import { Heart } from "lucide-react";
import type { CSSProperties } from "react";

const PALETTE = ["#FFB3CC", "#FFC7A6", "#CDBAFF", "#FF8FB3", "#E7B7FF"];

export function FloatingHearts({
  count = 16,
  celebrate = false,
}: {
  count?: number;
  celebrate?: boolean;
}) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const size = 14 + Math.random() * 30;
        return {
          id: i,
          left: Math.random() * 100,
          size,
          dur: celebrate ? 4 + Math.random() * 5 : 18 + Math.random() * 18,
          delay: -Math.random() * (celebrate ? 6 : 30),
          drift: (Math.random() - 0.5) * 160,
          o: celebrate ? 0.55 : 0.16 + Math.random() * 0.22,
          color: PALETTE[i % PALETTE.length],
        };
      }),
    [count, celebrate]
  );

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${
        celebrate ? "" : "fixed z-0"
      }`}
    >
      {hearts.map((h) => (
        <span
          key={h.id}
          className={celebrate ? "celebrate-heart" : "ambient-heart"}
          style={
            {
              left: `${h.left}%`,
              "--dur": `${h.dur}s`,
              "--delay": `${h.delay}s`,
              "--drift": `${h.drift}px`,
              "--o": h.o,
            } as CSSProperties
          }
        >
          <Heart
            style={{ width: h.size, height: h.size, color: h.color }}
            fill={h.color}
            strokeWidth={0}
          />
        </span>
      ))}
    </div>
  );
}

export default function Ambient() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      {/* soft dreamy blobs */}
      <div className="absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full bg-[#FFD3E4]/70 blur-3xl animate-drift-a" />
      <div className="absolute top-[30%] -right-48 h-[36rem] w-[36rem] rounded-full bg-[#E0D4FF]/70 blur-3xl animate-drift-b" />
      <div className="absolute bottom-[-12rem] left-[16%] h-[30rem] w-[30rem] rounded-full bg-[#FFE0CB]/70 blur-3xl animate-drift-c" />
      <div className="absolute top-[64%] right-[22%] h-[22rem] w-[22rem] rounded-full bg-[#FFD9EC]/50 blur-3xl" />
      <FloatingHearts count={16} />
    </div>
  );
}
