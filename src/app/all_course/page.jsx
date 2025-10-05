import React from 'react';
import All_Courses from '../components/All_Courses';

export const metadata = {
    title: "All Courses | সকল কোর্সগুলি  | বিজেএসএকাডেমি",
    description:
        "বিজেএসএকাডেমির সেরা অনলাইন কোর্সসমূহ—বি.জে.এস, বার কাউন্সিল, ভর্তি পরীক্ষা ও এক্সাম ব্যাচের সম্পূর্ণ তালিকা এক জায়গায় দেখুন।",
    keywords: [
        "বিজেএসএকাডেমি",
        "BJS Course",
        "Bar Council Course",
        "Online Exam Batch",
        "Law Admission",
        "All Courses",
        "বিজেএসকোর্স",
    ],
}

const page = () => {
    return (
        <div className='w-full bg-[#F7F9FC]'>
            <div className='max-w-screen-xl w-full mx-auto min-h-screen text-black sm:py-10 px-4 sm:px-6 lg:px-8'>
                <h2 className="text-xl sm:text-2xl bg-[#F7F9FC] md:text-3xl font-extrabold sm:mb-6">
                    শুরু করার জন্য সেরা কোর্সগুলি
                </h2>
                <All_Courses></All_Courses>
            </div>
        </div>
    );
};

export default page;