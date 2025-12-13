import { useState } from "react";

export default function Footer() {
    const [isOpen, setIsOpen] = useState(false);
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-gray-800 text-gray-300 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* 1. Логотип + текст */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <img
                                src="https://optim.tildacdn.com/tild3861-6432-4135-b131-626361346336/-/resize/240x/-/format/webp/foote.png.webp"
                                alt="Hydrogenium"
                                className="w-16 h-16"
                            />
                            <div>
                                <h3 className="text-xl font-bold text-white">HYDROGENIUM</h3>
                                <p className="text-sm text-gray-400">ВОЗВРАЩАЕМ МОЛОДОСТЬ</p>
                            </div>
                        </div>

                        <p className="text-sm leading-relaxed">
                            Вся информация на сайте размещена для ознакомления и не является публичной офертой
                        </p>

                        <div className="text-sm space-y-1">
                            <p className="hover:text-[#4a86ad] cursor-pointer transition">Политика конфиденциальности</p>
                            <p className="hover:text-[#4a86ad] cursor-pointer transition">Использование Cookies</p>
                        </div>
                    </div>

                    {/* 2. Меню */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">МЕНЮ</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-[#4a86ad] transition">Главная</a></li>
                            <li><a href="#" className="hover:text-[#4a86ad] transition">О компании</a></li>
                            <li><a href="#" className="hover:text-[#4a86ad] transition">Видео</a></li>
                            <li><a href="#" className="hover:text-[#4a86ad] transition">Каталог</a></li>
                            <li><a href="#" className="hover:text-[#4a86ad] transition">Применение</a></li>
                            <li><a href="#" className="hover:text-[#4a86ad] transition">Преимущества</a></li>
                            <li><a href="#" className="hover:text-[#4a86ad] transition">Сертификат (РУ)</a></li>
                        </ul>
                    </div>

                    {/* 3. Контакты */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">КОНТАКТЫ</h4>
                        <div className="space-y-4 text-sm">
                            <p className="leading-relaxed">
                                Tashkent, Uzbekistan,<br />
                                Aybek Street 44,<br />
                            </p>
                            <p className="text-lg font-medium text-white">
                                +998 90 933 66 00
                            </p>
                        </div>
                    </div>

                    {/* 4. Пустое место на десктопе (для выравнивания) */}
                    <div className="hidden lg:block"></div>
                </div>

                {/* Копирайт */}
                <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
                    © 2025 Hydrogenium. Все права защищены.
                </div>
            </div>
        </footer>
    );
}