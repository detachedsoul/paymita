import Image from "next/image";
import Link from "next/link";
import DownloadIOS from "@/assets/img/download-ios.svg";
import DownloadAndroid from "@/assets/img/download-android.svg";
import IndexEnjoyConvenience from "@/assets/img/index-enjoy-convenience.png";

const EnjoyConvenience = (): JSX.Element => {
    return (
        <section className="grid items-center gap-4 bg-[#e1f3ff] pt-12 px-4 lg:grid-cols-12 lg:px-20 lg:gap-6">
            <div className="grid gap-4 lg:col-span-6 lg:pb-12">
                <h2 className="header">
                    Experience convenience at your fingertips. Download the Paymita app today.
                </h2>

                <p className="text-brnd-light-purple">
                    Experience seamless transactions and unparalleled convenience with our all-in-one payments app.
                </p>

                <div className="flex items-center gap-4">
                    <Link href="">
                        <Image className="w-full h-1/2 lg:h-14" src={DownloadIOS} alt="Download our app from the iOS store" title="Download our app from the iOS store" />
                    </Link>

                    <Link href="">
                        <Image className="w-full h-1/2 lg:h-14" src={DownloadAndroid} alt="Download our app from the android playstore" title="Download our app from the android playstore" />
                    </Link>
                </div>
            </div>

            <div className="lg:col-span-6 lg:h-[39.125rem]">
                <Image className="h-full w-full" src={IndexEnjoyConvenience} alt="Experience convenience at your fingertips. Download the Paymita app today." />
            </div>
        </section>
    );
};

export default EnjoyConvenience;
