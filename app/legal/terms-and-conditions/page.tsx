import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Paymita | Terms and conditions of using our platform.",
    description: "Terms and conditions of using our platform."
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
                    Terms & Conditions of Use
                </span>
            </Breadcrumbs>

            <h1 className="header text-center my-10">
                Terms of Use
            </h1>

            <div className="bg-white grid gap-5 rounded-xl p-8 mx-4 lg:mx-20 lg:px-20 lg:pt-10">
                <div className="grid gap-4">
                    <h2 className="header text-xl leading-[22px]">
                        Effective Date: February, 2024
                    </h2>

                    <p className="text-brand-light-purple">
                        Welcome to Paymita! These Terms of Use govern your use of the Paymita website and mobile application. By accessing or using our services, you agree to abide by these terms.
                    </p>
                </div>

                <div className="grid gap-4">
                    <h3 className="header text-lg font-semibold leading-[19.8px]">
                        1. Acceptance of Terms
                    </h3>

                    <p className="text-brand-light-purple">
                        By accessing or using Paymita, you agree to comply with these Terms of Use and all applicable laws and regulations. If you do not agree with any part of these terms, please refrain from using our services.
                    </p>
                </div>

                <div className="grid gap-4">
                    <h3 className="header text-lg font-semibold leading-[19.8px]">
                        2. Use of Services
                    </h3>

                    <ul className="text-brand-light-purple grid gap-2 list-disc pl-6">
                        <li>
                            Account Creation: You may be required to create an account to use certain features. You are responsible for maintaining the confidentiality of your account information.
                        </li>

                        <li>
                            User Conduct: You agree not to engage in any activities that may disrupt or interfere with the proper functioning of Paymita.
                        </li>

                        <li>
                            Accuracy of Information: You are responsible for providing accurate and up-to-date information when using our services.
                        </li>
                    </ul>
                </div>

                <div className="grid gap-4">
                    <h3 className="header text-lg font-semibold leading-[19.8px]">
                        3. Privacy
                    </h3>

                    <p className="text-brand-light-purple">
                        Your use of Paymita is also governed by our Privacy Policy. Please review the Privacy Policy to understand our practices regarding the collection and use of your personal information.
                    </p>
                </div>

                <div className="grid gap-4">
                    <h3 className="header text-lg font-semibold leading-[19.8px]">
                        4. Intellectual Property
                    </h3>

                    <ul className="text-brand-light-purple grid gap-2 list-disc pl-6">
                        <li>
                            Ownership: All content and intellectual property on Paymita, including logos, trademarks, and software, are the property of Paymita or its licensors.
                        </li>

                        <li>
                            Use of Content: You may not reproduce, distribute, or use any content from Paymita without prior written consent.
                        </li>
                    </ul>
                </div>

                <div className="grid gap-4">
                    <h3 className="header text-lg font-semibold leading-[19.8px]">
                        5. Payments
                    </h3>

                    <ul className="text-brand-light-purple grid gap-2 list-disc pl-6">
                        <li>
                            Transaction Terms: By making transactions through Paymita, you agree to abide by the transaction terms outlined in the app.
                        </li>

                        <li>
                            Fees: Any fees associated with transactions will be clearly communicated. You agree to pay any applicable fees.
                        </li>
                    </ul>
                </div>

                <div className="grid gap-4">
                    <h3 className="header text-lg font-semibold leading-[19.8px]">
                        6. Termination
                    </h3>

                    <p className="text-brand-light-purple">
                        Paymita reserves the right to terminate or suspend your account at its sole discretion for any reason, including violation of these Terms of Use.
                    </p>
                </div>

                <div className="grid gap-4">
                    <h3 className="header text-lg font-semibold leading-[19.8px]">
                        7. Disclaimers
                    </h3>

                    <p className="text-brand-light-purple">
                        Paymita is provided  “as is” without warranties of any kind, whether express or implied. We do not guarantee the accuracy, completeness, or reliability of our services.
                    </p>
                </div>

                <div className="grid gap-4">
                    <h3 className="header text-lg font-semibold leading-[19.8px]">
                        8. Limitation of Liability
                    </h3>

                    <p className="text-brand-light-purple">
                        Paymita and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
                    </p>
                </div>

                <div className="grid gap-4">
                    <h3 className="header text-lg font-semibold leading-[19.8px]">
                        9. Changes to Terms
                    </h3>

                    <p className="text-brand-light-purple">
                        Paymita reserves the right to update, change, or modify these Terms of Use at any time without notice. It is your responsibility to review these terms periodically.
                    </p>
                </div>

                <div className="grid gap-4">
                    <h3 className="header text-lg font-semibold leading-[19.8px]">
                        10. Governing Law
                    </h3>

                    <p className="text-brand-light-purple">
                        These Terms of Use are governed by and construed in accordance with the laws of Nigeria.
                    </p>
                </div>

                <div className="grid gap-4">
                    <h3 className="header text-lg font-semibold leading-[19.8px]">
                        Contact Us
                    </h3>

                    <p className="text-brand-light-purple">
                        If you have any questions or concerns regarding this Terms of Use, please contact us at <Link className=" text-brand-light-blue font-bold underline underline-offset-4 decoration-wavy hover:text-brand-light-purple hover:decoration-brand-dark-purple" href="mailto:support@paymita.co">support@paymita.co</Link>
                    </p>

                    <p>
                        Thank you for choosing Paymita.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Terms;
