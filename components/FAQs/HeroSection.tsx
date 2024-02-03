const HeroSection = (): JSX.Element => {
    return (
        <div className="bg-brand-dark-purple bg-right-top h-[352px] grid place-items-center bg-[url(/about-hero.svg)]">
            <div className="grid gap-4 text-center px-4 lg:px-0">
                <h1 className="text-[2.5rem] text-white font-bold leading-[110%] lg:text-[3.5rem]">
                    Frequently Asked Questions
                </h1>

                <p className="text-[#f8f8fA] lg:w-3/5 lg:mx-auto">
                    Here are some basic questions and answers to help you get started.
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
