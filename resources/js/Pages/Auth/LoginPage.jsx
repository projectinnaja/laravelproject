import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import logo from "../Assets/logo.png";
import telkom from "../Assets/telkomaja.jpg";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [mode, setMode] = useState("loginUser");

    const { data, setData, processing, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const endpoint =
                mode === "registerInvestor"
                    ? "/api/register"
                    : mode === "registerUser"
                    ? "/api/register"
                    : mode === "loginInvestor"
                    ? "/api/login"
                    : "/api/login";

            const bodyData = mode.includes("register")
                ? {
                      name: data.name,
                      email: data.email,
                      password: data.password,
                      password_confirmation: data.password_confirmation,
                      ...(mode === "registerInvestor" && { role: "investor" }),
                  }
                : {
                      email: data.email,
                      password: data.password,
                  };

            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(bodyData),
            });

            const result = await response.json();

            if (response.ok) {
                console.log("✅ Success:", result);
                localStorage.setItem("token", result.access_token);
                window.location.href = "/landing";
            } else {
                console.error("❌ Failed:", result);
                alert(result.message || "Proses gagal.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Terjadi kesalahan koneksi server.");
        } finally {
            setIsLoading(false);
        }
    };

    const getTitle = () => {
        switch (mode) {
            case "loginUser":
                return "Selamat Datang di Telkom Project Gallery";
            case "registerUser":
                return "Daftar Akun Pengguna Baru";
            case "loginInvestor":
                return "Login sebagai Investor";
            case "registerInvestor":
                return "Daftar Akun Investor Baru";
            default:
                return "";
        }
    };

    const isRegister = mode.includes("register");

    return (
        <div className="min-h-screen flex font-sans text-sm bg-gray-50">
            {/* Bagian kiri */}
            <div className="relative w-1/2 hidden lg:flex items-center justify-center overflow-hidden">
                <img
                    src={telkom}
                    alt="Telkom University Illustration"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-red-600/30" />
            </div>

            {/* Bagian kanan */}
            <div className="w-full lg:w-1/2 bg-white flex items-center justify-center relative p-6">
                {/* Tombol kembali */}
                <div className="absolute top-6 left-6">
                    <button
                        onClick={() => setMode("loginUser")}
                        className="flex items-center gap-2 text-gray-600 border border-gray-200 px-3 py-1.5 rounded-md hover:bg-gray-50 transition text-xs"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Kembali</span>
                    </button>
                </div>

                {/* FORM */}
                <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex flex-col items-center mb-5">
                        <img
                            src={logo}
                            alt="Telkom University"
                            className="h-10 mb-3"
                        />
                        <h2 className="text-lg font-semibold text-gray-900 text-center leading-tight">
                            {getTitle()}
                        </h2>
                        {!isRegister && mode === "loginUser" && (
                            <p className="text-xs text-gray-500 text-center mt-2">
                                Jelajahi dan dapatkan inspirasi dari proyek
                                siswa terkini.
                            </p>
                        )}
                    </div>

                    <form onSubmit={submit} className="space-y-4">
                        {isRegister && (
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">
                                    Nama Lengkap
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Masukkan nama lengkap"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 text-sm"
                                />
                            </div>
                        )}

                        {/* Email */}
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Masukkan email Anda"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 text-sm"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    required
                                    placeholder="Masukkan password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 text-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-2.5 top-2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-4 h-4" />
                                    ) : (
                                        <Eye className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {isRegister && (
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">
                                    Konfirmasi Password
                                </label>
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    required
                                    placeholder="Ulangi password"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 text-sm"
                                />
                            </div>
                        )}

                        {/* Tombol submit */}
                        <button
                            type="submit"
                            disabled={processing || isLoading}
                            className="w-full bg-red-600 text-white py-2.5 rounded-md font-medium text-sm hover:bg-red-700 transition disabled:opacity-50"
                        >
                            {isLoading
                                ? "Memproses..."
                                : isRegister
                                ? "Daftar"
                                : "Masuk"}
                        </button>
                    </form>

                    {/* Switch mode */}
                    <div className="text-center mt-5 space-y-1.5">
                        <p className="text-xs text-gray-600">
                            {isRegister
                                ? "Sudah punya akun?"
                                : "Belum punya akun?"}{" "}
                            <button
                                type="button"
                                onClick={() =>
                                    setMode(
                                        mode === "loginUser"
                                            ? "registerUser"
                                            : mode === "loginInvestor"
                                            ? "registerInvestor"
                                            : mode === "registerUser"
                                            ? "loginUser"
                                            : "loginInvestor"
                                    )
                                }
                                className="text-red-600 font-medium hover:underline"
                            >
                                {isRegister
                                    ? "Masuk di sini"
                                    : "Daftar sekarang"}
                            </button>
                        </p>

                        <button
                            type="button"
                            onClick={() =>
                                setMode(
                                    mode.includes("Investor")
                                        ? "loginUser"
                                        : "loginInvestor"
                                )
                            }
                            className="text-xs text-gray-600 hover:text-red-600 transition"
                        >
                            {mode.includes("Investor")
                                ? "Kembali ke Login Pengguna"
                                : "Login sebagai Investor"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
