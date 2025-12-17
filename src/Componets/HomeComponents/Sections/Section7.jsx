'use client';
import { useState } from "react";
import hydrogenium from '../../../assets/hydrogenium.png';
import ochki from '../../../assets/ochki.png';
import nos from '../../../assets/nos.png'
import maskaOq from '../../../assets/maskaOq.png'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import naushnik2 from "../../../assets/naushnik2.png";

export default function Section7() {
  const [activeTab, setActiveTab] = useState("procedure");

  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("998");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const BOT_TOKEN = "8559354625:AAFOExAj1BTe2tR2A4O8r_htOMl0ATtPk60";
  const CHAT_ID = "-5083792285";

  const sendToTelegram = async () => {
    if (!phone || phone.length < 12) {
      toast.error("Telefon raqamini to‘liq kiriting");
      return;
    }

    if (!message.trim()) {
      toast.error("Xabar bo‘sh bo‘lishi mumkin emas");
      return;
    }

    setLoading(true);

    const text = `998
📞 Telefon: ${phone}
📝 Xabar:
${message}`;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
        }),
      });

      toast.success("So‘rov muvaffaqiyatli yuborildi");

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
          Protsedura davomiyligi <strong>15–45 daqiqa</strong>.
        </>
      ),
    },
    {
      id: "cannula",
      label: "BURUN KANALLARI",
      title: "Burun kanallari",
      image: nos,
      description: <>Vodorod nafas yo‘llari orqali o‘pkaga kiradi.</>,
    },
    {
      id: "glasses",
      label: "KO‘Z OYNAKLAR",
      title: "Ko‘z oynaklari",
      image: ochki,
      description: <>Vodorod ko‘z tuzilmalariga ta’sir qiladi.</>,
    },
    {
      id: "headphones",
      label: "QULOQCHINLAR",
      title: "Quloqchinlar",
      image: naushnik2,
      description: <>Vodorod eshitish tizimiga ta’sir qiladi.</>,
    },
    {
      id: "mask",
      label: "VODORODLI SPA MASKA",
      title: "Vodorodli SPA maska",
      image: maskaOq,
      description: <>Isitish va namlik samaradorlikni oshiradi.</>,
    },
  ];

  const current = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-10 text-sm sm:text-base lg:text-lg font-medium pb-4 border-b border-gray-200 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 px-2 border-b-4 transition-all whitespace-nowrap ${activeTab === tab.id
                ? "text-[#4a86ad] border-[#4a86ad]"
                : "text-gray-500 border-transparent"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <img
            loading="lazy"
            src={current.image}
            alt={current.title}
            className="w-full rounded-2xl shadow-2xl object-cover"
          />

          <div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-[#4a86ad]">
              {current.title}
            </h2>

            <div className="text-lg text-gray-700 leading-relaxed">
              {current.description}
            </div>

            <button
              onClick={() => setOpen(true)}
              className="mt-12 px-10 py-5 rounded-full text-white text-lg font-semibold shadow-lg"
              style={{ backgroundColor: '#4a86ad' }}
            >
              MASLAHAT OLISH
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <input
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="w-full mb-4 px-4 py-3 border rounded-lg"
            />

            <textarea
              rows={4}
              placeholder="Xabaringiz"
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="w-full mb-6 px-4 py-3 border rounded-lg resize-none"
            />

            <div className="flex gap-4">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 py-3 border rounded-lg"
              >
                Yopish
              </button>

              <button
                onClick={sendToTelegram}
                disabled={loading}
                className="flex-1 py-3 rounded-lg text-white"
                style={{ backgroundColor: '#4a86ad' }}
              >
                {loading ? "Yuborilmoqda..." : "Yuborish"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
