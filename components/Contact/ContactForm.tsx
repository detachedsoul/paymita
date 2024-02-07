"use client";

import Modal from "@/components/Modal";
import { useState, ChangeEvent } from "react";

interface FormData {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    message: string;
}

const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
};

const ContactForm = (): JSX.Element => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [errorStatus, setErrorStatus] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const [formData, setFormData] = useState<FormData>({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = new FormData();

        for (const field in formData) {
            if (!formData[field as keyof FormData]) {
                setIsActive(true);
                setMessage(`${field} is required.`);
                setErrorStatus(true);

                return;
            }

            form.append(field, formData[field as keyof FormData]);
        }

        if (!isValidEmail(formData.email)) {
            setIsActive(true);
            setMessage("Invalid email format.");
            setErrorStatus(true);

            return;
        }

        try {
            const request = await fetch(`https://api.paymita.co/_frontend/contactForm`, {
                method: 'POST',
                body: JSON.stringify(form),
                redirect: "follow"
            });

            const response = await request.json();

            setIsActive(true);
            setMessage(response.message);
            setErrorStatus(response.error);

            if (response.error == false) {
                setFormData({
                    first_name: "",
                    last_name: "",
                    email: "",
                    phone: "",
                    message: ""
                });
            }
        } catch (error: any) {
            setMessage(error.message);
            setErrorStatus(true);
        } finally {
            setIsActive(true);
        }
    };

    return (
        <>
            <form className="grid gap-6 bg-white px-4 py-8 md:grid-cols-2 lg:py-20 lg:pr-20" onSubmit={handleSubmit}>
                <label className="grid gap-2" htmlFor="first-name">
                    <span className="text-[#384860] text-lg">
                        First Name
                    </span>

                    <input className="input-form" type="text" placeholder="First name" id="first-name" name="first_name" value={formData.first_name} onChange={handleChange} required />
                </label>

                <label className="grid gap-2" htmlFor="last-name">
                    <span className="text-[#384860] text-lg">
                        Last Name
                    </span>

                    <input className="input-form" type="text" placeholder="Last name" id="last-name" name="last_name" value={formData.last_name} onChange={handleChange} required />
                </label>

                <label className="grid gap-2" htmlFor="email-address">
                    <span className="text-[#384860] text-lg">
                        Email Address
                    </span>

                    <input className="input-form" type="email" placeholder="Email address" id="email-address" name="email" value={formData.email} onChange={handleChange} required />
                </label>

                <label className="grid gap-2" htmlFor="phone-number">
                    <span className="text-[#384860] text-lg">
                        Phone Number
                    </span>

                    <input className="input-form" type="text" placeholder="Email phone number" id="phone-number" name="phone" inputMode="numeric" value={formData.phone} onChange={handleChange} required />
                </label>

                <label className="grid gap-2 md:col-span-2" htmlFor="message">
                    <span className="text-[#384860] text-lg">
                        Message
                    </span>

                    <textarea className="input-form" placeholder="Message content" id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required />
                </label>

                <div className="inline-block">
                    <button className="py-4 w-auto px-8 rounded-[2.75rem] bg-[linear-gradient(95deg,_#67B3E4_-5.03%,_#2A2C60_101.09%)] text-white text-sm font-medium hover:bg-[linear-gradient(95deg,_#2A2C60_-5.03%,_#67B3E4_101.09%)] transition-all duration-300 ease-in-out" type="submit">
                        Send Message
                    </button>
                </div>
            </form>

            <Modal isActive={isActive} setIsActive={setIsActive} message={message} errorStatus={errorStatus} />
        </>
    );
};

export default ContactForm;
