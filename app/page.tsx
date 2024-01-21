import HeroSection from "@/components/Index/HeroSection";
import Services from "@/components/Index/Services";
import HowItWorks from "@/components/Index/HowItWorks";
import WhyChoosePaymita from "@/components/Index/WhyChoosePaymita";
import VirtualCard from "@/components/Index/VirtualCard";
import EnjoyConvenience from "@/components/Index/EnjoyConvenience";
import FAQs from "@/components/Index/FAQs";

const Index = (): JSX.Element => {
    return (
        <>
            <HeroSection />

            <main className="pb-12">
                <Services />
                <HowItWorks />
                <WhyChoosePaymita />
                <VirtualCard />
                <EnjoyConvenience />
                <FAQs />
            </main>
        </>
    );
};

export default Index;
