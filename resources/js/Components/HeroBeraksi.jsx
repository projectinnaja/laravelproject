export default function HeroBeraksi() {
    return (
        <section className="relative flex items-center justify-center min-h-[80vh] bg-gradient-to-b from-red-50 to-white overflow-hidden">
            <div className="absolute inset-0 opacity-40">
                <div className="w-full h-full bg-[radial-gradient(circle,_rgba(0,0,0,0.15)_1px,_transparent_1px)] [background-size:20px_20px]" />
            </div>
                {/* Content */}
            <div className="relative text-center max-w-3xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
                Galeri Karya Mahasiswa yang <br />
                <p className="bg-red-100 w-fit mx-auto text-red-700 px-2 py-1 rounded">
                    Inovatif dan Inspiratif
                </p>
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                Temukan berbagai proyek mahasiswa Telkom University dari desain,
                aplikasi, hingga penelitian yang menginspirasi. Dibuat untuk berbagi,
                belajar, dan memberi inspirasi bagi semua.
                </p>
                <div className="mt-8">
                <a
                    href="#"
                    className="inline-block bg-[#b01116] hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
                >
                    Jelajahi Sekarang →
                </a>
                </div>
            </div>
        </section>
    )
}