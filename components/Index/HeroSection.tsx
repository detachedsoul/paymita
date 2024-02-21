import Image from "next/image";
import Link from "next/link";
import IndexHeroImage from "@/assets/img/index-hero-image.png";
import DownloadIOS from "@/assets/img/download-ios.svg";
import DownloadAndroid from "@/assets/img/download-android.svg";

const HeroSection = (): JSX.Element => {
    return (
        <div className="grid items-center bg-[#e1f3ff] scroll-mt-14 lg:scroll-mt-[4.5rem] lg:grid-cols-2" id="about">
            <div className="py-8 px-4 grid gap-4 md:w-4/5 md:mx-auto md:py-16 md:text-center lg:text-left lg:w-full lg:pl-20 lg:py-0 lg:pr-0">
                <h1 className="text-[2.5rem] text-brand-dark-purple font-bold leading-[110%] lg:text-[3.5rem]">
                    Your Gateway to Effortless & Swift Payments.
                </h1>

                <p className="text-wrap md:text-center lg:text-left">
                    Experience unparalleled simplicity in managing your financial transactions — from converting airtime to cash to seamless bill payments and affordable Internet data plans.
                </p>

                <div className="flex items-center gap-4 md:mx-auto lg:mx-0">
                    <Link href="">
                        <Image className="w-full h-1/2 lg:h-14" src={DownloadIOS} alt="Download our app from the iOS store" title="Download our app from the iOS store" priority={true} />
                    </Link>

                    <Link href="">
                        <Image className="w-full h-1/2 lg:h-14" src={DownloadAndroid} alt="Download our app from the android playstore" title="Download our app from the android playstore" priority={true} />
                    </Link>
                </div>
            </div>

            <Image src={IndexHeroImage} alt="Paymita - Your Gateway to Effortless & Swift Payments." priority={true} quality={100} fetchPriority="high" placeholder="blur" loading="eager" />
        </div>
    );
};

export default HeroSection;
