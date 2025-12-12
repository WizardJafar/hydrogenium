// Section7 — Процедура
'use client';
import { useState } from "react";
import hydrogenium from '../../../assets/hydrogenium.png';
import ochki from '../../../assets/ochki.png';
import nos from '../../../assets/nos.png'
import naushniknax from '../../../assets/naushniknax.png'
import maskaOq from '../../../assets/maskaOq.png'




export default function Section7() {
  const [activeTab, setActiveTab] = useState("procedure");

  const tabs = [
    {
      id: "procedure",
      label: "PROTSEDURA QANDAY O‘TADI?",
      title: "Protsedura qanday o‘tadi?",
      image: hydrogenium,
      description: (
        <>
          Protsedura gazsimon vodorodni quyidagi aksessuarlarga yetkazib berish orqali amalga oshiriladi:
          <br /><br />
          • Burun kanallari<br />
          • Ko‘zoynak<br />
          • Quloqchinlar<br />
          • Vodorodli SPA maska / Ingalyatsiya maskasi
          <br /><br />
          Protsedura davomiyligi vodorod oqimiga bog‘liq bo‘lib, <strong>15 dan 45 daqiqagacha</strong> davom etadi.
        </>
      ),
    },
    {
      id: "cannula",
      label: "BURUN KANALLARI",
      title: "Burun kanallari",
      image: nos,
      description: (
        <>
          Vodorod nafas yo‘llari orqali o‘pkaga kiradi, u yerda alveolalarda bosim gradienti tufayli alveolyar membranalardan o‘tib, kislorod kabi tizimli qon oqimiga kiradi.
          <br /><br />
          Qonga kirgan vodorod butun organizmga tarqaladi, hujayra orasi bo‘shliqlar va hujayralarga kirib, o‘z ta’sirini ko‘rsatadi.
        </>
      ),
    },
    {
      id: "glasses",
      label: "KO‘Z OYNAKLAR",
      title: "Ko‘z oynaklari",
      image: ochki,
      description: (
        <>
          Vodorod ko‘tarilgan bosim ostida (oynaklarning mahkam yopishishi tufayli) kiritiladi.
          <br /><br />
          Vodorod shox parda orqali erkin o‘tib, ko‘zning barcha tuzilmalariga (to‘r parda, shishasimon tana, linza, ko‘rish nervi va boshq.) ta’sir qiladi hamda ko‘zning tomirli qavati orqali tizimli qon oqimiga kiradi.
        </>
      ),
    },
    {
      id: "headphones",
      label: "QULOQCHINLAR",
      title: "Quloqchinlar",
      image: naushniknax,
      description: (
        <>
          Amalga oshirish yuqori bosim ostida (quloqchinlarning mahkam yopishishi tufayli).
          <br /><br />
          Vodorod tashqi eshitish yo‘li va quloq pardasi orqali eshitish va muvozanat organining barcha tuzilmalariga kiradi.
        </>
      ),
    },
    {
      id: "mask",
      label: "VODORODLI SPA MASKA",
      title: "Vodorodli SPA maska",
      image: maskaOq,
      description: (
        <>
          Vodorod silikon muhr bilan tashqi muhitdan yopiq maskaga beriladi.
          <br /><br />
          SPA maskada tashqi havo bilan nafas olish uchun burun portali mavjud bo‘lib, bu maska ostidagi maksimal vodorod konsentratsiyasini ta’minlaydi.
          <br /><br />
          O‘rnatilgan isitish elementi va bug‘ generatoridan keladigan harorat va namlik vodorodning kirib borish qobiliyatini va yuz terisi hujayralarining yoshartiruvchi ta’sirini kuchaytiradi, mikroqon aylanishini yaxshilaydi, metabolizmni tezlashtiradi va hujayralarni namlaydi.
        </>
      ),
    },
  ];

  const current = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-10 text-sm sm:text-base lg:text-lg font-medium pb-4 border-b border-gray-200 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 px-2 sm:px-0 border-b-4 transition-all duration-300 whitespace-nowrap text-center flex-shrink-0 ${activeTab === tab.id
                ? "text-[#4a86ad] border-[#4a86ad]"
                : "text-gray-500 border-transparent hover:text-[#4a86ad]"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-auto max-h-[400px] sm:max-h-[500px] lg:max-h-none rounded-xl sm:rounded-2xl shadow-2xl object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8" style={{ color: '#4a86ad' }}>
              {current.title}
            </h2>
            <div className="text-base sm:text-lg text-gray-700 space-y-4 sm:space-y-6 leading-relaxed">
              {current.description}
            </div>
            <button
              className="mt-8 sm:mt-10 md:mt-12 w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full text-white text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: '#4a86ad' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3d7394'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4a86ad'}
            >
              MASLAHAT OLISH
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}