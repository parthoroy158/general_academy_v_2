import Link from "next/link";
import Home_Banner from "./components/Home_Banner";
import All_Courses from "./components/All_Courses";
import { IoArrowForwardSharp } from "react-icons/io5";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      <Home_Banner />

      <section className="bg-[#F7F9FC]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black">
              শুরু করার জন্য সেরা কোর্সগুলি
            </h2>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 self-start md:self-auto rounded-3xl px-5 py-2.5  bg-[#F7F9FC] text-black border border-black text-[15px] font-semibold hover:bg-[#3a8be8] transition-colors"
              aria-label="যোগাযোগ করুন"
            >
              সব কোর্স দেখুন  <IoArrowForwardSharp className="text-lg" />
            </Link>
          </div>
        </div>

        {/* Hide the internal heading to avoid duplicates */}
        <All_Courses showHeading={false} />
      </section>
    </div>
  );
}
