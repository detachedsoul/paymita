import Image from "next/image";
import Link from "next/link";
import IndexHowItWork from "@/assets/img/data-sub-how-it-works.png";
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
            header: "Select Mobile Carrier",
            text: "Choose your network provider from a list of supported options. Paymita caters to various networks, ensuring compatibility with your preferred service provider."
        },
        {
            id: 2,
            header: "Select Your Plan",
            text: "Choose from a variety of data plans that suit your needs. Whether it's daily, weekly, or monthly, Paymita offers flexibility in selecting the right plan for you."
        },
        {
            id: 3,
            header: "Review and Confirm",
            text: "Easily fund your Paymita account. Add funds with the payment method of your choice, ensuring your wallet is ready for transactions."
        },
        {
            id: 4,
            header: "Instant Activation",
            text: "Enjoy instant activation of your chosen data plan. No delays – your data subscription is ready to use right when you need it."
        },
    ];

    return (
        <section className="grid gap-4 items-center py-12 bg-white px-4 lg:grid-cols-2 lg:px-20">
            <Image className="text-center ml-[2.5%] lg:ml-0 lg:text-left" src={IndexHowItWork} alt="How It Works" />

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

                <div className="flex items-center gap-4">
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
