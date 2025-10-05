"use client";
import React from "react";
import Image from "next/image";
import { IoArrowForwardSharp } from "react-icons/io5";
import Link from "next/link";

const Home_Banner = () => {
    return (
        <section className="w-full bg-[#F7F9FC]">
            <div className="relative w-full max-w-[1408px] mx-auto h-[320px] sm:h-[450px] md:h-[520px] lg:h-[600px] xl:h-[700px] max-h-[802px] overflow-hidden lg:rounded-2xl ">
                {/* Background Image */}
                <Image
                    src="/Home_Banner_Image.png"
                    alt="Home Banner"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Overlay Gradient */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 90%)",
                    }}
                ></div>

                {/* Text Content */}
                <div className="absolute inset-0 lg:mt-35 flex flex-col justify-start items-start text-white px-4 sm:px-6 md:px-12 lg:px-20 pt-20 sm:pt-28 md:pt-36 lg:pt-44 xl:pt-52">
                    <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-[46px] xl:text-[52px] font-bold leading-snug sm:leading-tight mb-3 sm:mb-4 drop-shadow-md">
                        জুডিসিয়ারি কঠিন নয়,
                        <br />
                        প্রস্তুতি যদি গোছানো হয়।
                    </h1>

                    <p className="text-[11px] sm:text-sm md:text-base lg:text-lg xl:text-xl mb-5 sm:mb-6 max-w-[620px] leading-relaxed opacity-95">
                        জুডিসিয়ারি ও বার কাউন্সিল পরীক্ষার জন্য বিষয় ভিত্তিক প্রস্তুতি ম্যাটেরিয়াল
                    </p>

                    {/* Buttons & Student Info */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                        {/* Contact Button */}
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 self-start md:self-auto rounded-3xl px-5 py-2.5  bg-[#51A2FF]  text-[15px] font-semibold hover:bg-[#3a8be8] transition-colors"
                            aria-label="যোগাযোগ করুন"
                        >
                            যোগাযোগ  <IoArrowForwardSharp className="text-lg" />
                        </Link>

                        {/* Student Info */}
                        <div className="flex items-center gap-4 sm:gap-5 mt-3 sm:mt-0">
                            <div className="flex -space-x-2">
                                <img
                                    src="https://randomuser.me/api/portraits/men/45.jpg"
                                    alt="student1"
                                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                                />
                                <img
                                    src="https://randomuser.me/api/portraits/women/68.jpg"
                                    alt="student2"
                                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                                />
                                <img
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    alt="student3"
                                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                                />
                            </div>
                            <p className="text-[11px] sm:text-sm md:text-base opacity-95">
                                ২ হাজার+ শিক্ষার্থী
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home_Banner;
