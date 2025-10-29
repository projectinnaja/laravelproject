import ApplicationLogo from "./ApplicationLogo";
import NavLink from "./NavLink";
import { Link } from "@inertiajs/react";
import { LogIn } from "react-feather";
export default function HeaderBeraksi({ children, id }) {
    return (
        <header className="absolute top-0 right-0 left-0" id={id}>
            <nav className="bg-[#fbfbfb]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {children}
                </div>
            </nav>
        </header>
    );
}
