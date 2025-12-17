'use client';
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import naushnik2 from '../../../assets/naushnik2.png'
import maskaOq from '../../../assets/maskaOq.png'
import ochki from '../../../assets/ochki.png'
import hydrogenium from '../../../assets/hydrogenium.png'
import nos from '../../../assets/nos.png'

export default function Section7() {
  const [activeTab, setActiveTab] = useState("procedure");
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [phone, setPhone] = useState("998");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const BOT_TOKEN = "8559354625:AAFOExAj1BTe2tR2A4O8r_htOMl0ATtPk60";
  const CHAT_ID = "-5083792285";

  const sendToTelegram = async () => {
    if (!phone || phone.length < 12) {
      toast.error("Telefon raqamini to'liq kiriting");
      return;
    }

    if (!message.trim()) {
      toast.error("Xabar bo'sh bo'lishi mumkin emas");
      return;
    }

    setLoading(true);

    const text = `📞 Telefon: ${phone}\n📝 Xabar:\n${message}`;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
        }),
      });

      toast.success("So'rov muvaffaqiyatli yuborildi");
      setPhone("998");
      setMessage("");
      setOpen(false);
    } catch {
      toast.error("Yuborishda xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    {
      id: "procedure",
      label: "PROTSEDURA",
      fullLabel: "PROTSEDURA QANDAY O'TADI?",
      title: "Protsedura qanday o'tadi?",
      image: hydrogenium,
      description: (
        <>
          Protsedura gazsimon vodorodni quyidagi aksessuarlarga yetkazib berish orqali amalga oshiriladi:
          <br /><br />
          • Burun kanallari<br />
          • Ko'zoynak<br />
          • Quloqchinlar<br />
          • Vodorodli SPA maska / Ingalyatsiya maskasi
          <br /><br />
          Protsedura davomiyligi <strong>15–45 daqiqa</strong>.
        </>
      ),
    },
    {
      id: "cannula",
      label: "BURUN",
      fullLabel: "BURUN KANALLARI ORQALI",
      title: "Burun kanallari orqali",
      image: nos,
      description: <>Vodorod nafas yo'llari orqali o'pkaga kiradi.</>,
    },
    {
      id: "glasses",
      label: "KO'Z",
      fullLabel: "KO'Z OYNAKLAR ORQALI",
      title: "Ko'z oynaklari orqali",
      image: ochki,
      description: <>Vodorod ko'z tuzilmalariga ta'sir qiladi.</>,
    },
    {
      id: "headphones",
      label: "QULOQ",
      fullLabel: "QULOQCHINLAR ORQALI",
      title: "Quloqchinlar orqali",
      image: naushnik2,
      description: <>Vodorod eshitish tizimiga ta'sir qiladi.</>,
    },
    {
      id: "mask",
      label: "MASKA",
      fullLabel: "VODORODLI SPA MASKA ERDAMIDA",
      title: "Vodorodli SPA maska erdamida",
      image: maskaOq,
      description: <>Isitish va namlik samaradorlikni oshiradi.</>,
    },
  ];

  const current = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Tabs - вертикальное меню на мобильных, горизонтальное на десктопе */}
        <div className="lg:flex lg:justify-center lg:gap-6 lg:text-base lg:font-medium lg:pb-4 lg:border-b lg:border-gray-200">
          {/* Мобильная версия - dropdown */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full px-4 py-3 bg-[#4a86ad] text-white rounded-lg flex items-center justify-between text-sm font-medium transition-all"
            >
              <span>{current.fullLabel}</span>
              <span className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            <div
              className={`mt-2 bg-white border rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${dropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-0'
                }`}
            >
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setDropdownOpen(false);
                  }}
                  style={{ transitionDelay: dropdownOpen ? `${index * 50}ms` : '0ms' }}
                  className={`w-full px-4 py-3 text-left text-sm transition-all duration-300 ${activeTab === tab.id
                      ? "bg-[#4a86ad] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                    } ${dropdownOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                >
                  {tab.fullLabel}
                </button>
              ))}
            </div>
          </div>

          {/* Десктопная версия */}
          <div className="hidden lg:contents">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 px-4 border-b-4 transition-all whitespace-nowrap ${activeTab === tab.id
                    ? "text-[#4a86ad] border-[#4a86ad]"
                    : "text-gray-500 border-transparent hover:text-[#4a86ad]"
                  }`}
              >
                {tab.fullLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">
          <img
            loading="lazy"
            src={current.image}
            alt={current.title}
            className="w-full rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl object-cover"
          />

          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#4a86ad]">
              {current.title}
            </h2>

            <div className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              {current.description}
            </div>

            <button
              onClick={() => setOpen(true)}
              className="mt-4 sm:mt-6 md:mt-8 lg:mt-12 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-white text-sm sm:text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: '#4a86ad' }}
            >
              MASLAHAT OLISH
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-4 sm:p-6 w-full max-w-md">
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#4a86ad]">
              Maslahat olish
            </h3>

            <input
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="Telefon raqam"
              className="w-full mb-3 sm:mb-4 px-3 sm:px-4 py-2 sm:py-3 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#4a86ad]"
            />

            <textarea
              rows={4}
              placeholder="Xabaringiz"
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="w-full mb-4 sm:mb-6 px-3 sm:px-4 py-2 sm:py-3 border rounded-lg resize-none text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#4a86ad]"
            />

            <div className="flex gap-3 sm:gap-4">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 py-2 sm:py-3 border border-gray-300 rounded-lg text-sm sm:text-base hover:bg-gray-50 transition-all"
              >
                Yopish
              </button>

              <button
                onClick={sendToTelegram}
                disabled={loading}
                className="flex-1 py-2 sm:py-3 rounded-lg text-white text-sm sm:text-base disabled:opacity-50 hover:opacity-90 transition-all"
                style={{ backgroundColor: '#4a86ad' }}
              >
                {loading ? "Yuborilmoqda..." : "Yuborish"}
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
}