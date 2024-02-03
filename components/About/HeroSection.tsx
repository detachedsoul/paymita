const HeroSection = (): JSX.Element => {
    return (
        <div className="bg-[#e1f3ff] bg-right-top h-[352px] grid place-items-center lg:bg-[url(/about-hero.svg)]">
            <div className="grid gap-4 text-center px-4 lg:px-0">
                <h1 className="text-[2.5rem] text-brand-dark-purple font-bold leading-[110%] lg:text-[3.5rem]">
                    About Us
                </h1>

                <p className="text-brand-light-purple lg:w-3/5 lg:mx-auto">
                    At Paymita, a subsidiary of Mita Technologies Limited (Company Registration No. 7013140), we are on a mission to redefine the way you experience financial transactions. Specializing in bill payments and virtual card issuance, Paymita is your trusted ally in navigating the intricacies of modern finance.
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
