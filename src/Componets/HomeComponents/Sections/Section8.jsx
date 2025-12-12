'use client';
import { useState } from "react";

export default function Section8() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [method, setMethod] = useState("Telefon");

  return (
    <section className="py-20 md:py-32 bg-black/80 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/demo-bg.jpg')" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 leading-tight">
          Apparatning bepul demo ko‘rsatuvi<br />
          va maslahat
        </h2>

        <form className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Ism */}
            <div>
              <label className="block text-sm md:text-base font-medium mb-2 text-gray-300">
                Ismingiz
                <br />
                <span className="text-xs text-gray-500">Sizni qanday chaqirish mumkin</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ivan Smirnov"
                className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#4a86ad] transition"
              />
            </div>

            {/* Kontakt */}
            <div>
              <label className="block text-sm md:text-base font-medium mb-2 text-gray-300">
                Kontakt
                <br />
                <span className="text-xs text-gray-500">Telefon, email yoki nik</span>
              </label>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="@name_123"
                className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#4a86ad] transition"
              />
            </div>

            {/* Aloqa usuli */}
            <div>
              <label className="block text-sm md:text-base font-medium mb-2 text-gray-300">
                Qanday qilib siz bilan bog‘lanamiz?
                  
                <span className="text-xs text-gray-500">Qulay aloqa turi</span>
              </label>
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:border-[#4a86ad] transition appearance-none cursor-pointer"
              >
                <option className="bg-gray-900">Telefon</option>
                <option className="bg-gray-900">WhatsApp</option>
                <option className="bg-gray-900">Telegram</option>
                <option className="bg-gray-900">Email</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="px-12 py-5 rounded-full text-lg md:text-xl font-semibold text-white shadow-xl hover:shadow-2xl transition-all duration-300"
            style={{ backgroundColor: '#4a86ad' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3d7394'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4a86ad'}
          >
            YUBORISH
          </button>
        </form>

        <p className="mt-10 text-sm md:text-base text-gray-400 max-w-3xl mx-auto leading-relaxed">
          «Yuborish» tugmasini bosish orqali siz shaxsiy ma’lumotlarni qayta ishlashga rozilik berasiz hamda maxfiylik siyosati bilan tanishasiz.
        </p>
      </div>
    </section>
  );
}