import HeroSection from "@/components/Contact/HeroSection";
import ContactContainer from "@/components/Contact/ContactContainer";
import FAQs from "@/components/Index/FAQs";
import EnjoyConvenience from "@/components/Index/EnjoyConvenience";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Paymita | Contact Us',
    description: "Have questions, feedback, or need assistance? We're here to help! Feel free to reach out to us through the following channels:"
};

const Contact = (): JSX.Element => {
    return (
        <>
            <HeroSection />

            <main className="pb-12">
                <ContactContainer />
                <EnjoyConvenience />
                <FAQs />
            </main>
        </>
    );
};

export default Contact;
