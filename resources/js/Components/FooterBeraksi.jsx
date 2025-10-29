import FooterCard from "./CardBeraksi";

function UpperFooter() {
    return (
        <div>
            <div className="max-w-6xl px-4 sm:px-6 py-7 lg:px-8 mx-auto">
                <div className="flex flex-wrap gap-5">
                    <div style={{ flex: "1" }}></div>
                    <div style={{ flex: "1" }}>
                        <div className="flex flex-wrap gap-5">
                            <FooterCard
                                title="Mudah"
                                text="Dalam Transaksi dan Pembayaran"
                            />
                            <FooterCard
                                title="Mudah"
                                text="Dalam Transaksi dan Pembayaran"
                            />
                            <FooterCard
                                title="Mudah"
                                text="Dalam Transaksi dan Pembayaran"
                            />
                            <FooterCard
                                title="Mudah"
                                text="Dalam Transaksi dan Pembayaran"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function LowerFooter() {
    return (
        <div className="bg-[#b01116]">
            <div className="max-w-6xl px-4 sm:px-6 py-7 lg:px-8 mx-auto">
                <div className="flex flex-wrap gap-5">
                    <div style={{ flex: "1" }}>
                        <h3 className="font-semibold text-[1.2rem] text-[#fbfbfb]">
                            Pusat Informasi
                        </h3>
                        <div className="info-links text-[#fbfbfb] mt-4 flex gap-x-40">
                            <ul>
                                <li>Tentang Kami</li>
                                <li>Peta Situs</li>
                                <li>Hubungi Kami</li>
                                <li>FAQ</li>
                            </ul>
                            <ul>
                                <li>Cara Pembelian</li>
                                <li>Cara Pembayaran</li>
                                <li>Syarat & Ketentuan</li>
                                <li>Return Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ flex: "1" }}>
                        <div className="flex flex-wrap gap-5">
                            <div className="flex flex-1">
                                <h3 className="font-semibold text-[1.2rem] text-[#fbfbfb]">
                                    Metode Pembayaran
                                </h3>
                            </div>
                            <div className="flex flex-1">
                                <h3 className="font-semibold text-[1.2rem] text-[#fbfbfb]">
                                    Jasa Pengiriman
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function FooterBeraksi({ id }) {
    return (
        <footer className="absolute bottom-0 right-0 left-0" id={id}>
            <UpperFooter></UpperFooter>
            <LowerFooter></LowerFooter>
        </footer>
    );
}
