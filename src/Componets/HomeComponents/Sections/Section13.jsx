export function Section13() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-blue-50" id="company">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Katta logotip */}
                    <div className="flex justify-center lg:justify-start">
                        <img
                            loading="lazy"
                            src="https://static.tildacdn.com/tild6335-6461-4637-a462-626463656261/photo.svg"
                            alt="Hydrogenium"
                            className="w-full max-w-sm lg:max-w-md xl:max-w-lg h-auto object-contain drop-shadow-2xl"
                        />
                    </div>

                    {/* Matn */}
                    <div>
                        <h2 className="text-5xl md:text-6xl font-bold mb-8" style={{ color: '#4a86ad' }}>
                            Kompaniya haqida
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            Bizning kompaniya vodorod terapiyasi uchun uskunalar sotishga ixtisoslashgan.
                            Biz keng turdagi uskunalar taklif etamiz: vodorod ingalyatorlari, molekulyar vodorodni organizmga yetkazib beruvchi vodorod generatorlari hamda salomatlikni mustahkamlash va immunitetni ko‘tarish uchun boshqa mahsulotlar.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}