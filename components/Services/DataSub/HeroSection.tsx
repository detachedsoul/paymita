import Image from "next/image";
import Link from "next/link";
import IndexHeroImage from "@/assets/img/data-sub-hero-image.png";
import DownloadIOS from "@/assets/img/download-ios.svg";
import DownloadAndroid from "@/assets/img/download-android.svg";

const HeroSection = (): JSX.Element => {
    return (
        <div className="grid items-center bg-[#e1f3ff] scroll-mt-14 lg:scroll-mt-[4.5rem] lg:grid-cols-2" id="about">
            <div className="py-8 px-4 grid gap-4 md:w-4/5 md:mx-auto md:py-16 md:text-center lg:text-left lg:w-full lg:pl-20 lg:py-0 lg:pr-0">
                <div className="inline-block w-auto font-bold text-brand-dark-purple text-sm">
                    <p className="inline-block w-auto bg-white py-2 px-4 rounded-[2.25rem]">
                        Data Subscriptions
                    </p>
                </div>

                <h1 className="text-[2.5rem] text-brand-dark-purple font-bold leading-[110%] lg:text-[3.5rem]">
                    Explore Seamless Data Subscriptions.
                </h1>

                <p className="text-wrap">
                    Our Data Subscription feature allows you to effortlessly purchase data plans directly through the Paymita app. Experience convenience, speed, and control over your data usage like never before.
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

            <div>
                <Image src={IndexHeroImage} alt="Paymita - Your Gateway to Effortless & Swift Payments." priority fetchPriority="high" />
            </div>
        </div>
    );
};

export default HeroSection;
