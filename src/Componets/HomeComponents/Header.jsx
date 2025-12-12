import { FaTelegram } from "react-icons/fa";
import header from "../../assets/header.png";

const Header = () => {
    return (
        <section
            className="pt-32 md:pt-48 pb-16 px-6 md:px-32 flex flex-col"
            style={{
                backgroundImage: `url(${header})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div>
                <h1 className="text-3xl md:text-6xl font-light text-gray-900 drop-shadow-lg">
                    HYDROGENIUM
                </h1>

                <p className="mt-3 md:mt-6 text-lg md:text-2xl text-gray-800 max-w-3xl">
                    Professional terapiya uchun vodorod generatorlari
                </p>

                <p className="mt-5 md:mt-10 text-xl md:text-3xl font-semibold text-gray-900">
                    Yoshartiramiz <span className="font-light text-gray-800">va mustahkamlaymiz</span>
                </p>

                <p className="mt-2 text-lg md:text-2xl max-w-2xl font-medium text-gray-900">
                    sog‘liqni <span className="font-bold">innovatsion usulda</span>
                </p>

                <div className="mt-6 md:mt-12 flex">
                    <a
                        href="https://t.me/hydrogen_uzb"
                        className="px-6 md:px-12 py-3 md:py-5 bg-[#3a7ca5] text-white text-base md:text-xl rounded-full shadow-lg hover:bg-[#2f6790] transition flex items-center gap-2"
                    >
                        <FaTelegram size={24} />
                        Tellegramm orqali yozish
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Header;
