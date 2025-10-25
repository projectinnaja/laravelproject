import React, {useEffect, useRef} from "react";
import Header from "@/Components/Header";
import GalleryGrid from "@/Components/GalleryGrid";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/Footer";

export default function GalleryDigital() {
    const headerRef = useRef(null);
    const footerRef = useRef(null);
    const mainRef = useRef(null);
    useEffect(()=> {
        const header = headerRef.current;
        const footer = footerRef.current;
        const main = mainRef.current;

        const updatePadding = () => {
            if (header && footer && main) {
                main.style.paddingTop = header.offsetHeight + 100 + "px";
                main.style.paddingBottom = footer.offsetHeight + 100 + "px";
            }
        };

        updatePadding(); // Jalankan saat pertama kali render
        window.addEventListener("resize", updatePadding);
        return () => window.removeEventListener("resize", updatePadding);
    }, []);
    return (
        <>
            <Head title="Gallery Digital"/>
            <Header ref={headerRef}></Header>
            <main ref={mainRef}>
                <div className="max-w-6xl mx-auto">
                    <GalleryGrid></GalleryGrid>
                </div>
            </main>
            <Footer ref={footerRef}></Footer>
        </>
    )
}