import Image from "next/image";
import WhyPaymita from "@/assets/img/why-choose-paymita.svg";

type whyPaymita = {
    id: number,
    header: string,
    text: string;
};

const WhyChoosePaymita = (): JSX.Element => {
    const whyPaymita: whyPaymita[] = [
        {
            id: 1,
            header: "Security and Privacy",
            text: "Your financial security is our top priority. Paymita employs advanced encryption to safeguard your transactions and ensure the utmost privacy."
        },
        {
            id: 2,
            header: "24/7 Customer Support",
            text: "Experience unparalleled customer support. Our dedicated team is available around the clock to assist you with any inquiries or concerns."
        },
        {
            id: 3,
            header: "Trusted by a Growing Community",
            text: "Join a community of over 500k satisfied users. Paymita is a trusted platform, chosen by individuals seeking reliable and efficient financial services."
        }
    ];

    return (
        <section className="grid gap-4 lg:grid-cols-2 lg:gap-0">
            <div className="grid gap-8 py-8 px-4 lg:px-20">
                <h2 className="header text-center lg:text-left">
                    Why Choose Paymita
                </h2>

                <div className="grid gap-4">
                    {whyPaymita.map((reason: whyPaymita): JSX.Element => (
                        <div className="grid gap-2 bg-white border border-[#cbd5e1] rounded-[1.25rem] p-6 hover:bg-brand-dark-purple group" key={reason.id}>
                            <h3 className="text-brand-light-purple font-semibold text-xl leading-normal group-hover:text-white transition-colors duration-300 ease-in-out">
                                {reason.header}
                            </h3>

                            <p className="text-[#384860] group-hover:text-[#f8f8fa] transition-colors duration-300 ease-in-out">
                                {reason.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <Image className="w-full h-full" src={WhyPaymita} alt="Why choose Paymita" />
        </section>
    );
};

export default WhyChoosePaymita;
