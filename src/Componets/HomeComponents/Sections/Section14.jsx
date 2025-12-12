import { FaTelegramPlane } from "react-icons/fa";

export default function Section14() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden " id="contacts">
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
      {/* Qorong‘i qoplama + kontaktlar kartochkasi */}
      <div className="absolute inset-0 bg-  ">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4a86ad] mb-8">
              Bizning kontaktlarimiz
            </h2>



            {/* Telefon */}
            <div className="mb-8">
              <p className="text-2xl font-bold text-gray-800">
                +998909336600
              </p>
            </div>

            {/* Email */}
            <div className="mb-8">
              <a
                href="mailto:info@h2genium.ru"
                className="text-xl text-gray-700 hover:text-[#4a86ad] transition underline"
              >
                info@h2genium.ru
              </a>
            </div>

            {/* Manzil */}
            <div className="mb-10">
              <p className="text-lg text-gray-700 leading-relaxed">
                Moskva, Altufyevo shossesi, 27, 23-ofis
              </p>
            </div>

            {/* WhatsApp ikonkasi */}
            <div className="flex justify-center md:justify-start">
              <a
                href="https://t.me/hydrogen_uzb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <FaTelegramPlane size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}