// import React from "react";

// export default function Footer() {
//     return (
//         <footer className="bg-red-800 text-white px-10 py-12 grid md:grid-cols-3 gap-10">
//             <div>
//                 <h3 className="font-semibold text-lg mb-3">Pusat Informasi</h3>
//                 <ul className="space-y-2 text-sm text-gray-200">
//                     <li>Tentang Kami</li>
//                     <li>Peta Situs</li>
//                     <li>Hubungi Kami</li>
//                     <li>FAQ</li>
//                 </ul>
//             </div>

//             <div>
//                 <h3 className="font-semibold text-lg mb-3">
//                     Metode Pembayaran
//                 </h3>
//                 <p className="text-sm text-gray-300">
//                     Visa, MasterCard, BCA, BNI, GoPay, OVO, DANA, LinkAja,
//                     ShopeePay
//                 </p>
//             </div>

//             <div>
//                 <h3 className="font-semibold text-lg mb-3">Jasa Pengiriman</h3>
//                 <p className="text-sm text-gray-300">
//                     JNE, Pos Indonesia, TIKI, SiCepat, Anteraja
//                 </p>
//             </div>
//         </footer>
//     );
// }

// resources/js/Components/Footer.jsx
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-[#B40001] text-white px-10 md:px-20 py-12">
            <div className="grid md:grid-cols-3 gap-10">
                {/* PUSAT INFORMASI */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">
                        Pusat Informasi
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-200">
                        <li>
                            <a href="#">Tentang Kami</a>
                        </li>
                        <li>
                            <a href="#">Peta Situs</a>
                        </li>
                        <li>
                            <a href="#">Hubungi Kami</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                        <li>
                            <a href="#">Cara Pembelian</a>
                        </li>
                        <li>
                            <a href="#">Cara Pembayaran</a>
                        </li>
                        <li>
                            <a href="#">Syarat & Ketentuan</a>
                        </li>
                        <li>
                            <a href="#">Return Policy</a>
                        </li>
                    </ul>
                </div>

                {/* METODE PEMBAYARAN */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">
                        Metode Pembayaran
                    </h3>
                    <div className="grid grid-cols-4 gap-3">
                        <img
                            src="/images/payments/mandiri.png"
                            alt="Mandiri"
                            className="h-5"
                        />
                        <img
                            src="/images/payments/bni.png"
                            alt="BNI"
                            className="h-5"
                        />
                        <img
                            src="/images/payments/bca.png"
                            alt="BCA"
                            className="h-5"
                        />
                        <img
                            src="/images/payments/bri.png"
                            alt="BRI"
                            className="h-5"
                        />
                        <img
                            src="/images/payments/visa.png"
                            alt="Visa"
                            className="h-5"
                        />
                        <img
                            src="/images/payments/mastercard.png"
                            alt="MasterCard"
                            className="h-5"
                        />
                        <img
                            src="/images/payments/gopay.png"
                            alt="GoPay"
                            className="h-5"
                        />
                        <img
                            src="/images/payments/ovo.png"
                            alt="OVO"
                            className="h-5"
                        />
                        <img
                            src="/images/payments/dana.png"
                            alt="Dana"
                            className="h-5"
                        />
                        <img
                            src="/images/payments/linkaja.png"
                            alt="LinkAja"
                            className="h-5"
                        />
                        <img
                            src="/images/payments/alfamart.png"
                            alt="Alfamart"
                            className="h-5"
                        />
                        <img
                            src="/images/payments/indomaret.png"
                            alt="Indomaret"
                            className="h-5"
                        />
                    </div>
                </div>

                {/* JASA PENGIRIMAN */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">
                        Jasa Pengiriman
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        <img
                            src="/images/shipping/jne.png"
                            alt="JNE"
                            className="h-6"
                        />
                        <img
                            src="/images/shipping/pos.png"
                            alt="Pos Indonesia"
                            className="h-6"
                        />
                        <img
                            src="/images/shipping/tiki.png"
                            alt="TIKI"
                            className="h-6"
                        />
                        <img
                            src="/images/shipping/raja.png"
                            alt="Raja Kirim"
                            className="h-6"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-400 pt-4 text-center text-sm text-gray-200">
                © 2025 Telkom University Project Store. All rights reserved.
            </div>
        </footer>
    );
}
