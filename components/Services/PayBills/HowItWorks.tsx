import Image from "next/image";
import Link from "next/link";
import IndexHowItWork from "@/assets/img/pay-bills-how-it-works.png";
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
            header: "Select Your Service",
            text: "Choose the service you want to pay—whether it's your electricity provider, cable subscription, or popular streaming services like Netflix, Prime, or Showmax."
        },
        {
            id: 2,
            header: "Enter Account Details",
            text: "Enter the necessary details, such as account numbers or subscription information. Paymita ensures a seamless and secure input process."
        },
        {
            id: 3,
            header: "Review and Confirm",
            text: "Review the details of your payment and confirm with a simple tap. Paymita provides a user-friendly interface for a hassle-free confirmation process."
        },
        {
            id: 4,
            header: "Instant Payment Processing",
            text: "Experience instant payment processing. Your bills are paid in real-time, providing you with immediate confirmation for peace of mind."
        },
    ];

    return (
        <section className="grid gap-4 items-center py-12 bg-white px-4 lg:grid-cols-2 lg:px-20">
            <Image className="text-center ml-[2.5%] md:mx-auto md:w-4/5 lg:w-full lg:ml-0 lg:text-left" src={IndexHowItWork} alt="How It Works" fetchPriority="high" quality={100} placeholder="blur" />

            <div className="grid gap-14">
                <div className="grid gap-10">
                    <div className="grid gap-2 text-center lg:text-left">
                        <h2 className="header">
                            How It Works
                        </h2>

                        <p className="text-[#384860] text-lg">
                            Discover the simplicity of Paymita’s seamless process.
                        </p>
                    </div>

                    <div className="grid gap-6 items-start grid-cols-2">
                        {steps.map((step: steps): JSX.Element => (
                            <div className="grid gap-3" key={step.id}>
                                <h3 className="text-brand-light-purple font-semibold text-xl leading-normal">
                                    {step.header}
                                </h3>

                                <p className="text-[#384860]">
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
