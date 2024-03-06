import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Paymita | Paymita's cookie policy.",
    description: "Paymita's cookie policy."
};

const Terms = (): JSX.Element => {
    return (
        <>
            <Breadcrumbs>
                <span className="font-bold">
                    Legal
                </span>

                /

                <span>
                    Cookies Policy
                </span>
            </Breadcrumbs>

            <h1 className="header text-center my-10">
                Cookies Policy
            </h1>

            <section className="bg-white grid gap-5 rounded-xl p-8 mx-4 lg:mx-20 lg:px-20 lg:pt-10">
                <p className="text-brand-light-purple">
                    This Cookie Policy explains how Paymita (“we”, “us”, or “our”) uses cookies and similar technologies to recognize you when you visit our website at <Link className="text-brand-light-blue font-bold underline underline-offset-4 decoration-wavy hover:text-brand-light-purple hover:decoration-brand-dark-purple" href="https://paymita.co" target="_blank" rel="noopenner noreferrer">paymita.co</Link>. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                </p>

                <div className="grid gap-4">
                    <h3 className="header text-lg font-semibold leading-[19.8px]">
                        1. What are cookies?
                    </h3>

                    <p className="text-brand-light-purple">
                        Cookies are small text files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
                    </p>
                </div>

                <div className="grid gap-4">
                    <h3 className="header text-lg font-semibold leading-[19.8px]">
                        2. Why do we use cookies?
                    </h3>

                    <p className="text-brand-light-purple">
                        We use cookies to personalize content and ads, to provide social media features and to analyze our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.
                    </p>
                </div>

                <div className="grid gap-4">
                    <h3 className="header text-lg font-semibold leading-[19.8px]">
                        3. Types of cookies we use:
                    </h3>

                    <ul className="text-brand-light-purple grid gap-2 list-decimal pl-6">
                        <li>
                            Necessary cookies: These cookies are essential for you to navigate the website and use its features, such as accessing secure areas of the site. Without these cookies, certain services cannot be provided.
                        </li>

                        <li>
                            Functionality cookies: These cookies allow the website to remember choices you make (such as your language preferences) and provide enhanced, more personal features.
                        </li>

                        <li>
                            Analytical/performance cookies: These cookies allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.
                        </li>

                        <li>
                            Advertising/targeting cookies: These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement, as well as help measure the effectiveness of the advertising campaign.
                        </li>
                    </ul>
                </div>

                <div className="grid gap-4">
                    <h3 className="header text-lg font-semibold leading-[19.8px]">
                        4. How to control cookies:
                    </h3>

                    <p className="text-brand-light-purple">
                        You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
                    </p>
                </div>

                <div className="grid gap-4">
                    <h3 className="header text-lg font-semibold leading-[19.8px]">
                        5. Updates to this policy:
                    </h3>

                    <p className="text-brand-light-purple">
                        We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please, therefore, re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                    </p>
                </div>

                <div className="grid gap-4">
                    <h3 className="header text-lg font-semibold leading-[19.8px]">
                        Contact Us
                    </h3>

                    <p className="text-brand-light-purple">
                        If you have any questions about our use of cookies or other technologies, please contact us at <Link className=" text-brand-light-blue font-bold underline underline-offset-4 decoration-wavy hover:text-brand-light-purple hover:decoration-brand-dark-purple" href="mailto:support@paymita.co">support@paymita.co</Link>
                    </p>

                    <p>
                        Thank you for choosing Paymita.
                    </p>
                </div>
            </section>
        </>
    );
};

export default Terms;
