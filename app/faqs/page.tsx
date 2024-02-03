import HeroSection from "@/components/FAQs/HeroSection";
import FAQsContent from "@/components/FAQs/FAQsContent";
import EnjoyConvenience from "@/components/Index/EnjoyConvenience";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Paymita | Frequently Asked Questions',
    description: "Here are some basic questions and answers to help you get started."
};

const FAQs = (): JSX.Element => {
    return (
        <>
            <HeroSection />

            <main className="pb-12">
                <FAQsContent />
                <EnjoyConvenience />
            </main>
        </>
    );
};

export default FAQs;
