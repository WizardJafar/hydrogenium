import teaStation from '../../../assets/teaStation.png'
import maska from '../../../assets/maska.png'
import vaza from '../../../assets/vaza.png'
import fen from '../../../assets/fen.png'
import hand from '../../../assets/hand.png'
import ochki from '../../../assets/ochki.png'
import maskawomen from '../../../assets/maskawomen.png'
import ochki2 from '../../../assets/ochki2.png'
import maskaOq from '../../../assets/maskaOq.png'
import naushnik from '../../../assets/naushnik.png'
import nos from '../../../assets/nos.png'
import cheto from '../../../assets/cheto.png'
import naushniknax from '../../../assets/naushniknax.png'
import hydrogenium from '../../../assets/hydrogenium.png'
import capsula from '../../../assets/capsula.png'

export default function Section6() {
  const products = [
    { id: 1, title: "SUISOMED TS BTL", subtitle: "Vodorodli choy stansiyasi", image: teaStation },
    { id: 2, title: "LED MASKA", subtitle: "Uch diapazonli yuz maskasi", image: maska },
    { id: 3, title: "SUISOMED X3", subtitle: "Vodorod dekantri", image: vaza },
    { id: 4, title: "HYDROGENIUM H2 PRO", subtitle: "Premium vodorod generatori", image: fen },
    { id: 5, title: "PORTABLE H2", subtitle: "Portativ ingalyator", image: hand },
    { id: 6, title: "SPA CAPSULE V01", subtitle: "Vertikal vodorod kapsulasi", image: ochki },
    { id: 7, title: "H2 WATER BOTTLE", subtitle: "Vodorod ishlab chiqaruvchi shisha", image: maskawomen },
    { id: 8, title: "NANO MIST", subtitle: "Yuz uchun vodorod spreyi", image: ochki2 },
    { id: 9, title: "H2 FOOT BATH", subtitle: "Oyoq uchun vodorod vannasi", image: maskaOq },
    { id: 10, title: "HYDROGEN INHALER PRO", subtitle: "Professional ingalyator", image: naushnik },
    { id: 11, title: "H2 EYE MASK", subtitle: "Ko‘z uchun vodorod maskasi", image: nos },
    { id: 12, title: "SUISOMED NANO+", subtitle: "Nano vodorod generatori", image: cheto },
    { id: 13, title: "H2 BATH TABLET", subtitle: "Vodorod vannasi tabletkalari", image: naushniknax },
    { id: 14, title: "HYDROGEN SPA H01", subtitle: "Gorizontal kapsula", image: hydrogenium },
    { id: 15, title: "H2 INFUSER", subtitle: "Suv infuzeri", image: hydrogenium },
    { id: 16, title: "MOBILE H2 STATION", subtitle: "Mobil vodorod stansiyasi", image: capsula },
    { id: 17, title: "H2 BREATHING MASK", subtitle: "Nafas olish maskasi", image: hydrogenium },
    { id: 18, title: "HYDROGENIUM GEL", subtitle: "Vodorodli NAD+ geli", image: capsula },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50" id="catalog">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#4a86ad' }}>
          Vodorod uskunalari katalogi
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm font-medium text-gray-600">
          {[
            "HAMMASI",
            "VODOROD GENERATORLARI",
            "SPA KAPSULALAR",
            "MOBIL GENERATORLAR",
            "AKSESSUARLAR",
            "SARFLANADIGAN MATERIALLAR"
          ].map((filter) => (
            <button key={filter} className="hover:text-[#4a86ad] transition">
              {filter}
            </button>
          ))}
        </div>

        <div className="md:flex md:justify-start gap-4 mb-12 flex justify-center md:flex-col ">
          <input
            type="text"
            placeholder="Qidiruv"
            className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#4a86ad] w-64"
          />
          <select defaultValue="Narx" className="select">
            <option>Narx: kamayish bo‘yicha</option>
            <option>Narx: o‘sish bo‘yicha</option>
            <option>Yangilik bo‘yicha</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="bg-gray-100 flex items-center justify-center overflow-hidden h-full md:h-80">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain max-h-full max-w-full transition-transform duration-500 hover:scale-105"
                />
              </div>



              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-8">{product.subtitle}</p>

                <div className="flex justify-center gap-4">
                  <button
                    className="px-8 py-3 rounded-lg font-medium text-white transition hover:opacity-90"
                    style={{ backgroundColor: '#4a86ad' }}
                  >
                    TAVSIF
                  </button>
                  <button className="px-8 py-3 rounded-lg font-medium border-2 border-[#4a86ad] text-[#4a86ad] hover:bg-[#4a86ad] hover:text-white transition">
                    BUYURTMA BERISH
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
