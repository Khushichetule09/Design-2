import Link from 'next/link';
import React from 'react';

export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 w-full h-20 z-50 flex items-center px-8 md:px-16 lg:px-24 text-white">

            {/* Left side: Logo */}
            <div className="flex flex-1 justify-start">
                <div className="flex items-center">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22V2Z" fill="white" />
                    </svg>
                </div>
            </div>

            {/* Center: Menu Items */}
            <div className="hidden md:flex flex-1 justify-center items-center gap-10 text-sm font-medium tracking-wide">
                <Link href="#" className="hover:text-white/80 transition-colors">Benefits</Link>
                <Link href="#" className="hover:text-white/80 transition-colors">About</Link>
                <Link href="#" className="hover:text-white/80 transition-colors">Support</Link>
                <Link href="#" className="hover:text-white/80 transition-colors">FAQ</Link>
            </div>

            {/* Right side: Button */}
            <div className="flex flex-1 justify-end">
                <Link
                    href="#"
                    className="bg-white text-black px-5 py-2 rounded-md text-sm font-medium hover:bg-white/90 transition-all duration-200"
                >
                    Deploy your agent
                </Link>
            </div>
        </nav>
    );
}