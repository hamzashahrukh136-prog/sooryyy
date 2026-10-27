import { CircleHelp, CloudRain, HeartCrack, Home } from "lucide-react";
import { Kicker, Reveal } from "./Reveal";

const cards = [
  {
    icon: Home,
    grad: "from-bubble to-candy",
    title: "Ghar ke masail",
    text: "Teen din se ghar mein kaafi pareshaniyan chal rahi thin. Har waqt bas dimaag wahin uljha rehta — kahin aur soch hi nahi pa raha tha.",
    tilt: "-rotate-1",
  },
  {
    icon: CloudRain,
    grad: "from-lilac to-bubble",
    title: "Bilkul disturb tha",
    text: "Itni tension ke na kisi se theek se baat ho payi, na kuch soch paya. Main poori tarah toota hua tha — aur kisi ko bata bhi nahi saka.",
    tilt: "rotate-1",
  },
  {
    icon: CircleHelp,
    grad: "from-peach to-candy",
    title: "Samajh hi nahi aaya",
    text: "Ke aakhir karun kya? Usi confusion mein galti ho gayi — aur uski takleef tum tak pahunchi. Tumhein, jo yeh sab deserve hi nahi karti thin.",
    tilt: "-rotate-1",
  },
];

export default function Story() {
  return (
    <section id="story" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <Kicker icon={<Home size={13} strokeWidth={2.5} />}>
              sab se pehle — meri side ki sachchai
            </Kicker>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 text-5xl font-black tracking-tight sm:text-6xl">
              <span className="font-script text-candy">Woh teen din…</span>
              <span className="mt-1 block text-3xl sm:text-4xl">
                jab main <span className="text-gradient">bilkul kho gaya.</span>
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={0.1 + i * 0.12}>
              <div
                className={`group relative h-full rounded-[2rem] border border-white/80 bg-white/70 p-8 shadow-[0_20px_50px_-20px_rgba(255,143,179,0.5)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:rotate-0 hover:shadow-[0_30px_60px_-20px_rgba(255,79,135,0.5)] ${c.tilt}`}
              >
                <span
                  className={`grid size-14 rotate-3 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg shadow-rose-200 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 ${c.grad}`}
                >
                  <c.icon size={24} strokeWidth={2.2} />
                </span>
                <h3 className="mt-6 text-xl font-extrabold tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 font-semibold text-plum-soft">
                  {c.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 flex justify-center">
          <div className="glass flex max-w-xl items-center gap-4 rounded-full px-7 py-4 shadow-lg shadow-rose-200/60">
            <HeartCrack size={22} className="shrink-0 text-candy" />
            <p className="text-sm font-extrabold sm:text-[15px]">
              Lekin ek baat pakki hai — tumhein hurt karna mera maqsood{" "}
              <span className="font-script text-xl text-candy">kabhi nahi</span> tha.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
