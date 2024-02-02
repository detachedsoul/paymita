import Link from "next/link";
import Accordion from "@/components/Accordion";

const FAQs = (): JSX.Element => {
    return (
        <section className="grid gap-8 items-center bg-[#f8f8fa] py-12 px-4 scroll-mt-14 lg:scroll-mt-[4.5rem] lg:px-20 lg:grid-cols-12" id="faqs">
            <div className="grid gap-10 lg:col-span-5">
                <div className="grid gap-4">
                    <h2 className="header">
                        FAQs: Got Questions? We’ve Got Answers!
                    </h2>

                    <p className="text-brnd-light-purple">
                        Have questions? Find answers to commonly asked queries about Paymita.
                    </p>
                </div>

                <div className="inline-block">
                    <Link className="py-4 inline-block px-8 rounded-[2.75rem] bg-[linear-gradient(95deg,_#67B3E4_-5.03%,_#2A2C60_101.09%)] text-white text-sm font-medium hover:bg-[linear-gradient(95deg,_#2A2C60_-5.03%,_#67B3E4_101.09%)] transition-all duration-300" href="/contact">
                        Contact Us
                    </Link>
                </div>
            </div>

            <div className="grid gap-6 lg:col-span-7">
                <Accordion question="Is my information secure with Paymita?" answer={<p>Yes, your personal and financial information is secure with Paymita. We use advanced encryption technologies to protect your data.</p>} />

                <Accordion question="What services can I pay for using Paymita’s virtual card?" answer={<p>Pay for data, airtime, cable subscriptions, electricity bills, and fund betting wallets seamlessly with Paymita’s virtual card.</p>} />

                <Accordion question="How can I contact Paymita’s customer support?" answer={<p>For assistance, visit <Link className=" text-brand-light-blue font-bold underline underline-offset-4 decoration-wavy hover:text-brand-light-purple hover:decoration-brand-dark-purple" href="">“Contact Us”</Link> on the website. Reach us through live chat, email, or phone for prompt and helpful support.</p>} />

                <Accordion question="How do I sign up for a Paymita account?" answer={<p>Signing up for Paymita is easy! download our app, click <Link className="text-brand-light-blue font-bold underline underline-offset-4 decoration-wavy hover:text-brand-light-purple hover:decoration-brand-dark-purple" href="">“Sign Up,”</Link> and follow the quick registration process. Provide the required details, and you’ll be ready to enjoy our services in no time.</p>} />

                <Accordion question="How quickly do funds reflect in my Paymita wallet?" answer={<p>Funds added to your wallet reflect instantly for swift transactions.</p>} />
            </div>
        </section>
    );
};

export default FAQs;
