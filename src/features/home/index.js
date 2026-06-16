import HomeHeader from "@/shared/components/HomeHeader";
import Footer from "@/shared/components/Footer";
import HeroSection from "./components/HeroSection";
import PromiseSection from "./components/PromiseSection";
import ServicesSection from "./components/ServicesSection";
import ClearRouteSection from "./components/ClearRouteSection";
import WhySalecSection from "./components/WhySalecSection";
import IndustriesSection from "./components/IndustriesSection";
import MarketsSection from "./components/MarketsSection";
import GetStartedSection from "./components/GetStartedSection";

export default function HomeFeature () {
    return (
        <div className="min-h-screen bg-[#020f0e] text-white">
            <HomeHeader />
            <main>
                <HeroSection />
                <PromiseSection />
                <ServicesSection />
                <ClearRouteSection />
                {/* <WhySalecSection /> */}
                <MarketsSection />

                <IndustriesSection />
            </main>
            <Footer />
        </div>
    );
}
