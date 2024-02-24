import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/assets/img/pay-bills-hero-image.png";
import DownloadIOS from "@/assets/img/download-ios.svg";
import DownloadAndroid from "@/assets/img/download-android.svg";

const HeroSection = (): JSX.Element => {
    return (
        <div className="grid items-center bg-white text-brand-dark-purple scroll-mt-14 lg:scroll-mt-[4.5rem] lg:grid-cols-2" id="about">
            <div className="py-8 px-4 grid gap-4 md:w-4/5 md:mx-auto md:py-16 md:text-center lg:text-left lg:w-full lg:pl-20 lg:py-0 lg:pr-0">
                <div className="inline-block w-auto font-bold text-[rgba(225,_243,_255,_1)] text-sm">
                    <p className="inline-block w-auto bg-brand-dark-purple py-2 px-4 rounded-[2.25rem] font-bold">
                        Pay Bills
                    </p>
                </div>

                <h1 className="text-[2.5rem] font-bold leading-[110%] lg:text-[3.5rem]">
                    Simplify Your Bill Payments
                </h1>

                <p className="text-wrap text-[rgba(32,_43,_60,_1)]">
                    Say goodbye to the hassle of managing multiple bills. With Paymita, you can easily pay your electricity bills, cable subscriptions, and streaming services all in one place.
                </p>

                <div className="flex items-center gap-4 md:mx-auto lg:mx-0">
                    <Link href="">
                        <Image className="w-full h-1/2 lg:h-14" src={DownloadIOS} alt="Download our app from the iOS store" title="Download our app from the iOS store" />
                    </Link>

                    <Link href="">
                        <Image className="w-full h-1/2 lg:h-14" src={DownloadAndroid} alt="Download our app from the android playstore" title="Download our app from the android playstore" />
                    </Link>
                </div>
            </div>

            <Image src={HeroImage} alt="Explore Seamless Data Subscriptions." priority={true} fetchPriority="high" quality={100} placeholder="blur" loading="eager" />
        </div>
    );
};

export default HeroSection;
