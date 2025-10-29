import React from "react";

export default function HeroSection() {
    return (
        <section className="text-center py-28 bg-gradient-to-b from-[#fff7f7] to-white">
            <h1 className="text-4xl font-bold text-gray-900 leading-snug">
                Galeri Karya Mahasiswa yang{" "}
                <span className="text-red-600 bg-red-100 px-2 rounded-md">
                    Inovatif dan Inspiratif
                </span>
            </h1>

            <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
                Temukan berbagai proyek mahasiswa Telkom University dari desain,
                aplikasi, hingga penelitian yang menginspirasi. Dibuat untuk
                berbagi, belajar, dan memberi inspirasi bagi semua.
            </p>

            <button className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium">
                jelajahi lebih lanjut →
            </button>
        </section>
    );
}
