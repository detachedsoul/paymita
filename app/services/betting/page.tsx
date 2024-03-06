import HeroSection from "@/components/Services/Betting/HeroSection";
import HowItWorks from "@/components/Services/Betting/HowItWorks";
import EnjoyConvenience from "@/components/Index/EnjoyConvenience";
import FAQs from "@/components/Index/FAQs";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Paymita | Fund Your Betting Account with Paymita',
    description: "Fund Your Betting Account with Paymita"
};

const Index = (): JSX.Element => {
    return (
        <>
            <Breadcrumbs>
                <span className="font-bold">
                    Services
                </span>

                /

                <span>
                    Betting
                </span>
            </Breadcrumbs>

            <HeroSection />

            <main className="pb-12">
                <HowItWorks />
                <EnjoyConvenience />
                <FAQs />
            </main>
        </>
    );
};

export default Index;
