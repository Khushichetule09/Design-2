"use client";

import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="absolute top-0 left-0 w-full z-50">
            {/* Main Navbar */}
            <div className="flex items-center justify-between h-20 px-6 md:px-16 lg:px-24 text-white">

                {/* Left side: Logo */}
                <div className="flex justify-start">
                    <Link href="/" className="flex items-center">
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
                    </Link>
                </div>

                {/* Center: Menu Items */}
                <div className="hidden md:flex flex-1 justify-center items-center gap-10 text-sm font-medium tracking-wide">
                    <Link href="#" className="hover:text-white/80 transition-colors">Benefits</Link>
                    <Link href="#" className="hover:text-white/80 transition-colors">About</Link>
                    <Link href="#" className="hover:text-white/80 transition-colors">Support</Link>
                    <Link href="#" className="hover:text-white/80 transition-colors">FAQ</Link>
                </div>

                {/* Right side: Button & Hamburger */}
                <div className="flex justify-end items-center gap-4">
                    <div className="hidden sm:block">
                        <Link
                            href="#"
                            className="bg-white text-black px-5 py-2 rounded-md text-sm font-medium hover:bg-white/90 transition-all duration-200 whitespace-nowrap"
                        >
                            Deploy your agent
                        </Link>
                    </div>
                    {/* Hamburger Menu Button */}
                    <button
                        className="md:hidden flex items-center p-2 text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-transparent px-6 py-4 flex flex-col gap-4 text-white">
                    <Link href="#" className="hover:text-white/80 transition-colors py-2 text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>Benefits</Link>
                    <Link href="#" className="hover:text-white/80 transition-colors py-2 text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                    <Link href="#" className="hover:text-white/80 transition-colors py-2 text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>Support</Link>
                    <Link href="#" className="hover:text-white/80 transition-colors py-2 text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
                    <div className="sm:hidden pt-4 mt-2 border-t border-white/10 text-center">
                        <Link
                            href="#"
                            className="bg-white text-black px-5 py-2.5 rounded-md text-sm font-medium hover:bg-white/90 transition-all duration-200 block w-full"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Deploy your agent
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}