import Image from "next/image";
import Link from "next/link";
import IndexHowItWork from "@/assets/img/betting-how-it-works.png";
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
            header: "Select Bet Platform",
            text: "Choose your preferred bet platform from the list. Paymita supports various platforms to ensure compatibility with your betting preferences."
        },
        {
            id: 2,
            header: "Enter Customer ID",
            text: "Enter your customer ID associated with the selected bet platform. This step ensures a direct and secure connection between your betting account and Paymita."
        },
        {
            id: 3,
            header: "Enter Funding Amount",
            text: "Specify the amount you wish to fund your betting account with. Paymita offers flexibility in choosing the amount that suits your betting strategy."
        },
        {
            id: 4,
            header: "Confirm and Start Betting",
            text: "Review the details, confirm your funding transaction, and start betting  with confidence. Paymita ensures a swift and secure process for immediate access to your funded betting account."
        },
    ];

    return (
        <section className="grid gap-4 items-center py-12 bg-white px-4 lg:grid-cols-2 lg:gap-12 lg:px-20">
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
