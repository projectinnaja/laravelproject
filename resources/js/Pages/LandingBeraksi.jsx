import { Link, Head } from "@inertiajs/react";
import HeaderBeraksi from "@/Components/HeaderBeraksi";
import FooterBeraksi from "@/Components/FooterBeraksi";
import HeroBeraksi from "@/Components/HeroBeraksi";
import NavLink from "@/Components/NavLink";
import { LogIn } from "react-feather";

export default function LandingBeraksi() {
    const parentStyle = {
        paddingTop:
            document.querySelector("#headerBeraksi")?.offsetHeight + "px",
        paddingBottom:
            document.querySelector("#footerBeraksi")?.offsetHeight + "px",
    };
    return (
        <div
            id="superParent"
            style={parentStyle}
            className="min-h-full relative"
        >
            <Head title="LandingBeraksi" />
            <HeaderBeraksi id="headerBeraksi">
                <div className="flex justify-between min-h-[80px]">
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link href="/">
                                <h2 className="text-2xl font-semibold">
                                    ModeUI
                                </h2>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <NavLink>Project</NavLink>
                        <NavLink>Tentang Kami</NavLink>
                        <NavLink>Blog</NavLink>
                        <NavLink>Q&A</NavLink>
                    </div>
                    <div className="flex items-center">
                        <Link
                            href={route("login")}
                            className="flex items-center gap-2 text-[#6d7684] font-semibold bg-[#eeefef] px-4 py-1 text-sm rounded-md"
                        >
                            Login <LogIn className="w-4"></LogIn>
                        </Link>
                    </div>
                </div>
            </HeaderBeraksi>
            <main>
                <HeroBeraksi></HeroBeraksi>
            </main>
            <FooterBeraksi id="footerBeraksi"></FooterBeraksi>
        </div>
    );
}
