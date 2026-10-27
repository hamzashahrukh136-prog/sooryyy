import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  CircleHelp,
  CloudLightning,
  LogOut,
  MessagesSquare,
  Quote,
  UserPlus,
} from "lucide-react";
import { EASE, Kicker, Reveal } from "./Reveal";

const steps = [
  {
    icon: LogOut,
    title: "Tumne group leave kiya",
    text: "Yeh dekh kar sach mein bohat ajeeb laga. Dimaag mein bas sawal hi sawal — aisa kya ho gaya, sab theek to hai na?",
  },
  {
    icon: UserPlus,
    title: "Ahmed pehle se group mein tha",
    text: "Phir nazar padi ke Ahmed already add hai. Yeh aur bhi zyada ajeeb laga — aur meri confusion bas double ho gayi.",
  },
  {
    icon: CloudLightning,
    title: "Aur main already disturb tha",
    text: "Ghar ki tension ke upar se yeh sab dekh kar main bilkul pareshan ho gaya. Sochne samajhne ki salahiyat hi khatam ho gayi thi.",
  },
  {
    icon: CircleHelp,
    title: "Samajh nahi aaya kya karun",
    text: "Kya kahun? Kis se kahun? Kuch bhi clear nahi tha. Aur isi uljhan mein rehte rehte… sab haath se nikal gaya.",
  },
];

export default function UsRaat() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 72%", "end 58%"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.5,
  });

  return (
    <section id="raat" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <Kicker icon={<MessagesSquare size={13} strokeWidth={2.5} />}>
              us raat — step by step
            </Kicker>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 text-5xl font-black tracking-tight sm:text-6xl">
              <span className="font-script text-5xl text-candy sm:text-6xl">
                Us raat jo hua…
              </span>
              <span className="mt-1 block text-3xl sm:text-4xl">
                meri <span className="text-gradient">be-bunyad confusion.</span>
              </span>
            </h2>
          </Reveal>
        </div>

        {/* timeline */}
        <div ref={listRef} className="relative mx-auto mt-20 max-w-4xl">
          {/* spine */}
          <div className="absolute top-0 bottom-0 left-5 w-[3px] -translate-x-1/2 rounded-full bg-blush md:left-1/2" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute top-0 bottom-0 left-5 w-[3px] -translate-x-1/2 origin-top rounded-full bg-gradient-to-b from-bubble via-candy to-lilac"
          />

          <div className="space-y-12 md:space-y-16">
            {steps.map((s, i) => {
              const leftSide = i % 2 === 1;
              return (
                <div key={s.title} className="relative md:grid md:grid-cols-2 md:gap-20">
                  {/* node */}
                  <motion.span
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-90px" }}
                    transition={{ type: "spring", stiffness: 220, damping: 14 }}
                    className="absolute top-1 left-5 z-10 grid size-11 -translate-x-1/2 place-items-center rounded-full border-2 border-blush bg-white text-candy shadow-md shadow-rose-200 md:left-1/2"
                  >
                    <s.icon size={17} strokeWidth={2.4} />
                  </motion.span>

                  {/* card */}
                  <motion.div
                    initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, ease: EASE }}
                    className={`ml-14 md:ml-0 ${
                      leftSide ? "md:col-start-1 md:row-start-1" : "md:col-start-2"
                    }`}
                  >
                    <div
                      className={`relative rounded-[1.75rem] border border-white/80 bg-white/75 p-7 shadow-[0_18px_45px_-18px_rgba(255,143,179,0.55)] backdrop-blur-md transition-transform duration-500 hover:-translate-y-1.5 ${
                        leftSide ? "-rotate-1" : "rotate-1"
                      } hover:rotate-0`}
                    >
                      <span className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-candy to-lilac px-3 py-1 text-[10px] font-black tracking-[0.2em] text-white uppercase shadow-md shadow-rose-300/60">
                        step 0{i + 1}
                      </span>
                      <h3 className="text-lg font-extrabold tracking-tight sm:text-xl">
                        {s.title}
                      </h3>
                      <p className="mt-2.5 text-[14.5px] leading-7 font-semibold text-plum-soft">
                        {s.text}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* the truth */}
        <Reveal delay={0.05} className="mx-auto mt-24 max-w-2xl">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-blush/70 bg-gradient-to-br from-petal via-white to-lilac-soft p-9 text-center shadow-xl shadow-rose-200/50 sm:p-12">
            <Quote
              aria-hidden
              className="absolute -top-4 -left-2 size-28 -rotate-12 text-blush/60"
              strokeWidth={1.2}
            />
            <p className="relative font-script text-3xl leading-snug text-candy sm:text-4xl">
              &ldquo;Sach yeh hai — ghalati sirf meri hai.&rdquo;
            </p>
            <p className="relative mt-5 text-[15px] leading-8 font-semibold text-plum-soft">
              Tumhein rulana ya hurt karna kabhi meri niyyat nahi thi. Main andar
              hi andar ghut-ta raha, jabke mujhe seedha tumse baat karni chahiye
              thi. Waqt pe lafz na mil sake… aur ek chhoti si baat itni badi ho
              gayi.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
