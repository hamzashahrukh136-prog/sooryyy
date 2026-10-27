import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Heart, HeartHandshake, Sparkles } from "lucide-react";
import sorryBear from "../assets/sorry-bear.png";
import { EASE } from "./Reveal";

const parent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 36, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: EASE },
  },
};

const chips = [
  { icon: Heart, label: "sorry x1000", cls: "top-4 -left-3 sm:-left-10", delay: "0.4s" },
  { icon: Sparkles, label: "phir kabhi nahi", cls: "-right-2 sm:-right-10 top-1/3", delay: "1.6s" },
  { icon: HeartHandshake, label: "bilkul dil se", cls: "bottom-6 left-3 sm:-left-4", delay: "2.6s" },
];

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const rImg = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const fade = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const wmY = useTransform(scrollYProgress, [0, 1], [0, 220]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-visible px-6 pt-28 pb-24"
    >
      {/* giant watermark */}
      <motion.span
        aria-hidden
        style={{ y: wmY }}
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 select-none font-script text-[24vw] leading-none text-blush/70"
      >
        sorry
      </motion.span>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        {/* ------- copy ------- */}
        <motion.div
          variants={parent}
          initial="hidden"
          animate="show"
          style={{ y: yText, opacity: fade }}
          className="relative z-10"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-blush/80 bg-white/70 px-5 py-2 text-[11px] font-extrabold uppercase tracking-[0.25em] text-candy shadow-[0_10px_30px_-10px_rgba(255,79,135,0.45)] backdrop-blur-md">
              <Sparkles size={13} strokeWidth={2.5} />
              sirf tumhare liye, poori mohabbat ke saath
            </span>
          </motion.div>

          <motion.h1 variants={item} className="mt-8">
            <span className="block font-script text-5xl text-candy sm:text-6xl">
              Meri Jaanu,
            </span>
            <span className="mt-3 block text-[clamp(2.9rem,7.5vw,5.4rem)] leading-[0.98] font-black tracking-tight">
              I&apos;M SO
              <br />
              <span className="text-gradient">SORRY.</span>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-md text-[15px] leading-8 font-semibold text-plum-soft sm:text-base"
          >
            Teen din ki tension, ek ajeeb si misunderstanding — aur ek sach jo
            main waqt pe keh nahi saka. Neeche scroll karo… har line dil se
            likhi hai, sirf tumhein manane ke liye.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => go("story")}
              className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-gradient-to-r from-candy to-lilac px-8 py-4 text-sm font-extrabold tracking-wide text-white shadow-xl shadow-rose-300/50 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.03] active:scale-95"
            >
              Poori Baat Suno
              <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-1" />
            </button>
            <button
              onClick={() => go("forgive")}
              className="inline-flex cursor-pointer items-center gap-2.5 rounded-full border-2 border-blush bg-white/70 px-8 py-4 text-sm font-extrabold tracking-wide text-plum backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-bubble hover:bg-petal active:scale-95"
            >
              Seedha Maaf Kar Do
              <HeartHandshake size={17} className="text-candy" />
            </button>
          </motion.div>
        </motion.div>

        {/* ------- visual ------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: EASE }}
          style={{ y: yImg, rotate: rImg }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-bubble/40 via-lilac/30 to-peach/40 blur-2xl" />
          <div className="absolute -inset-5 animate-spin-slow rounded-full border-2 border-dashed border-bubble/50" />

          <div className="blob-frame relative shadow-2xl shadow-rose-300/40 ring-8 ring-white/60">
            <img
              src={sorryBear}
              alt="sorry bear dil se maafi maangta hua"
              className="aspect-square w-full object-cover"
            />
          </div>

          {chips.map((c) => (
            <span
              key={c.label}
              style={{ animationDelay: c.delay }}
              className={`glass absolute ${c.cls} animate-floaty flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-extrabold tracking-wide text-plum shadow-lg shadow-rose-200/50`}
            >
              <c.icon size={14} className="text-candy" fill="#FF4F87" strokeWidth={2.5} />
              {c.label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] font-extrabold tracking-[0.35em] uppercase text-plum-soft">
          scroll karo
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="grid size-9 place-items-center rounded-full bg-white/80 text-candy shadow-md shadow-rose-200"
        >
          <ArrowDown size={15} strokeWidth={3} />
        </motion.span>
      </motion.div>
    </section>
  );
}
