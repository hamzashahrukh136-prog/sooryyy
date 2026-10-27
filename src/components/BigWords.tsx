import { useRef } from "react";
import type { ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Heart, HeartCrack } from "lucide-react";

const BEAT_COUNT = 5;
const SPAN_START = 0.02;
const SPAN_END = 0.97;
const BEAT_DUR = (SPAN_END - SPAN_START) / BEAT_COUNT; // 0.19

function Beat({
  progress,
  index,
  children,
}: {
  progress: MotionValue<number>;
  index: number;
  children: ReactNode;
}) {
  const from = SPAN_START + index * BEAT_DUR;
  const to = from + BEAT_DUR;
  const pad = 0.024;

  const opacity = useTransform(progress, [from, from + pad, to - pad, to], [0, 1, 1, 0]);
  const y = useTransform(progress, [from, from + pad, to - pad, to], [80, 0, 0, -80]);
  const scale = useTransform(progress, [from, from + pad], [0.92, 1]);
  const blur = useTransform(
    progress,
    [from, from + pad, to - pad, to],
    ["blur(14px)", "blur(0px)", "blur(0px)", "blur(14px)"]
  );

  return (
    <motion.div
      style={{ opacity, y, scale, filter: blur }}
      className="absolute inset-0 flex items-center justify-center px-6"
    >
      {children}
    </motion.div>
  );
}

function Dot({ progress, index }: { progress: MotionValue<number>; index: number }) {
  const at = SPAN_START + index * BEAT_DUR;
  const opacity = useTransform(progress, [at - 0.01, at + 0.02], [0.25, 1]);
  const scale = useTransform(progress, [at - 0.01, at + 0.02], [0.8, 1.15]);
  return (
    <motion.span style={{ opacity, scale }}>
      <Heart size={14} className="text-candy" fill="#FF4F87" strokeWidth={0} />
    </motion.span>
  );
}

export default function BigWords() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const crackO = useTransform(scrollYProgress, [0.66, 0.8], [0.18, 0]);
  const crackS = useTransform(scrollYProgress, [0, 0.8], [1, 1.25]);
  const heartO = useTransform(scrollYProgress, [0.78, 0.9], [0, 0.22]);
  const heartS = useTransform(scrollYProgress, [0.78, 1], [1.25, 1]);
  const wmR = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <section ref={ref} className="relative h-[380vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* watermark hearts: broken -> mended */}
        <motion.div style={{ opacity: crackO, scale: crackS, rotate: wmR }} className="absolute">
          <HeartCrack className="size-[22rem] text-bubble sm:size-[30rem]" strokeWidth={0.7} />
        </motion.div>
        <motion.div style={{ opacity: heartO, scale: heartS }} className="absolute">
          <Heart className="size-[22rem] text-bubble sm:size-[30rem]" strokeWidth={0.7} fill="#FFD9E6" />
        </motion.div>

        <span className="absolute top-12 font-script text-2xl text-plum-soft/70 sm:text-3xl">
          sun lo, dil khol ke…
        </span>

        {/* beats */}
        <Beat progress={scrollYProgress} index={0}>
          <p className="text-center font-script text-6xl leading-tight text-candy sm:text-8xl">
            Tumhein rulana…
          </p>
        </Beat>

        <Beat progress={scrollYProgress} index={1}>
          <p className="max-w-4xl text-center text-4xl leading-[1.15] font-black tracking-tight sm:text-6xl">
            kabhi meri <span className="text-gradient">NIYYAT</span>
            <br />
            nahi thi.
          </p>
        </Beat>

        <Beat progress={scrollYProgress} index={2}>
          <p className="text-center font-script text-6xl leading-tight text-plum sm:text-8xl">
            Tumhare aansu…
          </p>
        </Beat>

        <Beat progress={scrollYProgress} index={3}>
          <p className="max-w-4xl text-center text-4xl leading-[1.15] font-black tracking-tight sm:text-6xl">
            meri sab se badi <span className="text-gradient">SAZA</span> hain.
          </p>
        </Beat>

        <Beat progress={scrollYProgress} index={4}>
          <div className="flex flex-col items-center gap-6 text-center">
            <Heart
              className="size-16 animate-heartbeat text-candy sm:size-20"
              fill="#FF4F87"
              strokeWidth={0}
            />
            <p className="max-w-4xl text-4xl leading-[1.2] font-black tracking-tight sm:text-6xl">
              Ab sirf{" "}
              <span className="font-script text-6xl text-candy sm:text-7xl">
                tumhari smile
              </span>{" "}
              chahiye.
            </p>
          </div>
        </Beat>

        {/* progress dots */}
        <div className="absolute bottom-12 flex items-center gap-3">
          {Array.from({ length: BEAT_COUNT }, (_, i) => (
            <Dot key={i} progress={scrollYProgress} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
