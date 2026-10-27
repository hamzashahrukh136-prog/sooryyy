import { useEffect } from "react";
import Lenis from "lenis";
import { motion, useScroll, useSpring } from "framer-motion";
import { Heart } from "lucide-react";

import Ambient from "./components/Ambient";
import Hero from "./components/Hero";
import Story from "./components/Story";
import UsRaat from "./components/UsRaat";
import BigWords from "./components/BigWords";
import Letter from "./components/Letter";
import PromiseSection from "./components/Promise";
import Forgive from "./components/Forgive";

function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {Array.from({ length: 4 }).map((_, i) => (
        <span key={i} className="flex items-center gap-10">
          <span className="font-script text-4xl text-plum">sorry jaanu</span>
          <Heart size={16} className="text-candy" fill="#FF4F87" strokeWidth={0} />
          <span className="text-gradient text-lg font-black tracking-[0.25em] uppercase">
            maaf kar do na
          </span>
          <Heart size={16} className="text-lilac" fill="#A78BFA" strokeWidth={0} />
          <span className="text-sm font-extrabold tracking-[0.3em] text-plum-soft uppercase">
            kabhi phir nahi
          </span>
          <Heart size={16} className="text-bubble" fill="#FF8FB3" strokeWidth={0} />
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative -rotate-1 scale-105 overflow-hidden border-y border-blush/70 bg-gradient-to-r from-petal via-white to-lilac-soft py-5">
      <div className="animate-marquee flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let rafId: number;
    const loop = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });

  return (
    <div className="relative min-h-screen overflow-x-clip bg-cream font-soft text-plum">
      <div className="grain" />
      <Ambient />

      {/* scroll progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 right-0 left-0 z-[95] h-1.5 origin-left bg-gradient-to-r from-candy via-bubble to-lilac"
      />

      {/* brand */}
      <div className="glass fixed top-4 left-4 z-[80] flex items-center gap-2.5 rounded-full py-1.5 pr-5 pl-1.5 shadow-lg shadow-rose-200/50">
        <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-candy to-lilac text-white">
          <Heart size={14} fill="currentColor" strokeWidth={0} className="animate-heartbeat" />
        </span>
        <span className="font-script text-xl leading-none text-plum">sorry, jaanu</span>
      </div>

      {/* top-right heartbeat */}
      <div className="glass fixed top-4 right-4 z-[80] flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-black tracking-[0.25em] text-candy uppercase shadow-lg shadow-rose-200/50">
        <Heart size={12} fill="currentColor" strokeWidth={0} className="animate-heartbeat" />
        dil se
      </div>

      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Story />
        <UsRaat />
        <BigWords />
        <Letter />
        <PromiseSection />
        <Forgive />
      </main>

      <footer className="relative z-10 px-6 py-16 text-center">
        <Heart
          size={26}
          fill="currentColor"
          strokeWidth={0}
          className="mx-auto animate-heartbeat text-candy"
        />
        <p className="mt-5 font-script text-3xl text-plum">
          banaya hai — sirf <span className="text-candy">tumhari smile</span> ke liye
        </p>
        <p className="mt-3 text-[10px] font-black tracking-[0.3em] text-plum-soft uppercase">
          chahe ghar ke masail hon ya poori duniya • tum pehle ho • hamesha
        </p>
      </footer>
    </div>
  );
}
