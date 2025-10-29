import Card from "./Card";

export default function GalleryGrid() {
    const projects = [
        {
        category: "UI/UX Design  ·  Sistem Informasi",
        title: "Sampahku Pintar — Sistem Manajemen Pengumpulan dan Daur Ulang Sampah",
        author: "Mindscape",
        members: "Kalingga Rafif - 102042400017 dan 2 anggota lainnya",
        buttonLabel: "Jelajahi Sekarang",
        },
        {
        category: "Web Development  ·  Platform Berita",
        title: "TechPulse Online — Platform Berita Digital",
        author: "Technilapa",
        members: "Diva Lazuardi - 102042400012 dan 3 anggota lainnya",
        buttonLabel: "Kunjungi Platform",
        },
        {
        category: "Web Development  ·  Platform Berita",
        title: "TechPulse Online — Platform Berita Digital",
        author: "Technilapa",
        members: "Diva Lazuardi - 102042400012 dan 3 anggota lainnya",
        buttonLabel: "Kunjungi Platform",
        },
        {
        category: "Web Development  ·  Platform Berita",
        title: "TechPulse Online — Platform Berita Digital",
        author: "Technilapa",
        members: "Diva Lazuardi - 102042400012 dan 3 anggota lainnya",
        buttonLabel: "Kunjungi Platform",
        },
        {
        category: "Web Development  ·  Platform Berita",
        title: "TechPulse Online — Platform Berita Digital",
        author: "Technilapa",
        members: "Diva Lazuardi - 102042400012 dan 3 anggota lainnya",
        buttonLabel: "Kunjungi Platform",
        },
        {
        category: "Web Development  ·  Platform Berita",
        title: "TechPulse Online — Platform Berita Digital",
        author: "Technilapa",
        members: "Diva Lazuardi - 102042400012 dan 3 anggota lainnya",
        buttonLabel: "Kunjungi Platform",
        },
        {
        category: "Web Development  ·  Platform Berita",
        title: "TechPulse Online — Platform Berita Digital",
        author: "Technilapa",
        members: "Diva Lazuardi - 102042400012 dan 3 anggota lainnya",
        buttonLabel: "Kunjungi Platform",
        },
        {
        category: "Web Development  ·  Platform Berita",
        title: "TechPulse Online — Platform Berita Digital",
        author: "Technilapa",
        members: "Diva Lazuardi - 102042400012 dan 3 anggota lainnya",
        buttonLabel: "Kunjungi Platform",
        },
        {
        category: "Web Development  ·  Platform Berita",
        title: "TechPulse Online — Platform Berita Digital",
        author: "Technilapa",
        members: "Diva Lazuardi - 102042400012 dan 3 anggota lainnya",
        buttonLabel: "Kunjungi Platform",
        },
    ];

    return (
        <div className="flex flex-wrap gap-6 justify-center p-6">
        {projects.map((p, i) => (
            <Card key={i} {...p} />
        ))}
        </div>
    );
}