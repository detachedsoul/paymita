"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useId, useEffect } from "react";
import { MenuIcon, XIcon } from "lucide-react";

type navLinks = {
    id: string,
    routeName: string,
    route: string,
    isDropdown?: boolean
};

const NavLinks = (): JSX.Element => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [dropdownIsActive, setDropdownIsActive] = useState<boolean>(false);

    const pathname = usePathname();

    const navLinks: navLinks[] = [
        {
            id: useId(),
            routeName: "Home",
            route: "/"
        },
        {
            id: useId(),
            routeName: "About Us",
            route: "/about/"
        },
        {
            id: useId(),
            routeName: "Services",
            route: "/services/",
            isDropdown: true
        },
        {
            id: useId(),
            routeName: "Contact Us",
            route: "/contact/"
        },
        {
            id: useId(),
            routeName: "FAQs",
            route: "/faqs/"
        },
    ];

    const dropdownLinks: navLinks[] = [
        {
            id: useId(),
            routeName: "Data Subscription",
            route: "/services/data-subscription/"
        },
        {
            id: useId(),
            routeName: "Airtime Purchase",
            route: "/services/airtime-purchase/"
        },
        {
            id: useId(),
            routeName: "Pay Bills",
            route: "/services/pay-bills/"
        },
        {
            id: useId(),
            routeName: "Education Payments",
            route: "/services/education-payment/"
        },
        {
            id: useId(),
            routeName: "Swift Virtual Card",
            route: "/services/virtual-card/"
        },
        {
            id: useId(),
            routeName: "Betting",
            route: "/services/betting/"
        },
    ];

    const handleNavToggle = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        setIsActive(false);
        setDropdownIsActive(false);
    }, [pathname]);

    return (
        <>
            <nav className={`absolute top-full bg-white border-b border-[#f5f8fa] p-4 w-full left-0 ${isActive ? 'translate-x-0' : '-translate-x-[200%]'} transition-transform duration-500 ease-in-out md:w-1/2 md:left-1/4 lg:border-0 lg:translate-x-0 lg:w-auto lg:static lg:p-0`}>
                <div className="flex flex-col gap-2 lg:gap-8 lg:flex-row lg:justify-between">
                    <ul className="flex flex-col gap-2 lg:gap-8 lg:flex-row lg:justify-between">
                        {navLinks.map((navLink: navLinks): JSX.Element => (
                            <li className="relative" key={navLink.id}>
                                {!navLink.isDropdown ? (
                                    <Link className={`transition-colors duration-300 ease-in-out p-4 block border-b-[1.5px] ${pathname === navLink.route && !dropdownIsActive ? 'font-bold text-[#3366ff] border-[#3366ff]' : 'text-brand-light-purple border-transparent hover:text-[#3366ff] hover:font-bold lg:font-medium'} hover:text-[#3366ff] hover:border-[#3366ff] lg:p-2`} href={navLink.route}>
                                        {navLink.routeName}
                                    </Link>
                                ) : (
                                    <button className={`transition-colors duration-300 ease-in-out p-4 block w-full text-left border-b-[1.5px] ${dropdownIsActive || pathname.split("/")[1] === 'services' ? 'font-bold text-[#3366ff] border-[#3366ff]' : 'text-brand-light-purple border-transparent hover:text-[#3366ff] hover:font-bold lg:font-medium'} hover:text-[#3366ff] hover:border-[#3366ff] lg:p-2`} type="button" onClick={() => setDropdownIsActive(!dropdownIsActive)}>
                                        {navLink.routeName}
                                    </button>
                                )}

                                {navLink.isDropdown && (
                                    <ul className={`bg-white grid gap-4 overflow-y-auto absolute top-[calc(100%+0.5rem)] w-full max-h-[30vh] ${dropdownIsActive ? 'translate-y-0' : '-translate-y-[500%]'} shadow z-50 p-4 rounded-lg custom-scrollbar lg:hidden transition-transform ease-in-out duration-500`}>
                                        {dropdownLinks.map((dropdownLink: navLinks): JSX.Element => (
                                            <li key={dropdownLink.id}>
                                                <Link className={`transition-colors ease-in-out duration-300 font-bold block rounded-lg p-2 ${pathname === dropdownLink.route ? 'bg-[linear-gradient(95deg,_#67B3E4_-5.03%,_#2A2C60_101.09%)] text-white' : 'hover:bg-[linear-gradient(95deg,_#67B3E4_-5.03%,_#2A2C60_101.09%)] hover:text-white'}`} href={dropdownLink.route}>
                                                    {dropdownLink.routeName}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                    <ul className={`hidden bg-white lg:grid gap-4 overflow-y-auto absolute top-[calc(100%+1.5rem)] w-full max-h-[80vh] shadow z-50 p-4 rounded-lg ${dropdownIsActive ? 'translate-y-0' : '-translate-y-[500%]'} lg:w-3/5 lg:left-[20%] custom-scrollbar transition-transform ease-in-out duration-500`}>
                        {dropdownLinks.map((dropdownLink: navLinks): JSX.Element => (
                            <li key={dropdownLink.id}>
                                <Link className={`transition-colors ease-in-out duration-300 font-bold block rounded-lg p-2 ${pathname === dropdownLink.route ? 'bg-[linear-gradient(95deg,_#67B3E4_-5.03%,_#2A2C60_101.09%)] text-white' : 'hover:bg-[linear-gradient(95deg,_#2A2C60_-5.03%,_#67B3E4_101.09%)] hover:text-white'}`} href={dropdownLink.route}>
                                    {dropdownLink.routeName}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link className="py-4 w-auto px-8 rounded-[2.75rem] bg-[linear-gradient(95deg,_#67B3E4_-5.03%,_#2A2C60_101.09%)] text-white text-sm font-medium hover:bg-[linear-gradient(95deg,_#2A2C60_-5.03%,_#67B3E4_101.09%)] transition-all duration-300 ease-in-out inline-flex items-center gap-2 lg:hidden" href="">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.6665 6.79337H11.7398C10.1598 6.79337 8.87317 5.50671 8.87317 3.92671V2.00004C8.87317 1.63337 8.57317 1.33337 8.2065 1.33337H5.37984C3.3265 1.33337 1.6665 2.66671 1.6665 5.04671V10.9534C1.6665 13.3334 3.3265 14.6667 5.37984 14.6667H10.6198C12.6732 14.6667 14.3332 13.3334 14.3332 10.9534V7.46004C14.3332 7.09337 14.0332 6.79337 13.6665 6.79337ZM8.1865 10.52L6.85317 11.8534C6.8065 11.9 6.7465 11.94 6.6865 11.96C6.6265 11.9867 6.5665 12 6.49984 12C6.43317 12 6.37317 11.9867 6.31317 11.96C6.25984 11.94 6.2065 11.9 6.1665 11.86C6.15984 11.8534 6.15317 11.8534 6.15317 11.8467L4.81984 10.5134C4.6265 10.32 4.6265 10 4.81984 9.80671C5.01317 9.61337 5.33317 9.61337 5.5265 9.80671L5.99984 10.2934V7.50004C5.99984 7.22671 6.2265 7.00004 6.49984 7.00004C6.77317 7.00004 6.99984 7.22671 6.99984 7.50004V10.2934L7.47984 9.81337C7.67317 9.62004 7.99317 9.62004 8.1865 9.81337C8.37984 10.0067 8.37984 10.3267 8.1865 10.52Z" fill="white" />
                            <path d="M11.62 5.87329C12.2533 5.87995 13.1333 5.87995 13.8866 5.87995C14.2666 5.87995 14.4666 5.43329 14.2 5.16662C13.24 4.19995 11.52 2.45995 10.5333 1.47329C10.26 1.19995 9.78662 1.38662 9.78662 1.76662V4.09329C9.78662 5.06662 10.6133 5.87329 11.62 5.87329Z" fill="white" />
                        </svg>

                        Download App
                    </Link>
                </div>
            </nav>

            <button className="lg:hidden bg-brand-dark-purple p-[0.28569rem] rounded-sm text-[#e4faee]" type="button" aria-label="Toggle navbar navigation links" onClick={handleNavToggle}>
                {isActive ? (
                    <XIcon />
                ) : (
                    <MenuIcon />
                )}
            </button>
        </>
    );
};

export default NavLinks;
