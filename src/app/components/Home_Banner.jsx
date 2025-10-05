"use client";
import React from "react";
import Image from "next/image";
import { IoArrowForwardSharp } from "react-icons/io5";

const Home_Banner = () => {
    return (
        <div className="w-full h-[850px] bg-[#F7F9FC] mx-auto">
            <div className="relative w-full max-w-[1408px] mx-auto max-h-[802px] sm:h-[450px] md:h-[500px] lg:h-[602px] overflow-hidden rounded-md">
                {/* Background Image */}
                <Image
                    src='/Home_Banner_Image.png' // <-- correct path
                    alt="Home Banner"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
                    }}
                ></div>



                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col justify-center mt-50 items-start px-4 sm:px-6 md:px-12 lg:px-20 text-white">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[45px] font-bold leading-tight mb-3 sm:mb-4">
                        জুডিসিয়ারি কঠিন নয়,
                        <br />
                        প্রস্তুতি যদি গোছানো হয়।
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6">
                        জুডিসিয়ারি ও বার কাউন্সিল পরীক্ষার জন্য বিষয় ভিত্তিক প্রস্তুতি ম্যাটেরিয়াল
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                        <div className="navbar-end ml-auto hidden lg:flex">
                            <a className="btn btn-md rounded-full border-none bg-[#51A2FF] text-white text-[15px] font-semibold hover:bg-[#3a8be8] transition-colors">
                                যোগাযোগ <IoArrowForwardSharp />
                            </a>
                        </div>
                        <div className="flex items-center gap-5 mt-2 sm:mt-0">

                            <div className="flex -space-x-2">
                                <img
                                    src="https://randomuser.me/api/portraits/men/45.jpg"
                                    alt="student2"
                                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                                />
                                <img
                                    src="https://randomuser.me/api/portraits/women/68.jpg"
                                    alt="student1"
                                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                                />
                                <img
                                    src="https://randomuser.me/api/portraits/men/45.jpg"
                                    alt="student2"
                                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                                />

                            </div>
                            <div>
                                <p><span className="text-xs sm:text-sm md:text-base"> ২ হাজার+ শিক্ষার্থী </span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home_Banner;
