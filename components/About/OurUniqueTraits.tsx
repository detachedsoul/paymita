type uniquesTraits = {
    id: number,
    header: string,
    text: string;
};

const OurUniqueTraits = (): JSX.Element => {
    const uniquesTraits: uniquesTraits[] = [
        {
            id: 1,
            header: "Swift and Secure Services",
            text: "We understand the importance of your time and the significance of safeguarding your financial transactions. Our cutting-edge technology ensures that your payments are not only quick but also protected by robust security measures."
        },
        {
            id: 2,
            header: "Authorized Partnerships",
            text: "Paymita operates exclusively through a network of authorized partners, ensuring that every transaction you make is supported by reputable collaborations."
        },
        {
            id: 3,
            header: "Bill Payment Solutions",
            text: "Simplify your bill payment experience with Paymita. Our user-friendly platform enables you to effortlessly manage and settle your bills, from utilities to subscriptions, all in one place."
        },
        {
            id: 4,
            header: "Virtual Card Issuance",
            text: "In a world that demands secure online transactions, Paymita introduces cutting-edge virtual card issuance services. Our virtual cards are designed to provide you with a secure means of making online purchases, blending convenience with top-tier security features."
        }
    ];

    return (
        <section className="grid gap-8 bg-white px-4 py-8 lg:p-20">
            <h2 className="header">
                What Sets Us Apart
            </h2>

            <div className="grid gap-4 items-start lg:gap-8 lg:grid-cols-2">
                {uniquesTraits.map((trait: uniquesTraits): JSX.Element => (
                    <div className="grid gap-2" key={trait.id}>
                        <h3 className="text-brand-light-purple font-semibold text-xl leading-normal group-hover:text-white transition-colors duration-300 ease-in-out">
                            {trait.header}
                        </h3>

                        <p className="text-[#384860] group-hover:text-[#f8f8fa] transition-colors duration-300 ease-in-out">
                            {trait.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurUniqueTraits;
