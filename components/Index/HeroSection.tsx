import Image from "next/image";
import Link from "next/link";
import IndexHeroImage from "@/assets/img/index-hero-image.png";
import DownloadIOS from "@/assets/img/download-ios.svg";
import DownloadAndroid from "@/assets/img/download-android.svg";

const HeroSection = (): JSX.Element => {
    return (
        <div className="grid items-center bg-[#e1f3ff] lg:grid-cols-12">
            <div className="py-8 px-4 grid gap-4 lg:col-span-5 lg:pl-20 lg:py-0 lg:pr-0">
                <h1 className="text-[2.5rem] text-brand-dark-purple font-bold leading-[110%] lg:text-[3.5rem]">
                    Your Gateway to Effortless & Swift Payments.
                </h1>

                <p>
                    We offer you the easiest and most efficient way to handle your financial transactions. From converting airtime to cash to making seamless payments, experience simplicity like never before.
                </p>

                <div className="flex items-center gap-4">
                    <Link href="">
                        <Image className="w-full h-1/2 lg:h-10" src={DownloadIOS} alt="Download our app from the iOS store" title="Download our app from the iOS store" />
                    </Link>

                    <Link href="">
                        <Image className="w-full h-1/2 lg:h-10" src={DownloadAndroid} alt="Download our app from the android playstore" title="Download our app from the android playstore" />
                    </Link>
                </div>
            </div>

            <div className="lg:col-span-7">
                <Image className="w-full h-full" src={IndexHeroImage} alt="Paymita - Your Gateway to Effortless & Swift Payments." />
            </div>
        </div>
    );
};

export default HeroSection;
