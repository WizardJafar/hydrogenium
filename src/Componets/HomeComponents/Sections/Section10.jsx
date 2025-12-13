'use client';

import { useState } from "react";
import AnimatedContent from "../../ReactBits/AnimatedContent";

export function Section10() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-10">
          Teri orqali NAD+ kiritish: tomir ichiga ukol qilishga<br />
          qulay va samarali alternativa
        </h2>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
          Yoshartiruvchi vositalar bozoriga NAD+ (nikotinamid adenin dinukleotid)
          preparatlari tez sur’atlar bilan kirib keldi — bu hujayra energiyasi va
          salomatlikni saqlashda haqiqiy inqilob.
        </p>

        <button
          onClick={() => setOpen(prev => !prev)}
          className="mt-12 px-10 py-4 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition"
          style={{ backgroundColor: '#4a86ad' }}
        >
          {open ? "Yopish" : "To‘liq maqolani o‘qish"}
        </button>

        {/* ⬇️ ДО КЛИКА ЭТОГО ВООБЩЕ НЕТ */}
        {open && (
          <AnimatedContent isVisible={open}
            distance={40}
            direction="vertical"
            duration={1}
            ease="ease-out"
            initialOpacity={0}
            animateOpacity={true}
            delay={0.1}
            threshold={0.2}>
            <div className="mt-12 text-left max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed space-y-6">
              <p>
                NAD+ — bu har bir tirik hujayrada mavjud bo‘lgan muhim koferment
                bo‘lib, energiya ishlab chiqarish jarayonida markaziy rol o‘ynaydi.
                Yoshi o‘tishi bilan organizmdagi NAD+ darajasi pasayadi, bu esa
                qarish jarayonining tezlashuviga olib keladi.
              </p>

              <p>
                Teri orqali NAD+ kiritish — bu noinvaziv va qulay usul bo‘lib,
                tomir ichiga ukol qilishdagi noqulayliklarsiz faol moddaning
                to‘qimalarga yetib borishini ta’minlaydi.
              </p>

              <p>
                Ilmiy tadqiqotlar NAD+ mitoxondrial faollikni qo‘llab-quvvatlashi,
                DNKni tiklash mexanizmlarini faollashtirishi va oksidlovchi stressni
                kamaytirishini ko‘rsatadi.
              </p>

              <p>
                Zamonaviy apparat texnologiyalari yordamida NAD+ ning teri orqali
                yuborilishi sog‘lom qarish konsepsiyasining samarali qismiga
                aylanmoqda.
              </p>
            </div>
          </AnimatedContent>
        )}
      </div>
    </section>
  );
}
