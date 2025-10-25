import { ArrowRight } from "lucide-react";

export default function Card({ category, title, author, members, buttonLabel }) {
  return (
    <div className="w-[320px] bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col justify-between">
      {/* Gambar */}
      <img
        src="https://placehold.co/600x400"
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Konten */}
      <div className="p-4 space-y-2 flex flex-col flex-grow">
        {/* Tag kategori */}
        <p className="text-xs text-gray-500">{category}</p>

        {/* Judul */}
        <h3 className="text-base font-semibold text-gray-800 leading-snug">
          {title}
        </h3>

        {/* Oleh */}
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-red-600">Oleh:</span> {author}
        </p>

        {/* Nama anggota */}
        <p className="text-xs text-gray-500">{members}</p>
      </div>

      {/* Tombol */}
      <div className="p-4 pt-0">
        <button className="w-full bg-red-100 hover:bg-red-200 text-red-600 text-sm font-medium py-2 rounded-xl flex items-center justify-center gap-1 transition">
          {buttonLabel} <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}