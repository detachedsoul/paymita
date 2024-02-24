"use client";

import Accordion from "@/components/Accordion";
import Link from "next/link";
import { useId, useState } from "react";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon } from "lucide-react";

type faqsCategory = {
    id: string,
    routeName: string,
    route: string
};

const FAQsContent = (): JSX.Element => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const pathname = usePathname();

    const faqsCategories: faqsCategory[] = [
        {
            id: useId(),
            routeName: "General",
            route: "/faqs/"
        }
    ];

    const handleFAQsCategoryToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <section className="grid gap-8 items-start bg-white px-4 py-8 lg:grid-cols-12 lg:p-20">
                <div className="grid gap-6 items-start md:grid-cols-2 lg:grid-cols-1 lg:col-span-7">
                    <Accordion question="Is my information secure with Paymita?" answer={<p>Yes, your personal and financial information is secure with Paymita. We use advanced encryption technologies to protect your data.</p>} />

                    <Accordion question="What services can I pay for using Paymita’s virtual card?" answer={<p>Pay for data, airtime, cable subscriptions, electricity bills, and fund betting wallets seamlessly with Paymita’s virtual card.</p>} />

                    <Accordion question="How can I contact Paymita’s customer support?" answer={<p>For assistance, visit <Link className=" text-brand-light-blue font-bold underline underline-offset-4 decoration-wavy hover:text-brand-light-purple hover:decoration-brand-dark-purple" href="/contact">“Contact Us”</Link> on the website. Reach us through live chat, email, or phone for prompt and helpful support.</p>} />

                    <Accordion question="How do I sign up for a Paymita account?" answer={<p>Signing up for Paymita is easy! Download our app, click <span className="text-brand-light-blue font-bold underline underline-offset-4 decoration-wavy hover:text-brand-light-purple hover:decoration-brand-dark-purple">“Sign Up,”</span> and follow the quick registration process. Provide the required details, and you’ll be ready to enjoy our services in no time.</p>} />

                    <Accordion question="How quickly do funds reflect in my Paymita wallet?" answer={<p>Funds added to your wallet reflect instantly for swift transactions.</p>} />
                </div>

                <div className={`bg-white shadow grid gap-4 p-4 rounded-lg fixed top-0 w-[calc(100%-2rem)] left-4 ${isActive ? 'translate-y-full' : '-translate-y-[200%]'} transition-transform duration-500 ease-in-out lg:ml-auto lg:pr-10 lg:col-span-5 lg:shadow-none lg:p-0 lg:translate-y-0 lg:w-auto lg:sticky lg:top-20 lg:bg-transparent`}>
                    <h2 className="header text-xl">
                        Categories
                    </h2>

                    <ul className="grid gap-4">
                        {faqsCategories.map((category: faqsCategory): JSX.Element => (
                            <li key={category.id}>
                                <Link className={`block font-medium hover:text-[#3366ff] ${category.route === pathname ? 'text-[#3366ff]' : 'text-brand-dark-purple'}`} href={category.route}>
                                    {category.routeName}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <button className="fixed bottom-8 right-4 lg:hidden bg-brand-dark-purple p-[0.28569rem] rounded-sm text-[#e4faee]" type="button" aria-label="Toggle FAQs category list" onClick={handleFAQsCategoryToggle}>
                {isActive ? (
                    <XIcon />
                ) : (
                    <MenuIcon />
                )}
            </button>
        </>
    );
};

export default FAQsContent;
