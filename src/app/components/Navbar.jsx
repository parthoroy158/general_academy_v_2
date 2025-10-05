"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoArrowForwardSharp } from "react-icons/io5";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("হোম"); // Track active menu item

    const menuItems = [
        { label: "হোম", path: "/" },
        { label: "সকল কোর্স", path: "/all_course" },
        { label: "ডেমো ক্লাস", path: "/demo_class" },
        { label: "আমাদের সম্পর্কে", path: "/about" },
    ];

    return (
        <div className="w-full mx-auto bg-[#F7F9FC]">
            <nav className="navbar  w-full max-w-[1280px] h-[64px] mx-auto px-4 relative z-50">
                {/* Left Section (Logo + Desktop Menu) */}
                <div className="flex items-center gap-6">
                    {/* Logo / Brand */}
                    <a className="flex flex-col leading-tight cursor-pointer select-none mr-[64px]">
                        <p className="font-bold text-[#51A2FF] text-[18px] tracking-wide">General</p>
                        <p className="text-[#51A2FF] text-[16px] -mt-1">Academy</p>
                    </a>

                    {/* Menu Items (Desktop) */}
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 flex items-center gap-3 text-[#525353]">
                            {menuItems.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.path}
                                        onClick={() => setActive(item.label)}
                                        className={`relative text-[15px] cursor-pointer pb-1 transition-colorsnpm i @vercel/analytics duration-200 ${active === item.label
                                            ? "text-black font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black"
                                            : "text-gray-700 hover:text-[#51A2FF]"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Section (Desktop) */}
                <div className="navbar-end ml-auto hidden lg:flex">

                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 self-start md:self-auto rounded-3xl px-5 py-2.5  bg-[#51A2FF]  text-[15px] font-semibold hover:bg-[#3a8be8] transition-colors"
                        aria-label="যোগাযোগ করুন"
                    >
                        যোগাযোগ  <IoArrowForwardSharp className="text-lg" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden ml-auto">
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="btn btn-ghost p-2 text-black"
                        aria-label="Open Menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Right Side Mobile Drawer (Half Screen) */}
                <div
                    className={`fixed top-0 right-0 h-full w-65 bg-white shadow-2xl z-50 flex flex-col items-start p-6 pt-20 space-y-6 text-lg font-medium transform transition-all duration-300 ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
                        }`}
                >
                    {/* Close Button (X) */}
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-6 right-6 text-[#525353] hover:text-[#3a8be8] transition-colors"
                        aria-label="Close Menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Menu Links (Mobile) */}
                    {menuItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.path}
                            onClick={() => {
                                setActive(item.label);
                                setMenuOpen(false);
                            }}
                            className={`relative cursor-pointer text-sm pb-1 transition-colors duration-500 ${active === item.label
                                ? "text-black font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black"
                                : "text-[#525353] hover:text-[#3a8be8]"
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 self-start md:self-auto rounded-3xl px-5 py-2.5  bg-[#51A2FF]  text-[15px] font-semibold hover:bg-[#3a8be8] transition-colors"
                        aria-label="যোগাযোগ করুন"
                    >
                        যোগাযোগ  <IoArrowForwardSharp className="text-lg" />
                    </Link>
                </div>

                {/* Transparent Left Overlay */}
                {menuOpen && (
                    <div
                        onClick={() => setMenuOpen(false)}
                        className="fixed inset-0 bg-transparent bg-opacity-10 backdrop-blur-[2px] z-40 transition-opacity duration-300"
                    />
                )}
            </nav>
        </div>
    );
};

export default Navbar;
