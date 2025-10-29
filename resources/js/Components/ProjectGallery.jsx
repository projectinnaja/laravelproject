// import React from "react";

// const categories = [
//     "Pengembangan Website",
//     "Design UI/UX",
//     "Business Model",
//     "Analisis Data",
//     "Sistem Informasi",
// ];

// const projects = Array(9).fill({
//     title: "Panduan Pendidikan Antikorupsi - Kelas VI",
//     price: "Rp 68,000",
//     img: "/img/book1.jpg",
// });

// export default function ProjectGallery() {
//     return (
//         <section className="px-10 py-20">
//             <div className="flex flex-col md:flex-row justify-between items-start mb-8">
//                 <div className="max-w-2xl">
//                     <p className="text-gray-700 leading-relaxed">
//                         Jelajahi berbagai karya mahasiswa, mulai dari{" "}
//                         <span className="text-red-600 font-semibold">
//                             desain kreatif
//                         </span>
//                         ,
//                         <span className="text-red-600 font-semibold">
//                             {" "}
//                             pemrograman
//                         </span>
//                         , hingga{" "}
//                         <span className="text-red-600 font-semibold">
//                             riset sistem informasi
//                         </span>
//                         .
//                     </p>
//                     <p className="text-gray-500">
//                         Semua ide hebat ini lahir dari semangat belajar dan
//                         berinovasi.
//                     </p>
//                 </div>

//                 <input
//                     type="text"
//                     placeholder="Cari Proyek Disini"
//                     className="border px-4 py-2 rounded-md mt-5 md:mt-0"
//                 />
//             </div>

//             <div className="flex flex-wrap gap-3 mb-10">
//                 {categories.map((cat, idx) => (
//                     <button
//                         key={idx}
//                         className={`px-4 py-2 rounded-full border text-sm ${
//                             idx === 0
//                                 ? "bg-red-600 text-white"
//                                 : "bg-white text-gray-700 hover:bg-gray-100"
//                         }`}
//                     >
//                         {cat}
//                     </button>
//                 ))}
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//                 {projects.map((p, i) => (
//                     <div
//                         key={i}
//                         className="rounded-xl shadow-md p-3 bg-white hover:shadow-lg transition"
//                     >
//                         <img
//                             src={p.img}
//                             alt={p.title}
//                             className="rounded-lg w-full h-48 object-cover mb-2"
//                         />
//                         <p className="text-sm text-gray-500">Buku SD/MI</p>
//                         <h3 className="font-semibold text-gray-800">
//                             {p.title}
//                         </h3>
//                         <p className="text-red-600 font-bold mt-1">{p.price}</p>
//                         <p className="text-xs text-gray-400">
//                             ISBN : 9786237478492
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }

import React from "react";

export default function PopularProjects() {
    const projects = [
        {
            title: "Panduan Pendidikan Antikorupsi - Kelas VI",
            price: "Rp 68,000",
            image: "/img/book1.jpg",
            isbn: "9786237478492",
        },
        {
            title: "Sejarah Kota Jakarta",
            price: "Rp 68,000",
            image: "/img/book2.jpg",
            isbn: "9786237478492",
        },
        {
            title: "Anti Korupsi",
            price: "Rp 68,000",
            image: "/img/book3.jpg",
            isbn: "9786237478492",
        },
    ];

    return (
        <section className="px-10 py-16 bg-white">
            <div className="flex flex-col md:flex-row items-start md:items-stretch gap-8">
                {/* === LEFT SIDE === */}
                <div className="flex flex-col justify-between border border-dashed border-gray-300 rounded-xl p-6 w-full md:w-1/4 text-gray-700">
                    <div>
                        <div className="bg-red-600 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                            <span className="text-white text-xl">🔥</span>
                        </div>
                        <h2 className="text-2xl font-bold leading-snug mb-2">
                            Proyek Populer <br /> Minggu ini
                        </h2>
                        <p className="text-gray-400 text-sm mb-6">
                            Ketahui semua Proyek yang sedang ramai pada beberapa
                            minggu ini
                        </p>
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2 px-4 rounded-full flex items-center justify-center gap-2 transition">
                        jelajahi lebih lanjut
                        <span className="text-lg">→</span>
                    </button>
                </div>

                {/* === RIGHT SIDE === */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-1">
                    {projects.map((item, index) => (
                        <div
                            key={index}
                            className="border border-dashed border-gray-300 rounded-xl p-3 hover:shadow-lg transition"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="rounded-lg w-full h-60 object-cover mb-3"
                            />
                            <p className="text-xs text-gray-400">Buku SD/MI</p>
                            <h3 className="font-semibold text-gray-800 leading-tight mb-2">
                                {item.title}
                            </h3>
                            <p className="text-red-600 font-bold">
                                {item.price}
                            </p>
                            <p className="text-xs text-gray-400">
                                ISBN : {item.isbn}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
