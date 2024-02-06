const ContactForm = (): JSX.Element => {
    return (
        <form className="grid gap-6 bg-white px-4 py-8 md:grid-cols-2 lg:py-20 lg:pr-20">
            <label className="grid gap-2" htmlFor="first-name">
                <span className="text-[#384860] text-lg">
                    First Name
                </span>

                <input className="input-form" type="text" placeholder="First name" id="first-name" />
            </label>

            <label className="grid gap-2" htmlFor="last-name">
                <span className="text-[#384860] text-lg">
                    Last Name
                </span>

                <input className="input-form" type="text" placeholder="Last name" id="last-name" />
            </label>

            <label className="grid gap-2" htmlFor="email-address">
                <span className="text-[#384860] text-lg">
                    Email Address
                </span>

                <input className="input-form" type="email" placeholder="Email address" id="email-address" />
            </label>

            <label className="grid gap-2" htmlFor="phone-number">
                <span className="text-[#384860] text-lg">
                    Phone Number
                </span>

                <input className="input-form" type="text" placeholder="Email phone number" id="phone-number" />
            </label>

            <label className="grid gap-2 md:col-span-2" htmlFor="message">
                <span className="text-[#384860] text-lg">
                    Message
                </span>

                <textarea className="input-form" placeholder="Message content" id="message" rows={5} />
            </label>

            <div className="inline-block">
                <button className="py-4 w-auto px-8 rounded-[2.75rem] bg-[linear-gradient(95deg,_#67B3E4_-5.03%,_#2A2C60_101.09%)] text-white text-sm font-medium hover:bg-[linear-gradient(95deg,_#2A2C60_-5.03%,_#67B3E4_101.09%)] transition-all duration-300 ease-in-out" type="submit">
                    Send Message
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
