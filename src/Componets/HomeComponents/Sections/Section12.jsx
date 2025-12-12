export function Section12() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#4a86ad' }}>
          Ko‘proq bilmoqchimisiz?
        </h2>
        <p className="text-xl text-gray-700 mb-10">
          Mutaxassisga savollar bering va uskunalarning<br />
          bepul demo ko‘rsatuviga yoziling
        </p>
        <button className="px-12 py-5 rounded-full text-white text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
          style={{ backgroundColor: '#4a86ad' }}>
          <span>Ariza qoldirish</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </section>
  );
}