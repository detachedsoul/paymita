"use client";

import Link from "next/link";
import Image from "next/image";
import DownloadDocumentIcon from "@/assets/img/document-download.svg";
import { usePathname } from "next/navigation";

type navLinks = {
    id: number,
    routeName: string,
    route: string;
};

const NavLinks = (): JSX.Element => {
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

    return (
        <nav className="absolute top-full bg-red-500 left-0 w-full lg:w-auto lg:static">
            <ul className="flex flex-col gap-4 lg:gap-8 lg:flex-row">
                {navLinks.map((navLink: navLinks): JSX.Element => (
                    <li key={navLink.id}>
                        <Link className={`transition-colors duration-300 ease-in-out py-2 px-3 block border-b-[1.5px] ${pathname === navLink.route ? 'text-brand-dark-purple border-brand-dark-purple font-medium' : 'text-brand-light-purple border-transparent'} hover:text-brand-dark-purple hover:border-brand-dark-purple lg:p-2`} href={navLink.route}>
                            {navLink.routeName}
                        </Link>
                    </li>
                ))}

                <li>
                    <Link className="py-3 w-auto px-8 rounded-[2.75rem] bg-[linear-gradient(95deg,_#67B3E4_-5.03%,_#2A2C60_101.09%)] text-white text-sm font-medium hover:bg-[linear-gradient(95deg,_#2A2C60_-5.03%,_#67B3E4_101.09%)] transition-all duration-300 ease-in-out flex items-center gap-2 lg:hidden" href="">
                        <Image src={DownloadDocumentIcon} alt="" />

                        Download App
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavLinks;
