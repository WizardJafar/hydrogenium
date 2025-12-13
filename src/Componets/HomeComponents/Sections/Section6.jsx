import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import teaStation from "../../../assets/teaStation.png";
import maska from "../../../assets/maska.png";
import vaza from "../../../assets/vaza.png";
import fen from "../../../assets/fen.png";
import hand from "../../../assets/hand.png";

export default function Section6() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderProduct, setOrderProduct] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "+998",
  });

  const products = [
    { id: 1, title: "SUISOMED TS BTL", subtitle: "Vodorodli choy stansiyasi", description: "Vodorodli choy tayyorlash qurilmasi.", image: teaStation },
    { id: 2, title: "LED MASKA", subtitle: "Uch diapazonli yuz maskasi", description: "LED terapiya maskasi.", image: maska },
    { id: 3, title: "SUISOMED X3", subtitle: "Vodorod dekantri", description: "Suvni vodorod bilan boyituvchi dekantr.", image: vaza },
    { id: 4, title: "HYDROGENIUM H2 PRO", subtitle: "Premium vodorod generatori", description: "Professional generator.", image: fen },
    { id: 5, title: "PORTABLE H2", subtitle: "Portativ ingalyator", description: "Portativ qurilma.", image: hand },
    { id: 6, title: "SPA CAPSULE V01", subtitle: "Vertikal vodorod kapsulasi", description: "SPA kapsula.", image: teaStation },
    { id: 7, title: "H2 WATER BOTTLE", subtitle: "Vodorodli shisha", description: "Suv uchun shisha.", image: maska },
    { id: 8, title: "NANO MIST", subtitle: "Yuz spreyi", description: "Nano vodorod spreyi.", image: vaza },
    { id: 9, title: "H2 FOOT BATH", subtitle: "Oyoq vannasi", description: "Vodorod vannasi.", image: fen },
    { id: 10, title: "HYDROGEN INHALER PRO", subtitle: "Professional ingalyator", description: "Klinik qurilma.", image: hand },
    { id: 11, title: "H2 EYE MASK", subtitle: "Ko‘z maskasi", description: "Ko‘z uchun maska.", image: teaStation },
    { id: 12, title: "SUISOMED NANO+", subtitle: "Nano generator", description: "Nano texnologiya.", image: maska },
    { id: 13, title: "H2 BATH TABLET", subtitle: "Vanna tabletkalari", description: "Vodorodli tabletka.", image: vaza },
    { id: 14, title: "HYDROGEN SPA H01", subtitle: "Gorizontal kapsula", description: "SPA kapsula.", image: fen },
    { id: 15, title: "H2 INFUSER", subtitle: "Suv infuzeri", description: "Infuzer.", image: hand },
    { id: 16, title: "MOBILE H2 STATION", subtitle: "Mobil stansiya", description: "Mobil qurilma.", image: teaStation },
    { id: 17, title: "H2 BREATHING MASK", subtitle: "Nafas maskasi", description: "Nafas olish uchun.", image: maska },
    { id: 18, title: "HYDROGENIUM GEL", subtitle: "NAD+ geli", description: "Vodorodli gel.", image: vaza },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!value.startsWith("+998")) return;
      if (!/^\+998\d*$/.test(value)) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const submitOrder = async () => {
    if (!formData.firstName || !formData.lastName || formData.phone.length < 13) {
      toast.error("Iltimos, barcha maydonlarni to‘ldiring");
      return;
    }

    try {
      const TOKEN = "8559354625:AAFOExAj1BTe2tR2A4O8r_htOMl0ATtPk60";
      const CHAT_ID = "-5083792285";

      const message = `
🛒 <b>Yangi buyurtma</b>

📦 <b>Mahsulot:</b> ${orderProduct.title}
📝 <b>Tavsif:</b> ${orderProduct.subtitle}

👤 <b>Ism:</b> ${formData.firstName}
👤 <b>Familiya:</b> ${formData.lastName}
📞 <b>Telefon:</b> ${formData.phone}
      `;

      await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      });

      toast.success("Sizning arizangiz yuborildi, tez orada javob kuting.");
      setOrderProduct(null);
      setFormData({ firstName: "", lastName: "", phone: "+998" });
    } catch {
      toast.error("Xatolik yuz berdi. Qayta urinib ko‘ring.");
    }
  };

  return (
    <>


      <section className="py-16 bg-gradient-to-b from-white to-gray-50"id="catalog">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: "#4a86ad" }}>
            Vodorod uskunalari katalogi
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg">
                <div className="h-72 bg-gray-100 flex items-center justify-center">
                  <img src={product.image} alt={product.title} className="object-contain max-h-full" />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.subtitle}</p>

                  <div className="flex justify-center gap-3">
                    <button
                      className="px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90 active:scale-95"
                      style={{ backgroundColor: "#4a86ad" }}
                      onClick={() => setSelectedProduct(product)}
                    >
                      TAVSIF
                    </button>

                    <button
                      className="px-6 py-3 rounded-lg font-medium border-2 transition-all hover:text-white active:scale-95 text-[#4a86ad] hover:bg-[#4a86ad] border-[#4a86ad]  "
                      onClick={() => setOrderProduct(product)}
                    >
                      BUYURTMA
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <dialog className="modal modal-open">
          <div className="modal-box max-w-xl">
            <img src={selectedProduct.image} className="rounded-xl mb-4 max-h-48 mx-auto" />
            <h3 className="text-xl font-bold text-center">{selectedProduct.title}</h3>
            <p className="text-sm text-gray-500 text-center mb-3">{selectedProduct.subtitle}</p>
            <p className="text-sm text-gray-700 text-center mb-6">{selectedProduct.description}</p>

            <div className="flex justify-center gap-3">
              <button
                className="px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "#4a86ad" }}
                onClick={() => {
                  setSelectedProduct(null);
                  setOrderProduct(selectedProduct);
                }}
              >
                BUYURTMA BERISH
              </button>

              <button
                className="px-6 py-3 rounded-lg font-medium border-2 transition-all hover:bg-gray-100 active:scale-95"
                style={{ borderColor: "#4a86ad", color: "#4a86ad" }}
                onClick={() => setSelectedProduct(null)}
              >
                Yopish
              </button>
            </div>
          </div>
        </dialog>
      )}

      {orderProduct && (
        <dialog className="modal modal-open">
          <div className="modal-box max-w-md">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Buyurtma: {orderProduct.title}
            </h3>

            <input name="firstName" placeholder="Ism" className="input input-bordered w-full mb-3" value={formData.firstName} onChange={handleChange} />
            <input name="lastName" placeholder="Familiya" className="input input-bordered w-full mb-3" value={formData.lastName} onChange={handleChange} />
            <input name="phone" className="input input-bordered w-full mb-6" value={formData.phone} onChange={handleChange} />

            <div className="flex flex-col gap-3">
              <button
                className="px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "#4a86ad" }}
                onClick={submitOrder}
              >
                BUYURTMA BERISH
              </button>

              <button
                className="px-6 py-3 rounded-lg font-medium border-2 transition-all hover:bg-gray-100 active:scale-95"
                style={{ borderColor: "#4a86ad", color: "#4a86ad" }}
                onClick={() => setOrderProduct(null)}
              >
                Yopish
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
