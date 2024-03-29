"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/img/logo.svg";
import useFetch from "@/hooks/useFetch";

const fetcher = async (url: string) => {
    const res = await fetch(url);

    if (!res.ok) {
        const errorMessage = await res.text();

        return JSON.parse(errorMessage).error.description;
    }

    const { data } = await res.json();

    return data;
};

const Footer = (): JSX.Element => {
    // Fetch contact page details
    const { data, error, isLoading } = useFetch(`https://api.paymita.co/misc/siteInfo`, fetcher);

    return (
        <footer className="bg-white px-4 lg:px-20">
            <div className="border-b-[0.1875rem] border-brand-dark-purple/[0.06] pt-16 pb-12 grid grid-cols-2 items-start justify-between gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-16">
                <div className="grid gap-6 col-span-2 md:col-span-3 lg:col-span-1">
                    <Image className="h-8" src={Logo} alt="Paymita" />

                    <p className="text-[#384860] leading-[160%]">
                        Paymita, a subsidiary of Mita Technologies Limited (Company Registration No. 7013140), We are a bill payment and virtual card issuance company. We provide swift and secure services through our authorized partners.
                    </p>
                </div>

                <div className="grid gap-6">
                    <h3 className="text-xl font-bold leading-[130%] text-brand-light-purple">
                        Company
                    </h3>

                    <div className="grid gap-4">
                        <Link className="text-brand-light-purple/75 text-sm transition-colors duration-300 ease-in-out hover:font-bold hover:text-brand-dark-purple" href="/about">
                            About
                        </Link>

                        <Link className="text-brand-light-purple/75 text-sm transition-colors duration-300 ease-in-out hover:font-bold hover:text-brand-dark-purple" href="/contact">
                            Contact
                        </Link>

                        <Link className="text-brand-light-purple/75 text-sm transition-colors duration-300 ease-in-out hover:font-bold hover:text-brand-dark-purple" href="/blog">
                            Blog
                        </Link>

                        <Link className="text-brand-light-purple/75 text-sm transition-colors duration-300 ease-in-out hover:font-bold hover:text-brand-dark-purple" href="/faqs">
                            FAQs
                        </Link>
                    </div>
                </div>

                <div className="grid gap-6">
                    <h3 className="text-xl font-bold leading-[130%] text-brand-light-purple">
                        Product
                    </h3>

                    <div className="grid gap-4">
                        <Link className="text-brand-light-purple/75 text-sm transition-colors duration-300 ease-in-out hover:font-bold hover:text-brand-dark-purple" href="/services/airtime-purchase/">
                            Buy airtime
                        </Link>

                        <Link className="text-brand-light-purple/75 text-sm transition-colors duration-300 ease-in-out hover:font-bold hover:text-brand-dark-purple" href="/services/pay-bills/">
                            Pay bills
                        </Link>

                        <Link className="text-brand-light-purple/75 text-sm transition-colors duration-300 ease-in-out hover:font-bold hover:text-brand-dark-purple" href="/services/education-payment/">
                            Educational payment
                        </Link>
                    </div>
                </div>

                <div className="grid gap-6">
                    <h3 className="text-xl font-bold leading-[130%] text-brand-light-purple">
                        Legal
                    </h3>

                    <div className="grid gap-4">
                        <Link className="text-brand-light-purple/75 text-sm transition-colors duration-300 ease-in-out hover:font-bold hover:text-brand-dark-purple" href="/legal/terms-and-conditions">
                            Terms & conditions
                        </Link>

                        <Link className="text-brand-light-purple/75 text-sm transition-colors duration-300 ease-in-out hover:font-bold hover:text-brand-dark-purple" href="/legal/privacy-policy">
                            Privacy policy
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-8 pt-12 pb-16 justify-between items-center lg:flex-row">
                <div className="flex items-center gap-10">
                    <Link className="text-[#4f627d] text-sm transition-colors duration-300 ease-in-out hover:font-bold hover:text-brand-dark-purple" href="/legal/terms-and-conditions">
                        Terms
                    </Link>

                    <Link className="text-[#4f627d] text-sm transition-colors duration-300 ease-in-out hover:font-bold hover:text-brand-dark-purple" href="/legal/privacy-policy">
                        Privacy policy
                    </Link>

                    <Link className="text-[#4f627d] text-sm transition-colors duration-300 ease-in-out hover:font-bold hover:text-brand-dark-purple" href="/legal/cookies">
                        Cookies
                    </Link>
                </div>

                <div className="flex items-center gap-[0.9375rem]">
                    {isLoading && (
                        <>
                            <div className="w-10 h-10 rounded-full bg-brand-light-blue animate-pulse"></div>
                            <div className="w-10 h-10 rounded-full bg-brand-light-blue animate-pulse"></div>
                            <div className="w-10 h-10 rounded-full bg-brand-light-blue animate-pulse"></div>
                            <div className="w-10 h-10 rounded-full bg-brand-light-blue animate-pulse"></div>
                        </>
                    )}

                    {data?.socials && (
                        <>
                            <Link className="group" href={data?.socials ? data?.socials?.linkedin : ""} title="Connect with us on LinkedIn">
                                <svg className="group-hover:fill-[#4f627d] transition-colors duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="37" height="38" viewBox="0 0 37 38" fill="none">
                                    <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M18.5 36.5981C28.165 36.5981 36 28.7631 36 19.0981C36 9.43316 28.165 1.59814 18.5 1.59814C8.83502 1.59814 1 9.43316 1 19.0981C1 28.7631 8.83502 36.5981 18.5 36.5981Z" stroke="#4f627d" strokeWidth="1.5" />
                                    <path d="M14.4835 15.5652C15.3029 15.5652 15.9671 14.901 15.9671 14.0817C15.9671 13.2624 15.3029 12.5981 14.4835 12.5981C13.6642 12.5981 13 13.2624 13 14.0817C13 14.901 13.6642 15.5652 14.4835 15.5652Z" fill="#4f627d" />
                                    <path d="M15.7198 16.5562H13.2473C13.1108 16.5562 13 16.6669 13 16.8034V24.2212C13 24.3576 13.1108 24.4684 13.2473 24.4684H15.7198C15.8563 24.4684 15.9671 24.3576 15.9671 24.2212V16.8034C15.9671 16.6669 15.8563 16.5562 15.7198 16.5562Z" fill="#4f627d" />
                                    <path d="M23.088 16.1448C22.0313 15.7828 20.7094 16.1008 19.9167 16.671C19.8895 16.5646 19.7926 16.4855 19.6774 16.4855H17.2048C17.0683 16.4855 16.9575 16.5963 16.9575 16.7328V24.1505C16.9575 24.287 17.0683 24.3978 17.2048 24.3978H19.6774C19.8138 24.3978 19.9246 24.287 19.9246 24.1505V18.8196C20.3242 18.4754 20.839 18.3657 21.2603 18.5447C21.6688 18.7173 21.9027 19.1386 21.9027 19.6999V24.1505C21.9027 24.287 22.0135 24.3978 22.1499 24.3978H24.6225C24.759 24.3978 24.8698 24.287 24.8698 24.1505V19.2019C24.8416 17.1699 23.8857 16.4178 23.088 16.1448Z" fill="#4f627d" />
                                </svg>
                            </Link>

                            <Link className="group" href={data?.socials ? data?.socials?.facebook : ""} title="Connect with us on Facebook">
                                <svg className="group-hover:fill-[#4f627d] transition-colors duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="37" height="38" viewBox="0 0 37 38" fill="none">
                                    <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M18.5 36.5981C28.165 36.5981 36 28.7631 36 19.0981C36 9.43316 28.165 1.59814 18.5 1.59814C8.83502 1.59814 1 9.43316 1 19.0981C1 28.7631 8.83502 36.5981 18.5 36.5981Z" stroke="#4f627d" strokeWidth="1.5" />
                                    <path d="M20.0932 14.6187H21.7016C21.8495 14.6187 21.9696 14.5055 21.9696 14.3661V12.8505C21.9696 12.7111 21.8495 12.5979 21.7016 12.5979H20.0932C18.4677 12.5979 17.1445 13.8442 17.1445 15.3765V17.1447H15.2681C15.1201 17.1447 15 17.2578 15 17.3973V18.9128C15 19.0523 15.1201 19.1654 15.2681 19.1654H17.1445V24.47C17.1445 24.6094 17.2646 24.7226 17.4126 24.7226H19.0209C19.1689 24.7226 19.289 24.6094 19.289 24.47V19.1654H21.1655C21.2807 19.1654 21.3831 19.0957 21.4201 18.9927L21.9562 17.4771C21.9836 17.4003 21.9696 17.3154 21.9192 17.2492C21.8683 17.1836 21.7879 17.1447 21.7016 17.1447H19.289V15.3765C19.289 14.9587 19.6498 14.6187 20.0932 14.6187Z" fill="#4f627d" />
                                </svg>
                            </Link>

                            <Link className="group" href={data?.socials ? data?.socials?.twitter : ""} title="Connect with us on X">
                                <svg className="group-hover:fill-[#4f627d] transition-colors duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="37" height="38" viewBox="0 0 37 38" fill="none">
                                    <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M18.5 36.5981C28.165 36.5981 36 28.7631 36 19.0981C36 9.43316 28.165 1.59814 18.5 1.59814C8.83502 1.59814 1 9.43316 1 19.0981C1 28.7631 8.83502 36.5981 18.5 36.5981Z" stroke="#4f627d" strokeWidth="1.5" />
                                    <path d="M24.2202 15.8628C24.139 15.771 24.0081 15.748 23.9007 15.8046C23.8339 15.8397 23.7083 15.8859 23.5592 15.9315C23.7473 15.6743 23.8985 15.3863 23.9653 15.1274C23.9942 15.0159 23.952 14.8983 23.8601 14.8318C23.7682 14.7658 23.6458 14.7658 23.5539 14.8318C23.4091 14.9356 22.7102 15.2478 22.2683 15.3489C21.2696 14.4492 20.1074 14.3558 18.8992 15.0813C17.9171 15.671 17.7034 16.8703 17.7451 17.6012C15.4971 17.3786 14.0998 16.1574 13.3132 15.1467C13.2582 15.0758 13.1695 15.0384 13.0861 15.0439C12.9985 15.0505 12.9194 15.1005 12.8745 15.178C12.5026 15.8238 12.3995 16.5377 12.5774 17.2429C12.6747 17.6276 12.8446 17.9667 13.0418 18.2415C12.9472 18.1937 12.8558 18.1338 12.7698 18.0624C12.6907 17.9953 12.5801 17.9827 12.4866 18.0272C12.3936 18.0728 12.3343 18.1695 12.3343 18.2756C12.3343 19.4864 13.0706 20.2943 13.7583 20.7164C13.6472 20.7027 13.5312 20.6774 13.4142 20.6406C13.3138 20.6092 13.2048 20.6406 13.1353 20.7219C13.0658 20.8027 13.0493 20.9181 13.0926 21.0165C13.4789 21.8953 14.2109 22.4999 15.1166 22.7192C14.3258 23.1968 13.2673 23.4309 12.298 23.3161C12.1724 23.2979 12.0527 23.3798 12.0132 23.504C11.9736 23.6282 12.0255 23.7645 12.1361 23.8283C13.6066 24.6774 14.936 24.9808 16.0849 24.9808C17.7568 24.9808 19.0472 24.3389 19.8327 23.8019C21.9503 22.3564 23.2701 19.7612 23.0863 17.4391C23.4256 17.1813 23.9333 16.7054 24.248 16.1937C24.3132 16.0904 24.3014 15.9541 24.2202 15.8628Z" fill="#4f627d" />
                                </svg>
                            </Link>

                            <Link className="group" href={data?.socials ? data?.socials?.instagram : ""} title="Connect with us on Instagram">
                                <svg className="group-hover:fill-[#4f627d] transition-colors duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="37" height="38" viewBox="0 0 37 38" fill="none">
                                    <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M18.5 36.5981C28.165 36.5981 36 28.7631 36 19.0981C36 9.43316 28.165 1.59814 18.5 1.59814C8.83502 1.59814 1 9.43316 1 19.0981C1 28.7631 8.83502 36.5981 18.5 36.5981Z" stroke="#4f627d" strokeWidth="1.5" />
                                    <path d="M23.9727 16.1163C23.9818 16.4436 23.9886 16.7345 23.9932 16.9891C23.9977 17.2436 24 17.78 24 18.5981C24 19.4163 23.9977 19.9527 23.9932 20.2072C23.9886 20.4618 23.9818 20.7481 23.9727 21.0663C23.9545 21.3936 23.9205 21.6709 23.8705 21.8981C23.8205 22.1254 23.7591 22.3345 23.6864 22.5254C23.6136 22.7254 23.5227 22.9118 23.4136 23.0845C23.3045 23.2572 23.1636 23.4254 22.9909 23.5891C22.8273 23.7618 22.6591 23.9027 22.4864 24.0118C22.3136 24.1209 22.1273 24.2118 21.9273 24.2845C21.7364 24.3572 21.5273 24.4186 21.3 24.4686C21.0727 24.5186 20.8 24.5527 20.4818 24.5709C20.1545 24.58 19.8636 24.5868 19.6091 24.5913C19.3545 24.5959 18.8182 24.5981 18 24.5981C17.1818 24.5981 16.6455 24.5959 16.3909 24.5913C16.1364 24.5868 15.85 24.58 15.5318 24.5709C15.2045 24.5527 14.9273 24.5186 14.7 24.4686C14.4727 24.4186 14.2636 24.3572 14.0727 24.2845C13.8727 24.2118 13.6864 24.1209 13.5136 24.0118C13.3409 23.9027 13.1727 23.7618 13.0091 23.5891C12.8364 23.4254 12.6955 23.2572 12.5864 23.0845C12.4773 22.9118 12.3864 22.7254 12.3136 22.5254C12.2409 22.3345 12.1795 22.1254 12.1295 21.8981C12.0795 21.6709 12.0455 21.3981 12.0273 21.08C12.0182 20.7527 12.0114 20.4618 12.0068 20.2072C12.0023 19.9527 12 19.4163 12 18.5981C12 17.78 12.0023 17.2436 12.0068 16.9891C12.0114 16.7345 12.0182 16.4481 12.0273 16.13C12.0455 15.8027 12.0795 15.5254 12.1295 15.2981C12.1795 15.0709 12.2409 14.8618 12.3136 14.6709C12.3864 14.4709 12.4773 14.2845 12.5864 14.1118C12.6955 13.9391 12.8364 13.7709 13.0091 13.6072C13.1727 13.4345 13.3409 13.2936 13.5136 13.1845C13.6864 13.0754 13.8727 12.9845 14.0727 12.9118C14.2636 12.8391 14.4727 12.7777 14.7 12.7277C14.9273 12.6777 15.2 12.6436 15.5182 12.6254C15.8455 12.6163 16.1364 12.6095 16.3909 12.605C16.6455 12.6004 17.1818 12.5981 18 12.5981C18.8182 12.5981 19.3545 12.6004 19.6091 12.605C19.8636 12.6095 20.15 12.6163 20.4682 12.6254C20.7955 12.6436 21.0727 12.6777 21.3 12.7277C21.5273 12.7777 21.7364 12.8391 21.9273 12.9118C22.1273 12.9845 22.3136 13.0754 22.4864 13.1845C22.6591 13.2936 22.8273 13.4345 22.9909 13.6072C23.1636 13.7709 23.3045 13.9391 23.4136 14.1118C23.5227 14.2845 23.6136 14.4709 23.6864 14.6709C23.7591 14.8618 23.8205 15.0709 23.8705 15.2981C23.9205 15.5254 23.9545 15.7981 23.9727 16.1163ZM22.8818 21.0254C22.9 20.7072 22.9114 20.4231 22.9159 20.1731C22.9205 19.9231 22.9227 19.3981 22.9227 18.5981C22.9227 17.7981 22.9205 17.2731 22.9159 17.0231C22.9114 16.7731 22.9 16.4891 22.8818 16.1709C22.8727 15.88 22.8477 15.6481 22.8068 15.4754C22.7659 15.3027 22.7227 15.1618 22.6773 15.0527C22.6227 14.9163 22.5614 14.7936 22.4932 14.6845C22.425 14.5754 22.3364 14.4709 22.2273 14.3709C22.1273 14.2618 22.0227 14.1731 21.9136 14.105C21.8045 14.0368 21.6818 13.9754 21.5455 13.9209C21.4364 13.8754 21.2955 13.8322 21.1227 13.7913C20.95 13.7504 20.7182 13.7254 20.4273 13.7163C20.1091 13.6981 19.825 13.6868 19.575 13.6822C19.325 13.6777 18.8 13.6754 18 13.6754C17.2 13.6754 16.675 13.6777 16.425 13.6822C16.175 13.6868 15.8909 13.6981 15.5727 13.7163C15.2818 13.7254 15.05 13.7504 14.8773 13.7913C14.7045 13.8322 14.5636 13.8754 14.4545 13.9209C14.3182 13.9754 14.1955 14.0368 14.0864 14.105C13.9773 14.1731 13.8727 14.2618 13.7727 14.3709C13.6636 14.4709 13.575 14.5754 13.5068 14.6845C13.4386 14.7936 13.3773 14.9163 13.3227 15.0527C13.2773 15.1618 13.2341 15.3027 13.1932 15.4754C13.1523 15.6481 13.1273 15.88 13.1182 16.1709C13.1 16.4891 13.0886 16.7731 13.0841 17.0231C13.0795 17.2731 13.0773 17.7981 13.0773 18.5981C13.0773 19.3981 13.0795 19.9231 13.0841 20.1731C13.0886 20.4231 13.1 20.7072 13.1182 21.0254C13.1273 21.3163 13.1523 21.5481 13.1932 21.7209C13.2341 21.8936 13.2773 22.0345 13.3227 22.1436C13.3773 22.28 13.4386 22.4027 13.5068 22.5118C13.575 22.6209 13.6636 22.7254 13.7727 22.8254C13.8727 22.9345 13.9773 23.0231 14.0864 23.0913C14.1955 23.1595 14.3182 23.2209 14.4545 23.2754C14.5636 23.3209 14.7045 23.3641 14.8773 23.405C15.05 23.4459 15.2818 23.4709 15.5727 23.48C15.8909 23.4981 16.175 23.5095 16.425 23.5141C16.675 23.5186 17.2 23.5209 18 23.5209C18.8 23.5209 19.325 23.5186 19.575 23.5141C19.825 23.5095 20.1091 23.4981 20.4273 23.48C20.7182 23.4709 20.95 23.4459 21.1227 23.405C21.2955 23.3641 21.4364 23.3209 21.5455 23.2754C21.6818 23.2209 21.8045 23.1595 21.9136 23.0913C22.0227 23.0231 22.1273 22.9345 22.2273 22.8254C22.3364 22.7254 22.425 22.6209 22.4932 22.5118C22.5614 22.4027 22.6227 22.28 22.6773 22.1436C22.7227 22.0345 22.7659 21.8936 22.8068 21.7209C22.8477 21.5481 22.8727 21.3163 22.8818 21.0254ZM18 15.5163C18.4273 15.5163 18.8273 15.5981 19.2 15.7618C19.5727 15.9163 19.9 16.1345 20.1818 16.4163C20.4636 16.6981 20.6818 17.0254 20.8364 17.3981C21 17.7709 21.0818 18.1709 21.0818 18.5981C21.0818 19.0254 21 19.4254 20.8364 19.7981C20.6818 20.1709 20.4636 20.4981 20.1818 20.78C19.9 21.0618 19.5727 21.28 19.2 21.4345C18.8273 21.5981 18.4273 21.68 18 21.68C17.5727 21.68 17.1727 21.5981 16.8 21.4345C16.4273 21.28 16.1 21.0618 15.8182 20.78C15.5364 20.4981 15.3182 20.1709 15.1636 19.7981C15 19.4254 14.9182 19.0254 14.9182 18.5981C14.9182 18.1709 15 17.7709 15.1636 17.3981C15.3182 17.0254 15.5364 16.6981 15.8182 16.4163C16.1 16.1345 16.4273 15.9163 16.8 15.7618C17.1727 15.5981 17.5727 15.5163 18 15.5163ZM18 20.6027C18.5545 20.6027 19.0273 20.4072 19.4182 20.0163C19.8091 19.6254 20.0045 19.1527 20.0045 18.5981C20.0045 18.0436 19.8091 17.5709 19.4182 17.18C19.0273 16.7891 18.5545 16.5936 18 16.5936C17.4455 16.5936 16.9727 16.7891 16.5818 17.18C16.1909 17.5709 15.9955 18.0436 15.9955 18.5981C15.9955 19.1527 16.1909 19.6254 16.5818 20.0163C16.9727 20.4072 17.4455 20.6027 18 20.6027ZM21.9 15.23C21.9455 15.4209 21.9159 15.6004 21.8114 15.7686C21.7068 15.9368 21.5591 16.0436 21.3682 16.0891C21.1773 16.1345 20.9977 16.105 20.8295 16.0004C20.6614 15.8959 20.5545 15.7481 20.5091 15.5572C20.4636 15.3663 20.4932 15.1868 20.5977 15.0186C20.7023 14.8504 20.85 14.7436 21.0409 14.6981C21.2318 14.6436 21.4114 14.6709 21.5795 14.78C21.7477 14.8891 21.8545 15.0391 21.9 15.23Z" fill="#4f627d" />
                                </svg>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
