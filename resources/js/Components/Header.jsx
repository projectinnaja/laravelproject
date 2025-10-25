import React, { forwardRef } from "react"
import { Bell, Search, User } from "react-feather"

const Header = forwardRef((props, ref) => (
    <header className="absolute top-0 left-0 right-0" ref={ref}>
            <nav className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between min-h-[80px] flex-wrap">
                    <div id="left-header-nav" className="flex gap-5 flex-1 items-center">
                        <h2>Logo</h2>
                        <form action="" className="w-full">
                            <div className="max-w-80 w-full relative">
                                <input type="text" name="" autoFocus id="header-search-field" className="w-full" placeholder="Cari proyek di sini"/>
                                <Search className="absolute w-5 top-1/2 transform -translate-y-1/2 left-4 text-gray-500"/>
                            </div>
                        </form>
                    </div>
                    <div id="right-header-nav" className="flex gap-4 items-center">
                        <button>
                            <Bell/>
                        </button>
                        <button>
                            <User/>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
));
export default Header;