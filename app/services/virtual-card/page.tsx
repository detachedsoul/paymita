import HeroSection from "@/components/Services/VirtualCard/HeroSection";
import HowItWorks from "@/components/Services/VirtualCard/HowItWorks";
import EnjoyConvenience from "@/components/Index/EnjoyConvenience";
import FAQs from "@/components/Index/FAQs";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Paymita | Next-Generation Payment Convenience',
    description: "Experience the freedom of a virtual card that empowers your online  transactions. Paymita's Swift Virtual Card is designed to provide a  seamless and secure way to make purchases, subscribe to services, and  manage your expenses in the digital realm."
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
                    Swift Virtual Cards
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
