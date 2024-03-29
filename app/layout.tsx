import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
    display: "swap",
    subsets: ["latin"],
    variable: '--font-urban',
});

export const metadata: Metadata = {
    title: "Paymita | Your Gateway to Effortless & Swift Payments.",
    description: "Paymita - Your Gateway to Effortless & Swift Payments.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" />
                <meta
                    property="og:image"
                    content="https://paymita.co/favicon.png"
                />
            </head>

            <body className={`${urbanist.variable} font-urban text-base leading-[160%] text-[#384860] antialiased selection:bg-brand-dark-purple selection:text-white scroll-smooth`}>
                <Header />

                {children}

                <Footer />
            </body>
        </html>
    );
}
