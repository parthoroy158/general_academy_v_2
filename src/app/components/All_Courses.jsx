"use client";

import React, { useState } from "react";
import Link from "next/link";

const courses = [
    { id: 1, title: "১৮ তম বিজেএস জেনারেল কোর্স", category: "bjs", starts: "১৮ই অক্টোবর", price: { old: 6000, current: 3000, currency: "BDT" }, classTime: "রাত ১০:০০", duration: "৪ মাস", url: "/courses/16th-general" },
    { id: 2, title: "১৯ তম বিজেএস পূর্ণাঙ্গ কোর্স", category: "bjs", starts: "১৮ই অক্টোবর", price: { old: 15000, current: 13000, currency: "BDT" }, classTime: "রাত ১০:০০", duration: "৪ মাস", url: "/courses/19th-full" },
    { id: 3, title: "১৮শ বিজেএস প্রিলিমিনারি এক্সাম ব্যাচ", category: "bjs", starts: "১৮ই অক্টোবর", price: { current: 500, currency: "BDT" }, classTime: "রাত ১০:০০", duration: "৪ দিন", url: "/courses/18th-preli-batch" },
    { id: 4, title: "১৮শ বিজেএস লিখিত এক্সাম ব্যাচ", category: "exam", starts: "১৮ই অক্টোবর", price: { current: 6000, currency: "BDT" }, classTime: "রাত ১০:০০", duration: "৪ মাস", url: "/courses/18th-written-batch" },
    { id: 5, title: "বার কাউন্সিল ফুল কোর্স: প্রিলি - রিটেন - ভাইভা", category: "bar", starts: "১৮ই অক্টোবর", price: { old: 7000, current: 6000, currency: "BDT" }, classTime: "রাত ১০:০০", duration: "৪ মাস", url: "/courses/bar-council-full" },
];

const tabs = [
    { key: "all", label: "সবগুলো কোর্স" },
    { key: "bjs", label: "বি.জে.এস প্রিপারেশন" },
    { key: "exam", label: "এক্সাম ব্যাচ" },
    { key: "bar", label: "বার কাউন্সিল" },
];

const All_Courses = () => {
    const [active, setActive] = useState("all");

    const visibleCourses =
        active === "all" ? courses : courses.filter((c) => c.category === active);

    const formatCurrency = (n, code = "BDT") =>
        `${n.toLocaleString("bn-BD")} ${code}`;

    return (
        <div className="w-full bg-[#F7F9FC]">
            <div className="max-w-screen-xl w-full mx-auto min-h-screen text-black py-3 sm:py-5 px-4 sm:px-6 lg:px-8">
                {/* Title */}
               

                {/* Tabs (scrollable on mobile) */}
                <div className="relative -mx-4 sm:mx-0 mb-6 sm:mb-8">
                    <div
                        className="flex gap-2 flex-nowrap overflow-x-auto px-4 sm:px-0"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {/* hide scrollbar (WebKit) */}
                        <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
                        {tabs.map((tab) => {
                            const isActive = active === tab.key;
                            return (
                                <button
                                    key={tab.key}
                                    onClick={() => setActive(tab.key)}
                                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm md:text-base transition-all border ${isActive
                                            ? "bg-[#e6f0ff] text-[#2563EB] border-[#c7dbff] shadow-sm"
                                            : "bg-white text-gray-800 border-gray-200 hover:bg-gray-50"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {visibleCourses.map((course) => (
                        <article
                            key={course.id}
                            className="h-full rounded-2xl overflow-hidden shadow-sm bg-white border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
                        >
                            {/* Gradient Header */}
                            <div className="bg-gradient-to-br from-[#6D28D9] via-[#7C3AED] to-[#0ea5a4] p-4 sm:p-6 min-h-[120px] sm:min-h-[150px] md:min-h-[160px] flex items-end">
                                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-extrabold leading-snug break-words">
                                    {course.title}
                                </h3>
                            </div>

                            {/* Content */}
                            <div className="p-4 sm:p-5 flex flex-col grow">
                                <p className="font-semibold text-gray-900 mb-2 sm:mb-1">
                                    {course.title}
                                </p>

                                {/* Price */}
                                <div className="text-sm text-gray-700 mb-3">
                                    ফি:{" "}
                                    {course.price.old ? (
                                        <>
                                            <span className="line-through text-gray-400 mr-1">
                                                {formatCurrency(course.price.old, course.price.currency)}
                                            </span>
                                            <span className="font-bold">
                                                {formatCurrency(
                                                    course.price.current,
                                                    course.price.currency
                                                )}
                                            </span>
                                        </>
                                    ) : (
                                        <span className="font-bold">
                                            {formatCurrency(
                                                course.price.current,
                                                course.price.currency
                                            )}
                                        </span>
                                    )}
                                </div>

                                {/* Meta */}
                                <div className="grid grid-cols-2 gap-2 sm:gap-3 text-[11px] sm:text-xs text-gray-600">
                                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="w-4 h-4 flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                        >
                                            <circle cx="12" cy="12" r="9" />
                                            <path d="M12 7v5l3 2" />
                                        </svg>
                                        <div>
                                            <div className="font-medium">ক্লাস টাইম</div>
                                            <div className="text-gray-500">{course.classTime}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="w-4 h-4 flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                        >
                                            <rect x="3" y="4" width="18" height="18" rx="2" />
                                            <path d="M16 2v4M8 2v4M3 10h18" />
                                        </svg>
                                        <div>
                                            <div className="font-medium">সেশন সময়কাল</div>
                                            <div className="text-gray-500">{course.duration}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="mt-4 sm:mt-5">
                                    <Link
                                        href={course.url}
                                        className="inline-flex items-center justify-center w-full rounded-full h-10 sm:h-11 font-semibold bg-white text-gray-900 border border-gray-200 hover:bg-[#e8f0ff] hover:border-[#c7dbff] hover:text-[#2563EB] transition"
                                    >
                                        কোর্স দেখুন
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Empty state */}
                {visibleCourses.length === 0 && (
                    <div className="text-center text-gray-600 py-16">
                        এই ক্যাটাগরিতে এখনও কোনো কোর্স যোগ করা হয়নি।
                    </div>
                )}
            </div>
        </div>
    );
};

export default All_Courses;
