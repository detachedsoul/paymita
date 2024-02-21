import Link from "next/link";
import React from "react";

const Breadcrumbs = ({ children }: {children: React.ReactNode}): JSX.Element => {
    return (
        <div className="bg-white flex items-center gap-4 p-4 lg:px-20">
            <Link className="text-brand-light-blue font-bold underline-offset-4 hover:underline hover:decoration-wavy hover:text-brand-light-purple hover:decoration-brand-dark-purple" href="/">
                Home
            </Link>

            /

            {children}
        </div>
    );
};

export default Breadcrumbs;
