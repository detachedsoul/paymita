import Image from "next/image";
import Link from "next/link";
import IndexHowItWork from "@/assets/img/index-how-it-works.png";
import DownloadIOS from "@/assets/img/download-ios.svg";
import DownloadAndroid from "@/assets/img/download-android.svg";

type steps = {
    id: number,
    header: string,
    text: string
};

const HowItWorks = (): JSX.Element => {
    const steps: steps[] = [
        {
            id: 1,
            header: "Sign Up in Minutes",
            text: "Begin by signing up effortlessly. Complete the process in minutes, unlocking a world of convenient financial transactions."
        },
        {
            id: 2,
            header: "Fund Your Account",
            text: "Easily fund your Paymita account. Add funds with the payment method of your choice, ensuring your wallet is ready for transactions."
        },
        {
            id: 3,
            header: "Choose Service",
            text: "Select the service you need from a range of options. Whether it's making payments, converting airtime or more, Paymita has you covered."
        },
        {
            id: 4,
            header: "Make Purchases",
            text: "Proceed to make purchases seamlessly. Enjoy a swift and secure shopping experience with Paymita."
        },
    ];

    return (
        <section className="grid gap-4 items-center py-12 bg-white px-4 lg:grid-cols-2 lg:px-20">
            <Image className="text-center ml-[2.5%] lg:ml-0 lg:text-left" src={IndexHowItWork} alt="How It Works" />

            <div className="grid gap-14 text-center lg:text-left">
                <div className="grid gap-10">
                    <div className="grid gap-2">
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
