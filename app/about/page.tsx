import HeroSection from "@/components/About/HeroSection";
import EnjoyConvenience from "@/components/Index/EnjoyConvenience";
import FinancialFreedom from "@/components/About/FinancialFreedom";
import OurUniqueTraits from "@/components/About/OurUniqueTraits";
import FAQs from "@/components/Index/FAQs";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
    title: "Paymita | Hyper focused on security and speed, we're dedicated to revolutionizing the way you manage your finances and make payments.",
    description: "Hyper focused on security and speed, we're dedicated to revolutionizing the way you manage your finances and make payments."
};

const About = (): JSX.Element => {
    return (
        <>
            <Breadcrumbs>
                <span className="font-semibold">
                    About
                </span>
            </Breadcrumbs>

            <HeroSection />

            <main className="pb-12">
                <OurUniqueTraits />
                <FinancialFreedom />
                <EnjoyConvenience />
                <FAQs />
            </main>
        </>
    );
};

export default About;
