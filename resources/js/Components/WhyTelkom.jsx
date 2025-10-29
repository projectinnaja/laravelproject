import React from "react";

export default function WhyTelkom() {
    const features = [
        { title: "Mudah", desc: "Dalam Transaksi dan pembayaran" },
        {
            title: "Aman",
            desc: "Garansi uang kembali jika barang tidak dikirim",
        },
        { title: "Terpercaya", desc: "Kualitas buku yang sudah terjamin" },
        { title: "Cocok", desc: "Harga kompetitif cocok untuk pelajar" },
    ];

    return (
        <section className="px-10 py-20 bg-red-700 text-white relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-10">
                {/* Left */}
                <div>
                    <h2 className="text-3xl font-bold mb-4">
                        Kenapa harus menggunakan proyek dari Telkom
                    </h2>
                    <p className="text-gray-200">
                        Telkom University telah berpengalaman dalam membuat dan
                        menerbitkan berbagai proyek dan laporan berkualitas baik
                        dari siswa maupun dosen.
                    </p>
                </div>

                {/* Right */}
                <div className="grid grid-cols-2 gap-5">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="bg-white text-gray-800 rounded-xl p-5 shadow-md"
                        >
                            <h3 className="font-semibold text-lg mb-1">
                                {f.title}
                            </h3>
                            <p className="text-sm text-gray-600">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
