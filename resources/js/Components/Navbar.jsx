import React from "react";
import { Link } from "@inertiajs/react";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-sm sticky top-0 z-50">
            <h1 className="font-bold text-xl text-gray-900">ModeUI</h1>

            <ul className="flex gap-8 text-gray-600 font-medium">
                <li className="hover:text-red-600 transition cursor-pointer">
                    Project
                </li>
                <li className="hover:text-red-600 transition cursor-pointer">
                    Tentang Kami
                </li>
                <li className="hover:text-red-600 transition cursor-pointer">
                    Blog
                </li>
                <li className="hover:text-red-600 transition cursor-pointer">
                    Q&A
                </li>
            </ul>

            <Link
                href="/login"
                className="px-4 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition text-sm flex items-center gap-1"
            >
                <i className="ri-login-circle-line"></i> Login
            </Link>
        </nav>
    );
}
