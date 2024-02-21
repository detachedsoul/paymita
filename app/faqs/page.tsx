import HeroSection from "@/components/FAQs/HeroSection";
import FAQsContent from "@/components/FAQs/FAQsContent";
import EnjoyConvenience from "@/components/Index/EnjoyConvenience";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Paymita | Here are some basic questions and answers to help you get started.',
    description: "Here are some basic questions and answers to help you get started."
};

const FAQs = (): JSX.Element => {
    return (
        <>
            <Breadcrumbs>
                <span className="font-semibold">
                    FAQs
                </span>
            </Breadcrumbs>

            <HeroSection />

            <main className="pb-12">
                <FAQsContent />
                <EnjoyConvenience />
            </main>
        </>
    );
};

export default FAQs;
