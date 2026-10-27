import {
  HandHeart,
  MessageCircleHeart,
  PenLine,
  ShieldCheck,
  Smile,
} from "lucide-react";
import { Kicker, Reveal } from "./Reveal";

const promises = [
  {
    icon: MessageCircleHeart,
    grad: "from-candy to-bubble",
    title: "Seedha baat karunga",
    text: "Jo bhi ho — sab se pehle tumse kahunga. Ab koi 'andar andar' wali film nahi chalegi. Pakka.",
  },
  {
    icon: Smile,
    grad: "from-lilac to-bubble",
    title: "Tumhari smile first",
    text: "Meri to-do list ka item #1 hamesha tumhari khushi rahegi. Baqi sab — line mein, baad mein.",
  },
  {
    icon: ShieldCheck,
    grad: "from-peach to-candy",
    title: "Tension share, transfer nahi",
    text: "Ghar ke masail kabhi tum pe nahi utaarunga. Tum meri sukoon ho — stress ka target bilkul nahi.",
  },
  {
    icon: HandHeart,
    grad: "from-bubble to-lilac",
    title: "Kabhi akela nahi",
    text: "Group ho ya zindagi — hum dono ek hi team hain. Har mood mein saath, bina kisi drama ke.",
  },
];

export default function PromiseSection() {
  return (
    <section className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <Kicker icon={<ShieldCheck size={13} strokeWidth={2.5} />}>
              ab se — signed waada
            </Kicker>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 text-5xl font-black tracking-tight sm:text-6xl">
              <span className="font-script text-5xl text-candy sm:text-6xl">
                Waada raha…
              </span>
              <span className="mt-1 block text-3xl sm:text-4xl">
                seedha <span className="text-gradient">dil se, likh ke.</span>
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p, i) => (
            <Reveal key={p.title} delay={0.08 + i * 0.1}>
              <div className="group relative h-full rounded-[1.75rem] border border-white/80 bg-white/70 p-7 shadow-[0_18px_45px_-18px_rgba(255,143,179,0.5)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_55px_-20px_rgba(255,79,135,0.5)]">
                <span className="absolute top-5 right-6 font-script text-3xl text-blush transition-colors duration-500 group-hover:text-bubble">
                  0{i + 1}
                </span>
                <span
                  className={`grid size-13 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg shadow-rose-200 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 ${p.grad}`}
                >
                  <p.icon size={22} strokeWidth={2.2} />
                </span>
                <h3 className="mt-5 text-lg font-extrabold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-7 font-semibold text-plum-soft">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-16 flex flex-col items-center gap-5">
          <div className="flex items-center gap-4">
            <span className="grid size-24 rotate-6 place-items-center rounded-full border-2 border-dashed border-bubble bg-white/70 shadow-inner">
              <span className="text-center font-script text-xl leading-tight text-candy">
                signed
                <PenLine size={14} className="mx-auto mt-0.5 text-bubble" />
              </span>
            </span>
            <span className="rounded-full bg-gradient-to-r from-candy to-lilac px-6 py-3 text-xs font-black tracking-[0.2em] text-white uppercase shadow-lg shadow-rose-300/50">
              Signed • Sealed • Promised
            </span>
          </div>
          <p className="font-script text-4xl text-plum">
            — tumhara, <span className="text-candy">sirf tumhara.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
