import HeroSection from "@/components/Services/DataSub/HeroSection";
import HowItWorks from "@/components/Services/DataSub/HowItWorks";
import EnjoyConvenience from "@/components/Index/EnjoyConvenience";
import FAQs from "@/components/Index/FAQs";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Paymita | Explore Seamless Data Subscriptions.',
    description: "Explore Seamless Data Subscriptions."
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
                    Data Subscriptions
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
