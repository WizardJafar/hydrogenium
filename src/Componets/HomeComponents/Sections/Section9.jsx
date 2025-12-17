export default function Section9() {
    const results = [
        { num: 1, title: "Antioksidant ta’siri", desc: "Oksidativ stress va uning natijasidagi zararlanishlarga (DNK, oqsillar va lipidlar shikastlanishi) tabiiy qarshi turish." },
        { num: 2, title: "Yoshartirish jarayonlarini ishga tushirish", desc: "Reparatsiya, regeneratsiya va yoshartirish jarayonlarini faollashtirish" },
        { num: 3, title: "Antifibroz ta’siri", desc: "Fibrozga qarshi kurash" },
        { num: 4, title: "Tiklanish", desc: "Shikastlangan hujayra tuzilmalarini (shu jumladan miya, jigar, teri hujayralari va boshq.) tiklash" },
        { num: 5, title: "Hujayralarni faollashtirish", desc: "Apoptoz jarayonlarini faollashtirish — «qarigan» hujayralarga qarshi kurash" },
        { num: 6, title: "Mikrosirkulyatsiyani yaxshilash", desc: "Peroksinitritni zararsizlantirish va aerob energiya ishlab chiqarishni faollashtirish natijasida mikrosirkulyatsiyani global yaxshilash" },
        { num: 7, title: "Chidamlilikni oshirish", desc: "Jismoniy yuklamalarga chidamlilikni oshirish" },
        { num: 8, title: "Kuch-quvvatni tiklash", desc: "Astenik sindromni bartaraf etish" },
        { num: 9, title: "Revaskulyarizatsiya", desc: "Neoangiogenezni (ayniqsa ishemiya o‘choqlarida) rag‘batlantirish" },
        { num: 10, title: "Modda almashinuvini yaxshilash", desc: "Bazal metabolizm darajasini kuchaytirish" },
        { num: 11, title: "Kislorod iste’molini oshirish", desc: "Erkin yog‘ kislotalarini aerob energiya ishlab chiqarishda ishlatishni faollashtirish orqali kislorod iste’molini oshirish" },
        { num: 12, title: "Glyukoza darajasini pasaytirish", desc: "Glyukoza, triglitseridlar va past zichlikdagi lipoproteinlar darajasini kamaytirish" },
        { num: 13, title: "Miya samaradorligini oshirish", desc: "Kognitiv funksiyalarni yaxshilash" },
        { num: 14, title: "Yoshartirish", desc: "Biologik yoshni pasaytirish va yoshartirish jarayonlarini ishga tushirish" },
    ];
    // fksdkl;fds;lkf
    return (
        <section className="py-14 sm:py-20 bg-gradient-to-b from-white to-blue-50" id="results">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                        style={{ color: '#4a86ad' }}
                    >
                        Muolaja <br className="hidden sm:block" /> ta’siri
                    </h2>

                    <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                        Vodorod — organizm uchun tabiiy gaz bo‘lib, inson tanasida ijobiy jarayonlarni ishga tushiradi.
                    </p>
                </div>

                {/* Results */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
                    {results.map((item) => (
                        <div
                            key={item.num}
                            className="
            flex flex-col sm:flex-row gap-4 sm:gap-6
            group hover:bg-white hover:shadow-xl
            rounded-2xl p-4 sm:p-6
            transition-all duration-300
          "
                        >

                            {/* Number */}
                            <div
                                className="
              flex-shrink-0
              w-12 h-12 sm:w-16 sm:h-16
              rounded-full bg-[#4a86ad] text-white
              flex items-center justify-center
              text-lg sm:text-2xl font-bold
              shadow-lg
              group-hover:scale-110 transition-transform duration-300
            "
                            >
                                {item.num}
                            </div>

                            {/* Text */}
                            <div className="break-words">
                                <h3 className="text-base sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>

    );
}