import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Paymita | Paymita's privacy policy.",
    description: "Paymita's privacy policy."
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
                    Privacy Policy
                </span>
            </Breadcrumbs>

            <h1 className="header text-center my-10">
                Privacy Policy
            </h1>

            <section className="bg-white grid gap-5 rounded-xl p-8 mx-4 lg:mx-20 lg:px-20 lg:pt-10">
                <div className="grid gap-4">
                    <h2 className="header text-xl leading-[22px]">
                        Effective Date: February, 2024
                    </h2>

                    <p className="text-brand-light-purple">
                        Welcome to Paymita! Your privacy is important to us, and we are committed to protecting and respecting it. This Privacy Policy outlines how Paymita collects, uses, and safeguards your personal information. Please take the time to read and understand our practices.
                    </p>
                </div>

                <div className="grid gap-4">
                    <h3 className="header text-lg font-semibold leading-[19.8px]">
                        1. Information We Collect
                    </h3>

                    <ul className="text-brand-light-purple grid gap-2 list-decimal pl-6">
                        <li>
                            Personal Information: We may collect personal information such as your name, contact details, and other identifiers when you create an account or use our services.
                        </li>

                        <li>
                            Transaction Information: Details related to your transactions, including purchases, payments, and other financial activities within the Paymita app.
                        </li>

                        <li>
                            Device Information: Information about your device, such as the type, model, operating system, and unique device identifiers.
                        </li>

                        <li>
                            Usage Information: Data about your interactions with our app, including pages viewed, features used, and other activities.
                        </li>
                    </ul>
                </div>

                <div className="grid gap-4">
                    <h3 className="header text-lg font-semibold leading-[19.8px]">
                        2. How We Use Your Information
                    </h3>

                    <div className="grid gap-2">
                        <p>
                            We use the information we collect for the following purposes:
                        </p>

                        <ul className="text-brand-light-purple grid gap-2 list-decimal pl-6">
                            <li>
                                Service Delivery: To provide, maintain, and improve our services, including processing transactions and delivering requested features.
                            </li>

                            <li>
                                Customer Support: To respond to your inquiries, resolve issues, and provide customer support.
                            </li>

                            <li>
                                Personalization: To tailor our services to your preferences and enhance your overall experience with Paymita.
                            </li>

                            <li>
                                Security: To ensure the security and integrity of our platform, including fraud prevention and unauthorized access detection.
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="grid gap-4">
                    <h3 className="header text-lg font-semibold leading-[19.8px]">
                        3. Sharing Your Information
                    </h3>

                    <div className="grid gap-2">
                        <p>
                            We do not sell, trade, or rent your personal information to third parties. However, we may share your information with:
                        </p>

                        <ul className="text-brand-light-purple grid gap-2 list-decimal pl-6">
                            <li>
                                Service Providers: Trusted third-party service providers who assist us in delivering our services.
                            </li>

                            <li>
                                Legal Compliance: When required by law or in response to a legal request, such as a court order or government inquiry.
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="grid gap-4">
                    <h3 className="header text-lg font-semibold leading-[19.8px]">
                        4. Your Choices
                    </h3>

                    <div className="grid gap-2">
                        <p>
                            You have the right to:
                        </p>

                        <ul className="text-brand-light-purple grid gap-2 list-decimal pl-6">
                            <li>
                                Access and Correct Your Information: Review and update your personal information through the Paymita app.
                            </li>

                            <li>
                                Opt-Out: Opt-out of receiving promotional communications by adjusting your notification settings in the app.
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="grid gap-4">
                    <h3 className="header text-lg font-semibold leading-[19.8px]">
                        5. Security:
                    </h3>

                    <p className="text-brand-light-purple">
                        We implement security measures to protect your personal information from unauthorized access and use. However, no method of transmission over the internet or electronic storage is entirely secure. Therefore, we cannot guarantee absolute security.
                    </p>
                </div>

                <div className="grid gap-4">
                    <h3 className="header text-lg font-semibold leading-[19.8px]">
                        6. Updates to Privacy Policy
                    </h3>

                    <p className="text-brand-light-purple">
                        We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. We encourage you to review this policy periodically.
                    </p>
                </div>

                <div className="grid gap-4">
                    <h3 className="header text-lg font-semibold leading-[19.8px]">
                        Contact Us
                    </h3>

                    <p className="text-brand-light-purple">
                        If you have any questions or concerns regarding this Privacy Policy, please contact us at <Link className=" text-brand-light-blue font-bold underline underline-offset-4 decoration-wavy hover:text-brand-light-purple hover:decoration-brand-dark-purple" href="mailto:support@paymita.co">support@paymita.co</Link>
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
