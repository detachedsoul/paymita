import Image from "next/image";
import Link from "next/link";
import IndexHowItWork from "@/assets/img/education-payment-how-it-works.png";
import DownloadIOS from "@/assets/img/download-ios.svg";
import DownloadAndroid from "@/assets/img/download-android.svg";

type steps = {
    id: number,
    header: string,
    text: string;
};

const HowItWorks = (): JSX.Element => {
    const steps: steps[] = [
        {
            id: 1,
            header: "Select Your Exam Board",
            text: "Choose the exam board for which you need to pay—whether it's WAEC, JAMB, NECO, or other educational assessments."
        },
        {
            id: 2,
            header: "Enter Phone Number",
            text: "Enter your phone number along with the necessary details, such as your exam registration number and session information."
        },
        {
            id: 3,
            header: "Review and Confirm",
            text: "Review the details of your exam payment and confirm with a simple tap. Paymita provides a user-friendly interface for a hassle-free confirmation process."
        },
        {
            id: 4,
            header: "Instant Payment Processing",
            text: "Experience instant payment processing. Your education fees are paid in real-time, providing you with immediate confirmation."
        },
    ];

    return (
        <section className="grid gap-4 items-center py-12 bg-brand-dark-purple px-4 lg:grid-cols-2 lg:px-20">
            <Image className="text-center ml-[2.5%] md:mx-auto md:w-4/5 lg:w-full lg:ml-0 lg:text-left" src={IndexHowItWork} alt="How It Works" fetchPriority="high" quality={100} placeholder="blur" />

            <div className="grid gap-14">
                <div className="grid gap-10">
                    <div className="grid gap-2 text-center lg:text-left">
                        <h2 className="header text-brand-light-blue">
                            How It Works
                        </h2>

                        <p className="text-[rgba(248,_248,_250,_1)] text-lg">
                            Discover the simplicity of Paymita’s seamless process.
                        </p>
                    </div>

                    <div className="grid gap-6 items-start grid-cols-2">
                        {steps.map((step: steps): JSX.Element => (
                            <div className="grid gap-3" key={step.id}>
                                <h3 className="text-white font-semibold text-xl leading-normal">
                                    {step.header}
                                </h3>

                                <p className="text-[rgba(248,_248,_250,_1)]">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-4 md:mx-auto lg:mx-0">
                    <Link href="">
                        <Image className="w-full h-1/2 lg:h-14" src={DownloadIOS} alt="Download our app from the iOS store" title="Download our app from the iOS store" />
                    </Link>

                    <Link href="">
                        <Image className="w-full h-1/2 lg:h-14" src={DownloadAndroid} alt="Download our app from the android playstore" title="Download our app from the android playstore" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
