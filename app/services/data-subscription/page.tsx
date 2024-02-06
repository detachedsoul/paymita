import HeroSection from "@/components/Services/DataSub/HeroSection";
import HowItWorks from "@/components/Services/DataSub/HowItWorks";
import EnjoyConvenience from "@/components/Index/EnjoyConvenience";
import FAQs from "@/components/Index/FAQs";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Paymita | Data Subscription',
    description: "Explore Seamless Data Subscriptions."
};

const Index = (): JSX.Element => {
    return (
        <>
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
