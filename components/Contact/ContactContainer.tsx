import Link from "next/link";
import ContactForm from "@/components/Contact/ContactForm";

const ContactContainer = (): JSX.Element => {
    return (
        <section className="grid gap-8 lg:grid-cols-2">
            <div className="grid gap-8 px-4 py-8 bg-brand-dark-purple order-last md:grid-cols-2 lg:grid-cols-1 lg:order-first lg:p-20">
                <div className="grid gap-2 text-white md:col-span-2 lg:col-span-1">
                    <h2 className="font-semibold text-2xl text-brand-light-blue leading-normal">
                        Have any question or feedback?
                    </h2>

                    <p>
                        Feel free to reach out to us. We are always available to help.
                    </p>
                </div>

                <div className="grid gap-2 text-white">
                    <h3 className="font-semibold text-xl leading-normal">
                        Office address
                    </h3>

                    <p className="text-sm">
                        SHOP 22 ODUA COMPLEX IDIAPE, OPPOSITE NNPC, IWO ROAD IBADAN
                    </p>
                </div>

                <div className="grid gap-2 text-white md:ml-auto lg:ml-0">
                    <h3 className="font-semibold text-xl leading-normal">
                        Contact address
                    </h3>

                    <div className="grid gap-4">
                        <p className="text-sm">
                            <Link className=" text-brand-light-blue font-bold underline underline-offset-4 decoration-wavy hover:text-[#3366ff] hover:decoration-[#3366ff]" href="mailto:support@paymita.co" target="_blank" rel="noopener noreferrer">
                                support@paymita.co
                            </Link>
                        </p>

                        <p className="text-sm">
                            <Link className=" text-brand-light-blue font-bold underline underline-offset-4 decoration-wavy hover:text-[#3366ff] hover:decoration-[#3366ff]" href="tel:+2348161445534" target="_blank" rel="noopener noreferrer">
                                +234 816 144 5534
                            </Link>
                        </p>
                    </div>
                </div>

                <div className="grid gap-2 text-white">
                    <h3 className="font-semibold text-xl leading-normal">
                        Follow us on social media
                    </h3>

                    <div className="flex items-center gap-4">
                        <Link className="group" href="" title="Connect with us on LinkedIn">
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="transition-colors ease-in-out duration-300 group-hover:fill-brand-dark-purple" d="M34.5849 17.5C34.5849 26.9357 26.9357 34.5849 17.5 34.5849C8.06428 34.5849 0.415109 26.9357 0.415109 17.5C0.415109 8.06428 8.06428 0.415109 17.5 0.415109C26.9357 0.415109 34.5849 8.06428 34.5849 17.5Z" fill="white" stroke="white" strokeWidth="0.830218"/>
                                <path className="group-hover:fill-white" d="M13.4835 13.9671C14.3029 13.9671 14.9671 13.3029 14.9671 12.4835C14.9671 11.6642 14.3029 11 13.4835 11C12.6642 11 12 11.6642 12 12.4835C12 13.3029 12.6642 13.9671 13.4835 13.9671Z" fill="#2A2C60"/>
                                <path className="group-hover:fill-white" d="M14.7198 14.958H12.2473C12.1108 14.958 12 15.0688 12 15.2053V22.623C12 22.7595 12.1108 22.8703 12.2473 22.8703H14.7198C14.8563 22.8703 14.9671 22.7595 14.9671 22.623V15.2053C14.9671 15.0688 14.8563 14.958 14.7198 14.958Z" fill="#2A2C60"/>
                                <path className="group-hover:fill-white" d="M22.0876 14.5466C21.0308 14.1847 19.7089 14.5026 18.9162 15.0728C18.889 14.9665 18.7921 14.8874 18.6769 14.8874H16.2043C16.0678 14.8874 15.957 14.9981 15.957 15.1346V22.5524C15.957 22.6889 16.0678 22.7996 16.2043 22.7996H18.6769C18.8134 22.7996 18.9241 22.6889 18.9241 22.5524V17.2215C19.3237 16.8773 19.8385 16.7675 20.2598 16.9465C20.6683 17.1191 20.9022 17.5404 20.9022 18.1017V22.5524C20.9022 22.6889 21.013 22.7996 21.1495 22.7996H23.622C23.7585 22.7996 23.8693 22.6889 23.8693 22.5524V17.6037C23.8411 15.5718 22.8852 14.8196 22.0876 14.5466Z" fill="#2A2C60"/>
                            </svg>
                        </Link>

                        <Link className="group" href="" title="Connect with us on Facebook">
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="transition-colors ease-in-out duration-300 group-hover:fill-brand-dark-purple" d="M34.5849 17.5C34.5849 26.9357 26.9357 34.5849 17.5 34.5849C8.06428 34.5849 0.415109 26.9357 0.415109 17.5C0.415109 8.06428 8.06428 0.415109 17.5 0.415109C26.9357 0.415109 34.5849 8.06428 34.5849 17.5Z" fill="white" stroke="white" strokeWidth="0.830218" />
                                <path className="group-hover:fill-white" d="M19.0932 13.0205H20.7016C20.8495 13.0205 20.9696 12.9074 20.9696 12.7679V11.2524C20.9696 11.1129 20.8495 10.9998 20.7016 10.9998H19.0932C17.4677 10.9998 16.1445 12.2461 16.1445 13.7783V15.5465H14.2681C14.1201 15.5465 14 15.6597 14 15.7991V17.3147C14 17.4541 14.1201 17.5673 14.2681 17.5673H16.1445V22.8719C16.1445 23.0113 16.2646 23.1245 16.4126 23.1245H18.0209C18.1689 23.1245 18.289 23.0113 18.289 22.8719V17.5673H20.1655C20.2807 17.5673 20.3831 17.4976 20.4201 17.3945L20.9562 15.8789C20.9836 15.8021 20.9696 15.7173 20.9192 15.6511C20.8683 15.5854 20.7879 15.5465 20.7016 15.5465H18.289V13.7783C18.289 13.3605 18.6498 13.0205 19.0932 13.0205Z" fill="#2A2C60" />
                            </svg>
                        </Link>

                        <Link className="group" href="" title="Connect with us on X">
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="transition-colors ease-in-out duration-300 group-hover:fill-brand-dark-purple" d="M34.5849 17.5C34.5849 26.9357 26.9357 34.5849 17.5 34.5849C8.06428 34.5849 0.415109 26.9357 0.415109 17.5C0.415109 8.06428 8.06428 0.415109 17.5 0.415109C26.9357 0.415109 34.5849 8.06428 34.5849 17.5Z" fill="white" stroke="white" strokeWidth="0.830218" />
                                <path className="group-hover:fill-white" d="M23.2202 14.2647C23.139 14.1729 23.0081 14.1498 22.9007 14.2064C22.8339 14.2416 22.7083 14.2878 22.5592 14.3334C22.7473 14.0762 22.8985 13.7882 22.9653 13.5293C22.9942 13.4177 22.952 13.3001 22.8601 13.2336C22.7682 13.1677 22.6458 13.1677 22.5539 13.2336C22.4091 13.3375 21.7102 13.6497 21.2683 13.7508C20.2696 12.8511 19.1074 12.7577 17.8992 13.4831C16.9171 14.0729 16.7034 15.2721 16.7451 16.0031C14.4971 15.7805 13.0998 14.5593 12.3132 13.5485C12.2582 13.4776 12.1695 13.4403 12.0861 13.4458C11.9985 13.4524 11.9194 13.5024 11.8745 13.5799C11.5026 14.2257 11.3995 14.9396 11.5774 15.6447C11.6747 16.0295 11.8446 16.3686 12.0418 16.6434C11.9472 16.5956 11.8558 16.5357 11.7698 16.4642C11.6907 16.3972 11.5801 16.3845 11.4866 16.429C11.3936 16.4747 11.3343 16.5714 11.3343 16.6775C11.3343 17.8882 12.0706 18.6962 12.7583 19.1183C12.6472 19.1045 12.5312 19.0792 12.4142 19.0424C12.3138 19.0111 12.2048 19.0424 12.1353 19.1238C12.0658 19.2046 12.0493 19.32 12.0926 19.4184C12.4789 20.2972 13.2109 20.9017 14.1166 21.121C13.3258 21.5986 12.2673 21.8328 11.298 21.7179C11.1724 21.6998 11.0527 21.7817 11.0132 21.9059C10.9736 22.0301 11.0255 22.1664 11.1361 22.2301C12.6066 23.0793 13.936 23.3827 15.0849 23.3827C16.7568 23.3827 18.0472 22.7407 18.8327 22.2038C20.9503 20.7583 22.2701 18.163 22.0863 15.841C22.4256 15.5832 22.9333 15.1072 23.248 14.5955C23.3132 14.4922 23.3014 14.3559 23.2202 14.2647Z" fill="#2A2C60" />
                            </svg>
                        </Link>

                        <Link className="group" href="" title="Connect with us on Instagram">
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="transition-colors ease-in-out duration-300 group-hover:fill-brand-dark-purple" d="M34.5849 17.5C34.5849 26.9357 26.9357 34.5849 17.5 34.5849C8.06428 34.5849 0.415109 26.9357 0.415109 17.5C0.415109 8.06428 8.06428 0.415109 17.5 0.415109C26.9357 0.415109 34.5849 8.06428 34.5849 17.5Z" fill="white" stroke="white" strokeWidth="0.830218" />
                                <path className="group-hover:fill-white" d="M22.9727 14.5182C22.9818 14.8455 22.9886 15.1364 22.9932 15.3909C22.9977 15.6455 23 16.1818 23 17C23 17.8182 22.9977 18.3545 22.9932 18.6091C22.9886 18.8636 22.9818 19.15 22.9727 19.4682C22.9545 19.7955 22.9205 20.0727 22.8705 20.3C22.8205 20.5273 22.7591 20.7364 22.6864 20.9273C22.6136 21.1273 22.5227 21.3136 22.4136 21.4864C22.3045 21.6591 22.1636 21.8273 21.9909 21.9909C21.8273 22.1636 21.6591 22.3045 21.4864 22.4136C21.3136 22.5227 21.1273 22.6136 20.9273 22.6864C20.7364 22.7591 20.5273 22.8205 20.3 22.8705C20.0727 22.9205 19.8 22.9545 19.4818 22.9727C19.1545 22.9818 18.8636 22.9886 18.6091 22.9932C18.3545 22.9977 17.8182 23 17 23C16.1818 23 15.6455 22.9977 15.3909 22.9932C15.1364 22.9886 14.85 22.9818 14.5318 22.9727C14.2045 22.9545 13.9273 22.9205 13.7 22.8705C13.4727 22.8205 13.2636 22.7591 13.0727 22.6864C12.8727 22.6136 12.6864 22.5227 12.5136 22.4136C12.3409 22.3045 12.1727 22.1636 12.0091 21.9909C11.8364 21.8273 11.6955 21.6591 11.5864 21.4864C11.4773 21.3136 11.3864 21.1273 11.3136 20.9273C11.2409 20.7364 11.1795 20.5273 11.1295 20.3C11.0795 20.0727 11.0455 19.8 11.0273 19.4818C11.0182 19.1545 11.0114 18.8636 11.0068 18.6091C11.0023 18.3545 11 17.8182 11 17C11 16.1818 11.0023 15.6455 11.0068 15.3909C11.0114 15.1364 11.0182 14.85 11.0273 14.5318C11.0455 14.2045 11.0795 13.9273 11.1295 13.7C11.1795 13.4727 11.2409 13.2636 11.3136 13.0727C11.3864 12.8727 11.4773 12.6864 11.5864 12.5136C11.6955 12.3409 11.8364 12.1727 12.0091 12.0091C12.1727 11.8364 12.3409 11.6955 12.5136 11.5864C12.6864 11.4773 12.8727 11.3864 13.0727 11.3136C13.2636 11.2409 13.4727 11.1795 13.7 11.1295C13.9273 11.0795 14.2 11.0455 14.5182 11.0273C14.8455 11.0182 15.1364 11.0114 15.3909 11.0068C15.6455 11.0023 16.1818 11 17 11C17.8182 11 18.3545 11.0023 18.6091 11.0068C18.8636 11.0114 19.15 11.0182 19.4682 11.0273C19.7955 11.0455 20.0727 11.0795 20.3 11.1295C20.5273 11.1795 20.7364 11.2409 20.9273 11.3136C21.1273 11.3864 21.3136 11.4773 21.4864 11.5864C21.6591 11.6955 21.8273 11.8364 21.9909 12.0091C22.1636 12.1727 22.3045 12.3409 22.4136 12.5136C22.5227 12.6864 22.6136 12.8727 22.6864 13.0727C22.7591 13.2636 22.8205 13.4727 22.8705 13.7C22.9205 13.9273 22.9545 14.2 22.9727 14.5182ZM21.8818 19.4273C21.9 19.1091 21.9114 18.825 21.9159 18.575C21.9205 18.325 21.9227 17.8 21.9227 17C21.9227 16.2 21.9205 15.675 21.9159 15.425C21.9114 15.175 21.9 14.8909 21.8818 14.5727C21.8727 14.2818 21.8477 14.05 21.8068 13.8773C21.7659 13.7045 21.7227 13.5636 21.6773 13.4545C21.6227 13.3182 21.5614 13.1955 21.4932 13.0864C21.425 12.9773 21.3364 12.8727 21.2273 12.7727C21.1273 12.6636 21.0227 12.575 20.9136 12.5068C20.8045 12.4386 20.6818 12.3773 20.5455 12.3227C20.4364 12.2773 20.2955 12.2341 20.1227 12.1932C19.95 12.1523 19.7182 12.1273 19.4273 12.1182C19.1091 12.1 18.825 12.0886 18.575 12.0841C18.325 12.0795 17.8 12.0773 17 12.0773C16.2 12.0773 15.675 12.0795 15.425 12.0841C15.175 12.0886 14.8909 12.1 14.5727 12.1182C14.2818 12.1273 14.05 12.1523 13.8773 12.1932C13.7045 12.2341 13.5636 12.2773 13.4545 12.3227C13.3182 12.3773 13.1955 12.4386 13.0864 12.5068C12.9773 12.575 12.8727 12.6636 12.7727 12.7727C12.6636 12.8727 12.575 12.9773 12.5068 13.0864C12.4386 13.1955 12.3773 13.3182 12.3227 13.4545C12.2773 13.5636 12.2341 13.7045 12.1932 13.8773C12.1523 14.05 12.1273 14.2818 12.1182 14.5727C12.1 14.8909 12.0886 15.175 12.0841 15.425C12.0795 15.675 12.0773 16.2 12.0773 17C12.0773 17.8 12.0795 18.325 12.0841 18.575C12.0886 18.825 12.1 19.1091 12.1182 19.4273C12.1273 19.7182 12.1523 19.95 12.1932 20.1227C12.2341 20.2955 12.2773 20.4364 12.3227 20.5455C12.3773 20.6818 12.4386 20.8045 12.5068 20.9136C12.575 21.0227 12.6636 21.1273 12.7727 21.2273C12.8727 21.3364 12.9773 21.425 13.0864 21.4932C13.1955 21.5614 13.3182 21.6227 13.4545 21.6773C13.5636 21.7227 13.7045 21.7659 13.8773 21.8068C14.05 21.8477 14.2818 21.8727 14.5727 21.8818C14.8909 21.9 15.175 21.9114 15.425 21.9159C15.675 21.9205 16.2 21.9227 17 21.9227C17.8 21.9227 18.325 21.9205 18.575 21.9159C18.825 21.9114 19.1091 21.9 19.4273 21.8818C19.7182 21.8727 19.95 21.8477 20.1227 21.8068C20.2955 21.7659 20.4364 21.7227 20.5455 21.6773C20.6818 21.6227 20.8045 21.5614 20.9136 21.4932C21.0227 21.425 21.1273 21.3364 21.2273 21.2273C21.3364 21.1273 21.425 21.0227 21.4932 20.9136C21.5614 20.8045 21.6227 20.6818 21.6773 20.5455C21.7227 20.4364 21.7659 20.2955 21.8068 20.1227C21.8477 19.95 21.8727 19.7182 21.8818 19.4273ZM17 13.9182C17.4273 13.9182 17.8273 14 18.2 14.1636C18.5727 14.3182 18.9 14.5364 19.1818 14.8182C19.4636 15.1 19.6818 15.4273 19.8364 15.8C20 16.1727 20.0818 16.5727 20.0818 17C20.0818 17.4273 20 17.8273 19.8364 18.2C19.6818 18.5727 19.4636 18.9 19.1818 19.1818C18.9 19.4636 18.5727 19.6818 18.2 19.8364C17.8273 20 17.4273 20.0818 17 20.0818C16.5727 20.0818 16.1727 20 15.8 19.8364C15.4273 19.6818 15.1 19.4636 14.8182 19.1818C14.5364 18.9 14.3182 18.5727 14.1636 18.2C14 17.8273 13.9182 17.4273 13.9182 17C13.9182 16.5727 14 16.1727 14.1636 15.8C14.3182 15.4273 14.5364 15.1 14.8182 14.8182C15.1 14.5364 15.4273 14.3182 15.8 14.1636C16.1727 14 16.5727 13.9182 17 13.9182ZM17 19.0045C17.5545 19.0045 18.0273 18.8091 18.4182 18.4182C18.8091 18.0273 19.0045 17.5545 19.0045 17C19.0045 16.4455 18.8091 15.9727 18.4182 15.5818C18.0273 15.1909 17.5545 14.9955 17 14.9955C16.4455 14.9955 15.9727 15.1909 15.5818 15.5818C15.1909 15.9727 14.9955 16.4455 14.9955 17C14.9955 17.5545 15.1909 18.0273 15.5818 18.4182C15.9727 18.8091 16.4455 19.0045 17 19.0045ZM20.9 13.6318C20.9455 13.8227 20.9159 14.0023 20.8114 14.1705C20.7068 14.3386 20.5591 14.4455 20.3682 14.4909C20.1773 14.5364 19.9977 14.5068 19.8295 14.4023C19.6614 14.2977 19.5545 14.15 19.5091 13.9591C19.4636 13.7682 19.4932 13.5886 19.5977 13.4205C19.7023 13.2523 19.85 13.1455 20.0409 13.1C20.2318 13.0455 20.4114 13.0727 20.5795 13.1818C20.7477 13.2909 20.8545 13.4409 20.9 13.6318Z" fill="#2A2C60" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            <ContactForm />
        </section>
    );
};

export default ContactContainer;
