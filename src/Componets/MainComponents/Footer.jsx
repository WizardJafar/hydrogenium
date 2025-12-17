import { useState } from "react";
import logo from "../../assets/logo.png";

export default function Footer() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };
    const links = [
        { to: "home", label: "Bosh sahifa" },
        { to: "company", label: "Kompaniya haqida" },
        { to: "video", label: "Video" },
        { to: "catalog", label: "Katalog" },
        { to: "apply", label: "Qo‘llanilishi" },
        { to: "cert", label: "Sertifikat (RU)" },
    ];

    return (
        <footer className="bg-gray-800 text-gray-300 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* 1. Logo + matn */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <img
                                loading="lazy"
                                src={logo}
                                alt="Hydrogenium"
                                className="w-16 h-16"
                            />
                            <div>
                                <h3 className="text-xl font-bold text-white">
                                    HYDROGENIUM
                                </h3>
                                <p className="text-sm text-gray-400">
                                    YOSHLIGINGIZNI QAYTARAMIZ
                                </p>
                            </div>
                        </div>

                        <p className="text-sm leading-relaxed">
                            Saytda joylashtirilgan barcha ma’lumotlar faqat tanishish uchun mo‘ljallangan bo‘lib,
                            ommaviy oferta hisoblanmaydi.
                        </p>

                        <div className="text-sm space-y-1">
                            <p className="hover:text-[#4a86ad] cursor-pointer transition">
                                Maxfiylik siyosati
                            </p>
                            <p className="hover:text-[#4a86ad] cursor-pointer transition">
                                Cookie fayllardan foydalanish
                            </p>
                        </div>
                    </div>

                    {/* 2. Menyu */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">
                            MENYU
                        </h4>

                        <div className="flex flex-col gap-3 text-sm">
                            {links.map((item) => (
                                <button
                                    key={item.to}
                                    onClick={() => scrollToSection(item.to)}
                                    className="text-left hover:text-[#4a86ad] transition"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>


                    {/* 3. Kontaktlar */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">
                            ALOQA
                        </h4>
                        <div className="space-y-4 text-sm">
                            <p className="leading-relaxed">
                                Toshkent, O‘zbekiston,<br />
                                Oybek ko‘chasi 44,<br />
                            </p>
                            <p className="text-lg font-medium text-white">
                                +998 90 933 66 00
                            </p>
                        </div>
                    </div>

                    {/* 4. Desktopda bo‘sh joy (tekislash uchun) */}
                    <div className="hidden lg:block"></div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
                    © 2025 Hydrogenium. Barcha huquqlar himoyalangan.
                </div>
            </div>
        </footer>
    );
}
