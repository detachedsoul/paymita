const HeroSection = (): JSX.Element => {
    return (
        <div className="bg-white bg-right-top h-[352px] grid place-items-center bg-[url(/about-hero.svg)]">
            <div className="grid gap-4 text-center md:w-4/5 md:mx-auto px-4 lg:px-0 lg:w-full lg:mx-0">
                <h1 className="text-[2.5rem] text-brand-dark-purple font-bold leading-[110%] lg:text-[3.5rem]">
                    Contact Us
                </h1>

                <p className="text-brand-light-purple lg:w-3/5 lg:mx-auto">
                    Have questions, feedback, or need assistance? We’re here to help! Feel free to reach out to us through the following channels:
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
