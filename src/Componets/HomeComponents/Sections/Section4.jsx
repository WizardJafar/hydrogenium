import AnimatedContent from "../../ReactBits/AnimatedContent";

export default function Section4() {

    const videos = [
        {
            title: "Vodorod kapsulalari",
            youtubeId: "Vk-63EZi4Rg"
        },
        {
            title: "NAD+ geli",
            youtubeId: "TuDKiYeqFp0"
        },
        {
            title: "Hydrogenium",
            youtubeId: "siTQQGvbbGg"
        },
        // Добавляйте новые так же:
        // { title: "Название", youtubeId: "ID_ролика" }
    ];
    //zXkd;s;fjkdskjf;k
    // fsko;djf;o'jghpiEWHWEH
    // jfdsjfjs
    return (
        <section className="py-16 bg-white" >
            <div className="text-center mb-12 px-4">
                <AnimatedContent
                    distance={40}
                    direction="vertical"
                    duration={1}
                    ease="ease-out"
                    initialOpacity={0}
                    animateOpacity={true}
                    delay={0.1}
                    threshold={0.2}
                >
                    <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#4a86ad" }}>
                        VIDEO
                    </h2>
                </AnimatedContent>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {videos.map((video, index) => (
                    <AnimatedContent
                        key={index}
                        distance={80}
                        direction="vertical"
                        duration={1}
                        ease="power2.out"
                        initialOpacity={0.2}
                        animateOpacity={true}
                        scale={1.05}
                        delay={0.2 * index}
                        threshold={0.15}
                    >
                        <div className="group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                            <div className="relative aspect-[16/9] bg-black">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="absolute top-0 left-0 w-full h-full"
                                ></iframe>
                            </div>

                            <div className="py-5 text-center px-4">
                                <p className="text-base sm:text-lg font-medium text-gray-800">
                                    {video.title}
                                </p>
                            </div>
                        </div>
                    </AnimatedContent>
                ))}
            </div>
        </section>
    );
}
