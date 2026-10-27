import { Heart, HeartHandshake, Mail } from "lucide-react";
import { Kicker, Reveal } from "./Reveal";

export default function Letter() {
  return (
    <section className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <Kicker icon={<Mail size={13} strokeWidth={2.5} />}>
              lage haath — ek chhoti si chitthi
            </Kicker>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 text-5xl font-black tracking-tight sm:text-6xl">
              <span className="font-script text-5xl text-candy sm:text-6xl">
                Tumhare naam…
              </span>
              <span className="mt-1 block text-3xl sm:text-4xl">
                kaagaz pe <span className="text-gradient">dil utaar diya.</span>
              </span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="relative mx-auto mt-16 max-w-3xl">
          <div className="group relative -rotate-1 rounded-[1.6rem] bg-[#FFFDF8] p-7 shadow-[0_35px_80px_-30px_rgba(255,79,135,0.45)] ring-1 ring-blush/70 transition-transform duration-700 hover:rotate-0 sm:p-13">
            <div className="paper-lines pointer-events-none absolute inset-x-4 top-24 bottom-6 rounded-xl" />

            {/* washi tapes */}
            <span className="tape absolute -top-4 left-10 h-8 w-28 -rotate-6" />
            <span className="tape absolute -top-4 right-10 h-8 w-28 rotate-6" />

            <div className="relative">
              <p className="font-script text-4xl text-candy">Meri Jaanu,</p>

              <div className="mt-6 space-y-5 text-[15px] leading-8 font-semibold text-plum-soft sm:text-base sm:leading-9">
                <p>
                  Pata hai, jab se tum naraz ho na… sab kuch{" "}
                  <span className="font-bold text-plum">adhoora adhoora</span>{" "}
                  lagta hai. Ghar ke masail ka bojh itna tha ke main khud hi kho
                  gaya tha — aur apne is khauf aur pareshani mein, maine{" "}
                  <span className="text-gradient font-extrabold">
                    tumhein takleef pohcha di.
                  </span>
                </p>
                <p>
                  Main chahta to yeh tha ke tumhare saamne sab theek rakhu,
                  strong laghu… lekin waqt pe lafz hi na mil sake. Tumhari
                  aankhon ke aansu meri wajah se thay — aur yeh baat mujhe andar
                  tak cheer ke rakh deti hai.{" "}
                  <span className="font-bold text-plum">
                    Tum deserve karti ho sirf khushiyan, hansti hui subahain, aur
                    ek aisa banda jo kabhi tumhein akela na chhode.
                  </span>
                </p>
                <p>
                  Sorry — har us lamhe ke liye jab main chup raha. Sorry — us
                  raat ki confusion ke liye. Aur sab se zyada sorry —{" "}
                  <span className="text-gradient font-extrabold">
                    tumhein rulane ke liye.
                  </span>
                </p>
              </div>

              <div className="mt-8 flex items-end justify-between gap-4">
                <div className="flex items-center gap-1.5 text-blush">
                  <Heart size={13} fill="currentColor" strokeWidth={0} />
                  <Heart size={17} fill="currentColor" strokeWidth={0} className="text-bubble" />
                  <Heart size={22} fill="currentColor" strokeWidth={0} className="text-candy" />
                </div>
                <p className="text-right font-script text-4xl leading-tight text-plum">
                  — sirf tumhara,
                  <span className="block text-2xl text-candy">hamesha ke liye</span>
                </p>
              </div>
            </div>

            {/* wax seal */}
            <div className="absolute -right-4 -bottom-7 grid size-20 -rotate-12 place-items-center rounded-full bg-gradient-to-br from-candy via-bubble to-lilac shadow-xl shadow-rose-300/70 ring-8 ring-[#FFFDF8] transition-transform duration-500 hover:rotate-3 hover:scale-110 sm:-right-7 sm:size-24">
              <Heart className="size-8 text-white sm:size-9" fill="currentColor" strokeWidth={0} />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 flex justify-center">
          <div className="glass flex max-w-2xl items-start gap-4 rounded-3xl px-7 py-5 shadow-lg shadow-rose-200/50">
            <HeartHandshake size={22} className="mt-0.5 shrink-0 text-candy" />
            <p className="text-sm leading-7 font-bold text-plum-soft">
              <span className="font-script text-2xl text-candy">P.S. </span>
              Ahmed ka group mein hona — bas ek misunderstanding thi. Meri duniya
              ka center <span className="text-plum">tum ho</span>… aur wahan kisi
              aur ki jagah kabhi banti hi nahi.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
