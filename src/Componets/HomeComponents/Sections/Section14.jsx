import { FaTelegramPlane, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Section14() {
  const mapLink =
    "https://www.google.com/maps?q=41.290795,69.282268";

  return (
    <section
      className="relative h-screen min-h-[700px] overflow-hidden"
      id="contacts"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5995.660844003265!2d69.282268!3d41.290795!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE3JzI2LjkiTiA2OcKwMTYnNTYuMiJF!5e0!3m2!1sen!2s!4v1765532385494!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 w-full h-full"
      ></iframe>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
          {/* <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4"> */}
            <div className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-10 border border-white/20">

              {/* Header */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4a86ad] mb-8 text-center sm:text-left">
                Bizning kontaktlarimiz
              </h2>

              {/* Phone Section */}
              <div className="mb-6 bg-gradient-to-r from-blue-50 to-transparent rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <FaPhone className="text-[#4a86ad] text-xl" />
                  <a
                    href="tel:+998909336600"
                    className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-[#4a86ad] transition-colors"
                  >
                    +998 90 933 66 00
                  </a>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 ml-10">
                  ⬆ Telefon qilish uchun bosing!
                </p>
              </div>

              {/* Address Section */}
              <div className="mb-8 bg-gradient-to-r from-blue-50 to-transparent rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 text-[#4a86ad] text-xl flex-shrink-0" />
                  <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                    Aybek Street 44, Tashkent, Uzbekistan
                  </p>
                </div>
              </div>

              {/* Map Button */}
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all mb-8 bg-[#4a86ad] hover:bg-[#3a6a8d]"
              >
                Xaritada ko'rish
                <FaMapMarkerAlt />
              </a>

              {/* Telegram Section */}
              <div className="flex justify-center sm:justify-start pt-6 border-t border-gray-200">
                <a
                  href="https://t.me/hydrogen_uzb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[#4a86ad] hover:text-[#3a6a8d] font-semibold text-lg transition-all hover:gap-4 group"
                >
                  <FaTelegramPlane size={24} className="group-hover:rotate-12 transition-transform" />
                  <span>Telegram orqali bog'laning</span>
                </a>
              </div>

            </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
