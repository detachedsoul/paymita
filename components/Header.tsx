import NavLinks from "@/components/NavLinks";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/img/logo.svg";
import DownloadDocumentIcon from "@/assets/img/document-download.svg";
import { MenuIcon } from "lucide-react";

const Header = (): JSX.Element => {
    return (
        <header className="bg-white flex items-center justify-between gap-4 p-4 border-b border-[#f5f8fa sticky top-0">
            <Link href="/">
                <Image src={Logo} alt="Paymita" />
            </Link>

            <NavLinks />

            <Link className="hidden py-3 px-8 rounded-[2.75rem] bg-[linear-gradient(95deg,_#67B3E4_-5.03%,_#2A2C60_101.09%)] text-white text-sm font-medium hover:bg-[linear-gradient(95deg,_#2A2C60_-5.03%,_#67B3E4_101.09%)] transition-all duration-300 ease-in-out lg:flex lg:items-center lg:gap-2" href="">
                <Image src={DownloadDocumentIcon} alt="" />

                Download App
            </Link>

            <button className="lg:hidden" type="button" aria-label="Toggle navbar navigation links">
                <MenuIcon />
            </button>
        </header>
    );
};

export default Header;
