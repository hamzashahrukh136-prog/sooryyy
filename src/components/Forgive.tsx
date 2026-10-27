import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, RotateCcw, Sparkles } from "lucide-react";
import happyBear from "../assets/happy-bear.png";
import { FloatingHearts } from "./Ambient";
import { EASE, Kicker, Reveal } from "./Reveal";

const NO_LABELS = [
  "Nahi...",
  "Pakka nahi?",
  "Socho zara",
  "Itna sakht dil?",
  "please na yaar",
  "okay, main gaya...",
];

const BURST_COLORS = ["#FF4F87", "#FF8FB3", "#A78BFA", "#FFC7A6"];

export default function Forgive() {
  const [answered, setAnswered] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [pos, setPos] = useState({ x: 66, y: 58 });
  const [burstKey, setBurstKey] = useState(0);

  const noGone = noCount > NO_LABELS.length - 1;

  const dodge = () => {
    setNoCount((c) => c + 1);
    setPos({ x: 6 + Math.random() * 72, y: 10 + Math.random() * 64 });
  };

  const bursts = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => {
        const a = (i / 24) * Math.PI * 2 + Math.random() * 0.5;
        return {
          x: Math.cos(a) * (120 + Math.random() * 180),
          y: Math.sin(a) * (110 + Math.random() * 150) - 40,
          size: 13 + Math.random() * 17,
          delay: Math.random() * 0.25,
          dur: 1.2 + Math.random() * 0.9,
          color: BURST_COLORS[i % BURST_COLORS.length],
        };
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [burstKey]
  );

  const reset = () => {
    setAnswered(false);
    setNoCount(0);
    setPos({ x: 66, y: 58 });
  };

  return (
    <section id="forgive" className="relative px-6 pt-28 pb-10 sm:pt-36">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <Kicker icon={<Heart size={13} strokeWidth={2.5} fill="#FF4F87" />}>
              ek aakhri sawal
            </Kicker>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 text-5xl font-black tracking-tight sm:text-6xl">
              <span className="font-script text-5xl text-candy sm:text-6xl">
                Kya tum mujhe
              </span>
              <span className="mt-1 block">
                <span className="text-gradient">maaf karogi,</span> Jaanu?
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 text-sm font-bold text-plum-soft">
              (dono options bohat pyaar se banaye hain — choose wisely)
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14">
          <div className="relative min-h-[26rem] overflow-hidden rounded-[2.5rem] border-2 border-dashed border-bubble/60 bg-white/50 shadow-inner backdrop-blur-sm sm:min-h-[28rem]">
            <AnimatePresence mode="wait">
              {!answered ? (
                <motion.div
                  key="ask"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  {/* corner stickers */}
                  <span className="absolute top-6 left-7 -rotate-12 font-script text-xl text-bubble/90">
                    haan bolo na…
                  </span>
                  <span className="absolute right-7 bottom-6 rotate-9 font-script text-xl text-lilac">
                    pwetty please
                  </span>

                  {/* YES */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {noCount >= 2 && (
                      <motion.span
                        aria-hidden
                        className="absolute -inset-2.5 rounded-full border-2 border-candy/50"
                        animate={{ scale: [1, 1.3], opacity: [0.8, 0] }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                      />
                    )}
                    <div className="flex flex-col items-center">
                      <motion.button
                        onClick={() => setAnswered(true)}
                        animate={{ scale: 1 + Math.min(noCount, 5) * 0.07 }}
                        whileHover={{ scale: 1.1 + Math.min(noCount, 5) * 0.07 }}
                        whileTap={{ scale: 0.92 }}
                        transition={{ type: "spring", stiffness: 260, damping: 15 }}
                        className="flex cursor-pointer items-center gap-2.5 rounded-full bg-gradient-to-r from-candy via-bubble to-lilac px-9 py-4.5 text-sm font-black tracking-wide text-white shadow-2xl shadow-rose-300/70 sm:px-10 sm:text-base"
                      >
                        <Heart size={17} fill="currentColor" strokeWidth={0} className="animate-heartbeat" />
                        Haan, maaf kar diya
                      </motion.button>
                      <span className="mt-3 font-script text-lg text-plum-soft/80">
                        (hint: yeh wala sahi hai)
                      </span>
                    </div>
                  </div>

                  {/* NO — the runaway */}
                  {!noGone && (
                    <motion.button
                      animate={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                      transition={{ type: "spring", stiffness: 350, damping: 20 }}
                      onPointerEnter={dodge}
                      onClick={dodge}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full border-2 border-blush bg-white px-6 py-2.5 text-xs font-extrabold whitespace-nowrap text-plum-soft shadow-lg shadow-rose-100 ${
                        noCount > 0 ? "animate-wiggle" : ""
                      }`}
                    >
                      {NO_LABELS[Math.min(noCount, NO_LABELS.length - 1)]}
                    </motion.button>
                  )}

                  {noGone && (
                    <motion.p
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute bottom-5 left-1/2 w-full -translate-x-1/2 text-center font-script text-2xl text-candy"
                    >
                      dekha — &ldquo;nahi&rdquo; to option mein hi nahi tha
                    </motion.p>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="love"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex min-h-[26rem] flex-col items-center justify-center overflow-hidden px-6 py-12 text-center sm:min-h-[28rem]"
                >
                  <FloatingHearts count={14} celebrate />

                  {/* burst */}
                  <div aria-hidden className="pointer-events-none absolute inset-0">
                    {bursts.map((b, i) => (
                      <motion.span
                        key={`${burstKey}-${i}`}
                        initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                        animate={{ x: b.x, y: b.y, scale: 1, opacity: 0 }}
                        transition={{ duration: b.dur, delay: b.delay, ease: EASE }}
                        className="absolute top-1/2 left-1/2"
                      >
                        <Heart
                          style={{ width: b.size, height: b.size, color: b.color }}
                          fill={b.color}
                          strokeWidth={0}
                        />
                      </motion.span>
                    ))}
                  </div>

                  <motion.img
                    src={happyBear}
                    alt="khushi se jhoomta hua bear"
                    initial={{ scale: 0, rotate: -18 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 160, damping: 13, delay: 0.15 }}
                    className="size-44 rounded-full object-cover shadow-2xl shadow-rose-300/60 ring-8 ring-white sm:size-52"
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.8, ease: EASE }}
                  >
                    <p className="mt-7 font-script text-4xl text-candy sm:text-5xl">
                      Shukriya, Jaanu…
                    </p>
                    <p className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                      Tum duniya ki <span className="text-gradient">sab se best</span> ho.
                    </p>
                    <p className="mx-auto mt-4 max-w-md text-sm leading-7 font-semibold text-plum-soft">
                      Ab se — sirf pyaar, hansti hui baatein aur poora saath. Aur
                      haan, aaj ki ice-cream meri taraf se. I love you, hamesha.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-8 flex flex-wrap items-center justify-center gap-3"
                  >
                    <button
                      onClick={() => setBurstKey((k) => k + 1)}
                      className="flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-candy to-lilac px-6 py-3 text-xs font-black tracking-wider text-white uppercase shadow-lg shadow-rose-300/60 transition-transform hover:scale-105 active:scale-95"
                    >
                      <Sparkles size={14} />
                      aur hearts chahiye?
                    </button>
                    <button
                      onClick={reset}
                      className="flex cursor-pointer items-center gap-2 rounded-full border-2 border-blush bg-white/80 px-6 py-3 text-xs font-black tracking-wider text-plum-soft uppercase transition-all hover:border-bubble hover:text-plum active:scale-95"
                    >
                      <RotateCcw size={14} />
                      shuru se dekho
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
