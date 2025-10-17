import { useEffect, useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import HeaderBeraksi from '@/Components/HeaderBeraksi';
import HeroBeraksi from '@/Components/HeroBeraksi';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const style = {
        paddingTop: document.querySelector("#headerBeraksi")?.offsetHeight + 'px'
    }
    return (
        <div class="min-h-full relative" id="superParent" style={style}>
            <HeaderBeraksi></HeaderBeraksi>
            <main>{children}</main>
        </div>
    );
}
