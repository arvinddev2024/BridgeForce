import Navbar from "@/components/navbar";
import Image from "next/image";
import Categories from "./categories";
import Bestsellers from "./bestsellers";
import Footer from "@/components/footer";
import PasswordAuth from "@/components/passwordAuth";
import ServicesSection from "@/components/ServicesSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <PasswordAuth>
        <Navbar />
        <div className="home-section w-full  flex flex-col lg:flex-row justify-center items-center p-4 md:p-6 lg:px-9 lg:py-0 gap-2 lg:gap-0">
          <div className="lg:w-1/2 flex flex-col items-left justify-center text-center px-4 md:px-9 lg:mx-18 py-12 md:py-16 lg:py-20">
            <h1 className="lg:w-full  text-left flex items-start text-xl sm:text-4xl md:text-3xl lg:text-6xl font-medium">
              End-to-End Accuracy Solution for credit reporting & disputes
            </h1>

            <p className="text-left sm:text-lg md:text-xl mt-6  max-w-2xl">
              Inspect, benchmark and optimize your credit bureau data with the
              Data Quality Scanner
            </p>
            <a
              href="#"
              className="mt-8 w-fit inline-block bg-blue-500 text-yellow-50 text-left sm:text-lg md:text-xl py-2 px-8 rounded-lg hover:bg-green-700 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Explore
            </a>
          </div>
          <div className="lg:w-1/2 flex flex-col items-start justify-center text-left px-4 md:px-9 lg:mx-0 py-12 md:py-16 lg:py-0">
            <img
              src="/man.webp"
              alt="Descriptive Alt Text"
              className="w-full max-w-md relative lg:top-14 lg:max-w-2xl object-cover rounded-lg "
            />
          </div>
        </div>
        <div className="w-full mx-auto px-4 md:px-6 lg:px-9 py-6 lg:py-12 bg-white">
          <ServicesSection/>
          <HeroSection/>
          <ProjectsSection />
        </div>
        <Footer />
      </PasswordAuth>
    </>
  );
}
