import Image from "next/image";
import VirtualCardImage from "@/assets/img/index-virtual-card.png";

const VirtualCard = (): JSX.Element => {
    return (
        <section className="grid scroll-mt-14 lg:scroll-mt-[4.5rem] lg:grid-cols-2" id="virtual-card">
            <Image className="order-last lg:order-first" src={VirtualCardImage} alt="Swift Payments with Virtual Cards" />

            <div className="bg-white px-4 py-8 grid gap-[1.875rem] lg:pr-20 lg:pl-10 lg:py-12">
                <h2 className="header">
                    Swift Payments with Virtual Cards
                </h2>

                <p className="text-[#384860]">
                    Transform your online shopping experience with Paymita’s secure virtual cards. Swiftly generate virtual cards within the app, adding an extra layer of security to your transactions. Link them seamlessly to your Paymita account for a hassle-free payment process. Enjoy the convenience of swift online purchases and receive real-time notifications, putting you in control of every transaction.
                </p>
            </div>
        </section>
    );
};

export default VirtualCard;
