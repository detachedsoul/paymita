"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

type navLinks = {
    id: number,
    routeName: string,
    route: string;
};

const NavLinks = (): JSX.Element => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const pathname = usePathname();

    const navLinks: navLinks[] = [
        {
            id: 1,
            routeName: "Home",
            route: "/"
        },
        {
            id: 2,
            routeName: "About Us",
            route: "/about"
        },
        {
            id: 3,
            routeName: "Services",
            route: "/services"
        },
        {
            id: 4,
            routeName: "Contact Us",
            route: "/contact"
        },
        {
            id: 5,
            routeName: "FAQs",
            route: "/faqs"
        },
    ];

    const handleNavToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <nav className={`absolute top-full bg-white border-b border-[#f5f8fa] p-4 w-full left-0 ${isActive ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out lg:border-0 lg:translate-x-0 lg:w-auto lg:static lg:p-0`}>
                <ul className="flex flex-col gap-2 lg:gap-8 lg:flex-row lg:justify-between">
                    {navLinks.map((navLink: navLinks): JSX.Element => (
                        <li key={navLink.id}>
                            <Link className={`transition-colors duration-300 ease-in-out p-4 block border-b-[1.5px] ${pathname === navLink.route ? 'font-bold text-brand-light-blue lg:text-brand-dark-purple lg:border-brand-dark-purple' : 'text-brand-light-purple border-transparent hover:text-brand-light-blue hover:font-bold lg:font-medium'} lg:hover:text-brand-dark-purple lg:hover:border-brand-dark-purple lg:p-2`} href={navLink.route}>
                                {navLink.routeName}
                            </Link>
                        </li>
                    ))}

                    <li className="lg:hidden">
                        <Link className="py-4 w-auto px-8 rounded-[2.75rem] bg-[linear-gradient(95deg,_#67B3E4_-5.03%,_#2A2C60_101.09%)] text-white text-sm font-medium hover:bg-[linear-gradient(95deg,_#2A2C60_-5.03%,_#67B3E4_101.09%)] transition-all duration-300 ease-in-out flex items-center gap-2" href="">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.6665 6.79337H11.7398C10.1598 6.79337 8.87317 5.50671 8.87317 3.92671V2.00004C8.87317 1.63337 8.57317 1.33337 8.2065 1.33337H5.37984C3.3265 1.33337 1.6665 2.66671 1.6665 5.04671V10.9534C1.6665 13.3334 3.3265 14.6667 5.37984 14.6667H10.6198C12.6732 14.6667 14.3332 13.3334 14.3332 10.9534V7.46004C14.3332 7.09337 14.0332 6.79337 13.6665 6.79337ZM8.1865 10.52L6.85317 11.8534C6.8065 11.9 6.7465 11.94 6.6865 11.96C6.6265 11.9867 6.5665 12 6.49984 12C6.43317 12 6.37317 11.9867 6.31317 11.96C6.25984 11.94 6.2065 11.9 6.1665 11.86C6.15984 11.8534 6.15317 11.8534 6.15317 11.8467L4.81984 10.5134C4.6265 10.32 4.6265 10 4.81984 9.80671C5.01317 9.61337 5.33317 9.61337 5.5265 9.80671L5.99984 10.2934V7.50004C5.99984 7.22671 6.2265 7.00004 6.49984 7.00004C6.77317 7.00004 6.99984 7.22671 6.99984 7.50004V10.2934L7.47984 9.81337C7.67317 9.62004 7.99317 9.62004 8.1865 9.81337C8.37984 10.0067 8.37984 10.3267 8.1865 10.52Z" fill="white" />
                                <path d="M11.62 5.87329C12.2533 5.87995 13.1333 5.87995 13.8866 5.87995C14.2666 5.87995 14.4666 5.43329 14.2 5.16662C13.24 4.19995 11.52 2.45995 10.5333 1.47329C10.26 1.19995 9.78662 1.38662 9.78662 1.76662V4.09329C9.78662 5.06662 10.6133 5.87329 11.62 5.87329Z" fill="white" />
                            </svg>

                            Download App
                        </Link>
                    </li>
                </ul>
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