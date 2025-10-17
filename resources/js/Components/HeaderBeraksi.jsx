import ApplicationLogo from './ApplicationLogo';
import NavLink from './NavLink';
import { Link } from '@inertiajs/react';
import {LogIn} from 'react-feather';
export default function HeaderBeraksi() {
    return (
        <header className="absolute top-0 right-0 left-0" id="headerBeraksi">
            <nav className="bg-[#fbfbfb]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between min-h-[80px]">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <h2 className='text-2xl font-semibold'>ModeUI</h2>
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
                            <button className='flex items-center gap-2 text-[#6d7684] font-semibold bg-[#eeefef] px-4 py-1 text-sm rounded-md'>Login <LogIn className='w-4'></LogIn></button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}