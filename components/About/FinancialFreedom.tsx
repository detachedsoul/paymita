import Link from "next/link";
import Image from "next/image";
import FinancialFreedomImage from "@/assets/img/financial-freedom.png";

const FinancialFreedom = (): JSX.Element => {
    return (
        <section className="grid bg-[#e1f3ff] lg:grid-cols-2 lg:items-center">
            <Image className="order-last lg:order-first lg:h-[32.9375rem]" src={FinancialFreedomImage} alt="Empowering Financial Freedom" />

            <div className="px-4 py-8 grid gap-5 lg:pr-20 lg:pl-10 lg:py-12">
                <h2 className="header">
                    Empowering Financial Freedom
                </h2>

                <p className="text-brand-light-purple">
                    At Paymita, we’re on a mission to redefine your financial experience. Our goal is to simplify how you manage money, ensuring convenience, security, and efficiency in every transaction. From our inception, we envisioned an all-in-one payments app tailored to the needs of a digital-savvy generation.
                </p>
            </div>
        </section>
    );
};

export default FinancialFreedom;
