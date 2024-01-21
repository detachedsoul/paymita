import Link from "next/link";
import Accordion from "@/components/Accordion";

const FAQs = (): JSX.Element => {
    return (
        <section className="grid gap-8 items-center bg-[#f8f8fa] py-12 px-4 lg:px-20 lg:grid-cols-12">
            <div className="grid gap-4 lg:col-span-5">
                <h2 className="header">
                    FAQs: Got Questions? We’ve Got Answers!
                </h2>

                <p className="text-brnd-light-purple">
                    Have questions? Find answers to commonly asked queries about Paymita.
                </p>

                <div className="inline-block">
                    <Link className="py-4 px-8 rounded-[2.75rem] bg-[linear-gradient(95deg,_#67B3E4_-5.03%,_#2A2C60_101.09%)] text-white text-sm font-medium hover:bg-[linear-gradient(95deg,_#2A2C60_-5.03%,_#67B3E4_101.09%)] transition-all duration-300" href="">
                        Read More FAQs
                    </Link>
                </div>
            </div>

            <div className="grid gap-6 lg:col-span-7">
                <Accordion question="Is my information secure with Paymita?" answer="Yes, your personal and financial information is secure with Paymita. We use advanced encryption technologies to protect your data." />

                <Accordion question="What services can I pay for using Paymita’s virtual card?" answer="Pay for data, airtime, cable subscriptions, electricity bills, and fund betting wallets seamlessly with Paymita’s virtual card." />

                <Accordion question="How can I contact Paymita’s customer support?" answer={`<p>For assistance, visit <Link className=" text-brand-light-blue font-bold underline underline-offset-4 decoration-wavy" href="">“Contact Us”</Link> on the website. Reach us through live chat, email, or phone for prompt and helpful support.</p>`} />

                <Accordion question="How do I sign up for a Paymita account?" answer={`<p>Signing up for Paymita is easy! download our app, click <Link className="text-brand-light-blue font-bold underline underline-offset-4 decoration-wavy" href="">“Sign Up,”</Link> and follow the quick registration process. Provide the required details, and you’ll be ready to enjoy our services in no time.</p>`} />

                <Accordion question="How quickly do funds reflect in my Paymita wallet?" answer="Funds added to your wallet reflect instantly for swift transactions." />

                {/* <div className="rounded border border-[#f7f7f7] bg-white shadow-[0px_30px_44px_20px_rgba(231,_231,_231,_0.35)] py-4 px-6 grid gap-4">
                    <button className="text-brand-dark-purple font-semibold leading-[170%] text-lg flex items-center gap-10 justify-between text-left w-full" type="button">
                        Is my information secure with Paymita?

                        <MinusIcon />
                    </button>

                    <p>
                        Yes, your personal and financial information is secure with Paymita. We use advanced encryption technologies to protect your data.
                    </p>
                </div> */}

                {/* <div className="rounded border border-[#f7f7f7] bg-white shadow-[0px_30px_44px_20px_rgba(231,_231,_231,_0.35)] py-4 px-6 grid gap-4">
                    <button className="text-brand-dark-purple font-semibold leading-[170%] text-lg flex items-center gap-10 justify-between text-left w-full" type="button">
                        What services can I pay for using Paymita’s virtual card?

                        <MinusIcon />
                    </button>

                    <p>
                        Pay for data, airtime, cable subscriptions, electricity bills, and fund betting wallets seamlessly with Paymita’s virtual card.
                    </p>
                </div>

                <div className="rounded border border-[#f7f7f7] bg-white shadow-[0px_30px_44px_20px_rgba(231,_231,_231,_0.35)] py-4 px-6 grid gap-4">
                    <button className="text-brand-dark-purple font-semibold leading-[170%] text-lg flex items-center gap-10 justify-between text-left w-full" type="button">
                        How can I contact Paymita’s customer support?

                        <PlusIcon />
                    </button>

                    <p>
                        For assistance, visit <Link className="text-brand-light-blue font-bold underline underline-offset-4 decoration-wavy" href="">“Contact Us”</Link> on the website. Reach us through live chat, email, or phone for prompt and helpful support.
                    </p>
                </div>

                <div className="rounded border border-[#f7f7f7] bg-white shadow-[0px_30px_44px_20px_rgba(231,_231,_231,_0.35)] py-4 px-6 grid gap-4">
                    <button className="text-brand-dark-purple font-semibold leading-[170%] text-lg flex items-center gap-10 justify-between text-left w-full" type="button">
                        How do I sign up for a Paymita account?

                        <PlusIcon />
                    </button>

                    <p>
                        Signing up for Paymita is easy! download our app, click <Link className="text-brand-light-blue font-bold underline underline-offset-4 decoration-wavy" href="">Sign Up,”</Link> and follow the quick registration process. Provide the required details, and you’ll be ready to enjoy our services in no time.
                    </p>
                </div>

                <div className="rounded border border-[#f7f7f7] bg-white shadow-[0px_30px_44px_20px_rgba(231,_231,_231,_0.35)] py-4 px-6 grid gap-4">
                    <button className="text-brand-dark-purple font-semibold leading-[170%] text-lg flex items-center gap-10 justify-between text-left w-full" type="button">
                        How quickly do funds reflect in my Paymita wallet?

                        <PlusIcon />
                    </button>

                    <p>
                        Funds added to your wallet reflect instantly for swift transactions.
                    </p>
                </div> */}
            </div>
        </section>
    );
};

export default FAQs;
