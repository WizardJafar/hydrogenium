'use client';
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Section12() {
  const [open, setOpen] = useState(false);
  const [method, setMethod] = useState("Telefon");
  const [contact, setContact] = useState("998");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const BOT_TOKEN = "8559354625:AAFOExAj1BTe2tR2A4O8r_htOMl0ATtPk60";
  const CHAT_ID = "-5083792285";

  const sendToTelegram = async () => {
    if (!contact.trim()) {
      toast.error("Kontakt ma’lumotini kiriting");
      return;
    }

    if (method === "Telefon" && contact.length < 12) {
      toast.error("Telefon raqamini to‘liq kiriting");
      return;
    }

    setLoading(true);

    const text = `998
📩 Yangi ariza

📡 Aloqa turi: ${method}
📞 Kontakt: ${contact}
📝 Xabar:
${message || "—"}
    `;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
        }),
      });

      toast.success("Ariza yuborildi, javobni kuting!");

      setContact("998");
      setMessage("");
      setMethod("Telefon");
      setOpen(false);
    } catch {
      toast.error("Yuborishda xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-100 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#4a86ad' }}>
          Ko‘proq bilmoqchimisiz?
        </h2>

        <p className="text-xl text-gray-700 mb-10">
          Mutaxassisga savollar bering va uskunalarning<br />
          bepul demo ko‘rsatuviga yoziling
        </p>

        <button
          onClick={() => setOpen(true)}
          className="px-12 py-5 rounded-full text-white text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
          style={{ backgroundColor: '#4a86ad' }}
        >
          <span>Ariza qoldirish</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md text-left">

            {/* Method */}
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Qanday bog‘lanamiz?
            </label>
            <select
              value={method}
              onChange={(e) => {
                setMethod(e.target.value);
                setContact(e.target.value === "Telefon" ? "998" : "");
              }}
              className="w-full mb-4 px-4 py-3 border rounded-lg"
            >
              <option>Telefon</option>
              <option>Telegram</option>
            </select>

            {/* Contact */}
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder={method === "Telefon" ? "998901234567" : "@username"}
              className="w-full mb-4 px-4 py-3 border rounded-lg"
            />

            {/* Message (optional) */}
            <textarea
              rows={4}
              placeholder="Xabaringiz (ixtiyoriy)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
