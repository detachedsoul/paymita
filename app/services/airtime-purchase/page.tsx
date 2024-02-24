import HeroSection from "@/components/Services/AirtimePurchase/HeroSection";
import HowItWorks from "@/components/Services/AirtimePurchase/HowItWorks";
import EnjoyConvenience from "@/components/Index/EnjoyConvenience";
import FAQs from "@/components/Index/FAQs";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Paymita | Recharge your mobile credit whenever and wherever.',
    description: "Recharge your mobile credit whenever and wherever."
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
                    Airtime Purchase
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
