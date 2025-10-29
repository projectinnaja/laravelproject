import React, { useState } from "react";
import { Head } from "@inertiajs/react";

export default function Home() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState("");

    const categories = [
        "All",
        "Pengembangan Website",
        "Design UI/UX",
        "Business Model",
        "Analisis Data",
        "Sistem Informasi",
    ];

    const projects = [
        {
            id: 1,
            title: "Mindscape",
            author: "Kalingga Raffi",
            category: ["UI/UX Design", "Network", "Individu"],
            description:
                "Sampahku Pintar — Sistem Manajemen Pengumpulan dan Daur Ulang Sampah",
            image: "/images/project.jpg",
            date: "12 Okt 2025",
            button: "Jelajahi Sekarang",
        },
        {
            id: 2,
            title: "WebEduShare",
            author: "Diana Sari",
            category: ["Web Development", "Film"],
            description:
                "WebEduShare — Platform Pembelajaran Dasar Pemrograman",
            image: "/images/project.jpg",
            date: "15 Okt 2025",
            button: "Pelajari Lebih Lanjut",
        },
        {
            id: 3,
            title: "SEO Mastery",
            author: "Tina Maulida",
            category: ["SEO Optimization", "Individu"],
            description:
                "SEO Mastery — Meningkatkan Visibilitas Website Bisnis",
            image: "/images/project.jpg",
            date: "18 Okt 2025",
            button: "Pelajari Strategi",
        },
        {
            id: 4,
            title: "CloudLearners",
            author: "Farhan Budi",
            category: ["Cloud Computing", "Individu"],
            description: "CloudLearners — Infrastruktur Cloud yang handal",
            image: "/images/project.jpg",
            date: "25 Okt 2025",
            button: "Temukan Lebih Banyak",
        },
        {
            id: 5,
            title: "VR Explorations",
            author: "Budi Santoso",
            category: ["Virtual Reality", "Tim"],
            description:
                "VR Explorations — Pengalaman Realitas Virtual Menarik",
            image: "/images/project.jpg",
            date: "26 Okt 2025",
            button: "Masuki Dunia VR",
        },
    ];

    // Filter berdasarkan kategori dan pencarian
    const filteredProjects = projects.filter((proj) => {
        const matchCategory =
            activeCategory === "All" || proj.category.includes(activeCategory);
        const matchSearch = proj.title
            .toLowerCase()
            .includes(search.toLowerCase());
        return matchCategory && matchSearch;
    });

    return (
        <>
            <Head title="Karya Inovatif Mahasiswa" />

            {/* ================= HEADER ================= */}
            <header className="flex items-center justify-between px-10 py-4 bg-white shadow-sm sticky top-0 z-20">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img
                        src="/images/logo-icon.png"
                        alt="Logo"
                        className="h-6 w-6"
                    />
                </div>

                {/* Search Bar */}
                <div className="flex-1 mx-8">
                    <input
                        type="text"
                        placeholder="Cari Proyek Disini"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-gray-100 rounded-full px-5 py-2 focus:outline-none"
                    />
                </div>

                {/* Notifikasi & Profil */}
                <div className="flex items-center gap-5">
                    <img
                        src="/images/bell-icon.svg"
                        alt="Notif"
                        className="h-5 w-5"
                    />
                    <img
                        src="/images/profile.jpg"
                        alt="Profile"
                        className="h-8 w-8 rounded-full object-cover"
                    />
                </div>
            </header>

            {/* ================= HERO SECTION ================= */}
            <section className="flex flex-col md:flex-row justify-between items-start md:items-center px-10 py-14 bg-gradient-to-r from-white via-[#fff6f6] to-[#ffeaea]">
                <div className="max-w-xl">
                    <p className="text-green-600 text-sm mb-2">
                        ● Diupdate 1 menit yang lalu
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Karya Inovatif Mahasiswa, <br /> Satu Platform Serbabisa
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base">
                        Temukan proyek-proyek terbaik dari mahasiswa yang terus
                        berkreasi di bidang teknologi, desain, dan bisnis
                        digital.
                    </p>
                </div>

                {/* Kategori Filter */}
                <div className="flex flex-wrap gap-3 mt-6 md:mt-0">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                                activeCategory === cat
                                    ? "bg-red-700 text-white"
                                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* ================= PROJECT LIST SECTION ================= */}
            <section className="px-10 py-10 min-h-screen bg-white">
                {filteredProjects.length === 0 ? (
                    <p className="text-center text-gray-500">
                        Tidak ada proyek ditemukan.
                    </p>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((proj) => (
                            <div
                                key={proj.id}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition"
                            >
                                <img
                                    src={proj.image}
                                    alt={proj.title}
                                    className="w-full h-44 object-cover"
                                />
                                <div className="p-5">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {proj.category.map((cat) => (
                                            <span
                                                key={cat}
                                                className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                                            >
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                        {proj.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                                        {proj.description}
                                    </p>
                                    <p className="text-xs text-gray-500 mb-4">
                                        {proj.author} • {proj.date}
                                    </p>
                                    <button className="w-full bg-red-700 text-white text-sm py-2 rounded-full hover:bg-red-800 transition">
                                        {proj.button}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* ================= FOOTER ================= */}
            <footer className="bg-red-800 text-white text-center py-4 text-sm mt-10">
                Website Proyek Telkom • © 2025 All Rights Reserved
            </footer>
        </>
    );
}
