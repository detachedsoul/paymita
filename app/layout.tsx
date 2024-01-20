import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
    subsets: ["latin"],
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700"
    ]
});

export const metadata: Metadata = {
    title: "Paymita | Home",
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
                <link rel="icon" href="favicon.svg" />
            </head>

            <body className={`${urbanist.className} text-base antialiased`}>
                {children}
            </body>
        </html>
    );
}
