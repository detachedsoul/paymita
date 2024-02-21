"use client";

import Link from "next/link";
import Image from "next/image";
import AirtimeToCashIcon from "@/assets/img/airtime-to-cash-icon.svg";
import BuyDataIcon from "@/assets/img/buy-data-icon.svg";
import PayBillsIcon from "@/assets/img/pay-bills-icon.svg";
import VirtualCardIcon from "@/assets/img/virtual-card-icon.svg";
import EducationIcon from "@/assets/img/education-icon.svg";
import BettingIcon from "@/assets/img/betting-icon.svg";
import { useId } from "react";

type services = {
    id: string,
    icon: string,
    header: string,
    cardBody: string,
    buttonText: string,
    isScrollTrigger?: boolean,
    route?: string
};

const Services = (): JSX.Element => {
    const services: services[] = [
        {
            id: useId(),
            icon: AirtimeToCashIcon,
            header: "Buy Airtime",
            cardBody: "Buy airtime for your mobile phone on the go, ensuring you're always connected without hassle.",
            buttonText: "Get started",
        },
        {
            id: useId(),
            icon: BuyDataIcon,
            header: "Buy Data",
            cardBody: "Never run out of data plan, buy affordable data speedily and seamlessly. E.g MTN, AIRTEL, GLO and 9mobile.",
            buttonText: "Get started",
        },
        {
            id: useId(),
            icon: PayBillsIcon,
            header: "Pay Bills",
            cardBody: "Pay bills without stress, swiftly and seamlessly pay your bills with Paymita. E.g electricity and cable subscription.",
            buttonText: "Get started",
        },
        {
            id: useId(),
            icon: VirtualCardIcon,
            header: "Swift Virtual Card",
            cardBody: "Safely make digital payments with our Visa and Master virtual dollar and Naira cards.",
            buttonText: "Learn more",
            isScrollTrigger: true
        },
        {
            id: useId(),
            icon: EducationIcon,
            header: "Education",
            cardBody: "Generate Result Checker Pins for instant use on the Paymita app (WAEC, NECO, NABTEB, etc).",
            buttonText: "Get started",
        },
        {
            id: useId(),
            icon: BettingIcon,
            header: "Airtime to Cash",
            cardBody: "Convert your airtime to cash easily and get paid instantly.",
            buttonText: "Get started",
        },
    ];

    return (
        <section className="grid gap-16 py-12 bg-[#f8f8fa] scroll-mt-14 lg:scroll-mt-[4.5rem] px-4 lg:px-20" id="services">
            <div className="grid gap-4 text-center w-4/5 mx-auto">
                <h2 className="header">
                    Fast & secure bill payment solution, trusted by thousand of users
                </h2>

                <p className="text-brand-light-purple">
                    Experience the swiftest and most secure bill payment solution, earning the trust of thousands and helping them manage their finance on the go.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service: services): JSX.Element => (
                    <div className="rounded-[1.25rem] bg-white p-8 grid gap-10 shadow-3xl transition-colors duration-300 ease-in-out group/card hover:bg-brand-dark-purple" key={service.id}>
                        <div className="grid gap-4">
                            <Image className="w-12" src={service.icon} alt={service.header} />

                            <h3 className="text-brand-dark-purple font-semibold text-xl group-hover/card:text-white lg:text-2xl">
                                {service.header}
                            </h3>

                            <p className="leading-[140%] group-hover/card:text-[#f8f8fa]">
                                {service.cardBody}
                            </p>
                        </div>

                        <div className="inline-block w-auto">
                            {service.isScrollTrigger ? (
                                <button className="rounded-[2.75rem] border border-[rgba(42,_44,_96,_0.40)] inline-flex py-3 px-4 items-center gap-4 font-medium text-sm text-brand-dark-purple w-auto hover:bg-brand-dark-purple hover:text-white duration-300 ease-in-out transition-colors group group-hover/card:border-[#f8f8fa] group-hover/card:text-[#f8f8fa] hover:group-hover/card:bg-[linear-gradient(95deg,_#67B3E4_-5.03%,_#2A2C60_101.09%)]" type="button" onClick={() => {
                                    document.querySelector("#virtual-card")?.scrollIntoView({
                                        behavior: "smooth"
                                    });
                                }}>
                                    {service.buttonText}

                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="group-hover:fill-white group-hover/card:fill-[#f8f8fa] transition-colors duration-300 ease-in-out" d="M8.00016 1.33333C4.32683 1.33333 1.3335 4.32667 1.3335 8C1.3335 11.6733 4.32683 14.6667 8.00016 14.6667C11.6735 14.6667 14.6668 11.6733 14.6668 8C14.6668 4.32667 11.6735 1.33333 8.00016 1.33333ZM9.86016 8.35333L7.50683 10.7067C7.40683 10.8067 7.28016 10.8533 7.1535 10.8533C7.02683 10.8533 6.90016 10.8067 6.80016 10.7067C6.60683 10.5133 6.60683 10.1933 6.80016 10L8.80016 8L6.80016 6C6.60683 5.80667 6.60683 5.48667 6.80016 5.29333C6.9935 5.1 7.3135 5.1 7.50683 5.29333L9.86016 7.64667C10.0602 7.84 10.0602 8.16 9.86016 8.35333Z" fill="#2a2c60" />
                                    </svg>
                                </button>
                            ) : (
                                <Link className="rounded-[2.75rem] border border-[rgba(42,_44,_96,_0.40)] inline-flex py-3 px-4 items-center gap-4 font-medium text-sm text-brand-dark-purple w-auto hover:bg-brand-dark-purple hover:text-white duration-300 ease-in-out transition-colors group group-hover/card:border-[#f8f8fa] group-hover/card:text-[#f8f8fa] hover:group-hover/card:bg-[linear-gradient(95deg,_#67B3E4_-5.03%,_#2A2C60_101.09%)]" href="">
                                    {service.buttonText}

                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="group-hover:fill-white group-hover/card:fill-[#f8f8fa] transition-colors duration-300 ease-in-out" d="M8.00016 1.33333C4.32683 1.33333 1.3335 4.32667 1.3335 8C1.3335 11.6733 4.32683 14.6667 8.00016 14.6667C11.6735 14.6667 14.6668 11.6733 14.6668 8C14.6668 4.32667 11.6735 1.33333 8.00016 1.33333ZM9.86016 8.35333L7.50683 10.7067C7.40683 10.8067 7.28016 10.8533 7.1535 10.8533C7.02683 10.8533 6.90016 10.8067 6.80016 10.7067C6.60683 10.5133 6.60683 10.1933 6.80016 10L8.80016 8L6.80016 6C6.60683 5.80667 6.60683 5.48667 6.80016 5.29333C6.9935 5.1 7.3135 5.1 7.50683 5.29333L9.86016 7.64667C10.0602 7.84 10.0602 8.16 9.86016 8.35333Z" fill="#2a2c60" />
                                    </svg>
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
