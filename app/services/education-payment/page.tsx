import HeroSection from "@/components/Services/EducationPayment/HeroSection";
import HowItWorks from "@/components/Services/EducationPayment/HowItWorks";
import EnjoyConvenience from "@/components/Index/EnjoyConvenience";
import FAQs from "@/components/Index/FAQs";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Paymita | Streamlined Education Payments',
    description: "Education is essential, and Paymita makes it easy for you to pay for important exams like WAEC, JAMB, and NECO in a seamless manner."
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
                    Education Payments
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
