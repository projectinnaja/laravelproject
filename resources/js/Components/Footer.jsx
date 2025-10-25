import React, { forwardRef } from "react";

const Footer = forwardRef((props, ref)=>(
<footer ref={ref} className="absolute bg-[#b01116] left-0 bottom-0 right-0">
            <div className="max-w-6xl mx-auto min-h-[80px] flex items-center justify-center text-center">
                <p className="text-gray-200">
                    <strong>Web Proyek Tel-U</strong> &nbsp; &mdash; &nbsp; <span className="opacity-80">&copy; {new Date().getFullYear()} &nbsp;All Rights Reserved</span>
                </p>
            </div>
        </footer>
));

export default Footer;