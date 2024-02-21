import Image from "next/image";
import Link from "next/link";
import DownloadIOS from "@/assets/img/download-ios.svg";
import DownloadAndroid from "@/assets/img/download-android.svg";
import IndexEnjoyConvenience from "@/assets/img/index-enjoy-convenience.png";

const EnjoyConvenience = (): JSX.Element => {
    return (
        <section className="grid items-center gap-4 bg-[#e1f3ff] pt-12 px-4 lg:grid-cols-12 lg:px-20 lg:gap-6">
            <div className="grid gap-4 md:w-4/5 md:mx-auto md:text-center lg:text-left lg:w-full lg:mx-0 lg:col-span-6 lg:pb-12">
                <h2 className="header">
                    Experience convenience at your fingertips. Download the Paymita app today.
                </h2>

                <p className="text-brnd-light-purple">
                    Experience seamless transactions and unparalleled convenience with our all-in-one payments app.
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

            <div className="lg:col-span-6 lg:h-[35.5rem]">
                <Image className="h-full w-full object-center" src={IndexEnjoyConvenience} alt="Experience convenience at your fingertips. Download the Paymita app today." fetchPriority="high" quality={100} placeholder="blur" />
            </div>
        </section>
    );
};

export default EnjoyConvenience;
