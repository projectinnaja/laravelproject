import React from "react";

const projects = [
    {
        id: 1,
        title: "Panduan Pendidikan Antikorupsi - Kelas VI",
        price: "Rp 68,000",
        img: "/img/book1.jpg",
    },
    {
        id: 2,
        title: "Anti Korupsi - Kelas VI",
        price: "Rp 68,000",
        img: "/img/book2.jpg",
    },
    {
        id: 3,
        title: "Wartawan - Kelas VI",
        price: "Rp 68,000",
        img: "/img/book3.jpg",
    },
    {
        id: 4,
        title: "Panduan Pendidikan Antikorupsi - Kelas VI",
        price: "Rp 68,000",
        img: "/img/book1.jpg",
    },
];

export default function PopularProjects() {
    return (
        <section className="w-full bg-white py-20 px-16 flex flex-col lg:flex-row gap-10 items-start">
            {/* LEFT SECTION */}
            <div className="w-full lg:w-1/4 flex flex-col items-start">
                <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 flex flex-col items-start">
                    {/* ICON */}
                    <div className="bg-red-600 w-10 h-10 flex items-center justify-center rounded-full text-white text-lg mb-5 shadow-sm">
                        🔥
                    </div>

                    {/* TEXT */}
                    <h2 className="text-2xl font-extrabold text-gray-800 leading-snug mb-2">
                        Proyek <br /> Populer Minggu ini
                    </h2>
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                        Ketahui semua Proyek yang sedang ramai pada beberapa
                        minggu ini
                    </p>

                    {/* BUTTON */}
                    <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-6 py-2.5 rounded-md transition">
                        jelajahi lebih lanjut <span className="text-lg">→</span>
                    </button>
                </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
                {projects.map((p) => (
                    <div
                        key={p.id}
                        className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-gray-100"
                    >
                        <img
                            src={p.img}
                            alt={p.title}
                            className="rounded-xl w-full h-56 object-cover mb-3"
                        />
                        <p className="text-xs text-gray-400 mb-1">Buku SD/MI</p>
                        <h3 className="text-[15px] font-medium text-gray-800 leading-tight mb-1">
                            {p.title}
                        </h3>
                        <p className="text-red-600 font-bold text-sm">
                            {p.price}
                        </p>
                        <p className="text-[11px] text-gray-400 mt-1">
                            ISBN : 9786237478492
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
