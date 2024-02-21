"use client";

import { X } from "lucide-react";
import { Dispatch, SetStateAction, useEffect } from "react";

const Modal = ({
    isActive,
    setIsActive,
    message,
    errorStatus
}: { isActive: boolean, setIsActive: Dispatch<SetStateAction<boolean>>, message: string, errorStatus: boolean}) => {
    useEffect(() => {
        isActive ? document.querySelector("body")!.style!.overflow = "hidden" : document.querySelector("body")!.style!.overflow = "auto";
    }, [isActive]);

    return (
        <div
            className={`fixed top-0 left-0 z-[1024] h-full w-full place-items-center bg-slate-900/50 backdrop-blur-[2px] duration-500 ease-linear overflow-y-auto ${isActive ? "animate-fadeIn grid" : "animate-fadeOut hidden gap-4"
            }`}
        >
            <div
                className="h-auto z-[1024] my-8 w-[calc(100%-10%)] grid gap-2 rounded-[12px] bg-[#f2f2f2] text-[#666666] px-6 py-6 min-[500px]:w-1/2 min-[600px]:w-2/5"
            >
                <div className="flex items-center justify-end bg-[#f2f2f2] text-[#666666]">

                    <button className="flex items-center justify-between gap-2" type="button" onClick={() => setIsActive(false)} aria-label="Close modal">
                        <X size={20} />
                    </button>

                </div>

                <div className="grid gap-4">
                    {errorStatus ? (
                        <svg className="mx-auto" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2.25C6.615 2.25 2.25 6.615 2.25 12C2.25 17.385 6.615 21.75 12 21.75C17.385 21.75 21.75 17.385 21.75 12C21.75 6.615 17.385 2.25 12 2.25ZM10.28 9.22C10.2113 9.14631 10.1285 9.08721 10.0365 9.04622C9.94454 9.00523 9.84522 8.98318 9.74452 8.98141C9.64382 8.97963 9.54379 8.99816 9.4504 9.03588C9.35701 9.0736 9.27218 9.12974 9.20096 9.20096C9.12974 9.27218 9.0736 9.35701 9.03588 9.4504C8.99816 9.54379 8.97963 9.64382 8.98141 9.74452C8.98318 9.84522 9.00523 9.94454 9.04622 10.0365C9.08721 10.1285 9.14631 10.2113 9.22 10.28L10.94 12L9.22 13.72C9.14631 13.7887 9.08721 13.8715 9.04622 13.9635C9.00523 14.0555 8.98318 14.1548 8.98141 14.2555C8.97963 14.3562 8.99816 14.4562 9.03588 14.5496C9.0736 14.643 9.12974 14.7278 9.20096 14.799C9.27218 14.8703 9.35701 14.9264 9.4504 14.9641C9.54379 15.0018 9.64382 15.0204 9.74452 15.0186C9.84522 15.0168 9.94454 14.9948 10.0365 14.9538C10.1285 14.9128 10.2113 14.8537 10.28 14.78L12 13.06L13.72 14.78C13.7887 14.8537 13.8715 14.9128 13.9635 14.9538C14.0555 14.9948 14.1548 15.0168 14.2555 15.0186C14.3562 15.0204 14.4562 15.0018 14.5496 14.9641C14.643 14.9264 14.7278 14.8703 14.799 14.799C14.8703 14.7278 14.9264 14.643 14.9641 14.5496C15.0018 14.4562 15.0204 14.3562 15.0186 14.2555C15.0168 14.1548 14.9948 14.0555 14.9538 13.9635C14.9128 13.8715 14.8537 13.7887 14.78 13.72L13.06 12L14.78 10.28C14.8537 10.2113 14.9128 10.1285 14.9538 10.0365C14.9948 9.94454 15.0168 9.84522 15.0186 9.74452C15.0204 9.64382 15.0018 9.54379 14.9641 9.4504C14.9264 9.35701 14.8703 9.27218 14.799 9.20096C14.7278 9.12974 14.643 9.0736 14.5496 9.03588C14.4562 8.99816 14.3562 8.97963 14.2555 8.98141C14.1548 8.98318 14.0555 9.00523 13.9635 9.04622C13.8715 9.08721 13.7887 9.14631 13.72 9.22L12 10.94L10.28 9.22Z" fill="#FF0000" />
                        </svg>
                    ) : (
                        <svg className="mx-auto" width="50" height="50" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="36.5" cy="36" r="36" fill="#23A26D" fillOpacity="0.12" />
                            <path d="M37 19.3333C27.8167 19.3333 20.3334 26.8166 20.3334 36C20.3334 45.1833 27.8167 52.6666 37 52.6666C46.1834 52.6666 53.6667 45.1833 53.6667 36C53.6667 26.8166 46.1834 19.3333 37 19.3333ZM44.9667 32.1666L35.5167 41.6166C35.2834 41.85 34.9667 41.9833 34.6334 41.9833C34.3 41.9833 33.9834 41.85 33.75 41.6166L29.0334 36.9C28.55 36.4166 28.55 35.6166 29.0334 35.1333C29.5167 34.65 30.3167 34.65 30.8 35.1333L34.6334 38.9666L43.2 30.4C43.6834 29.9166 44.4834 29.9166 44.9667 30.4C45.45 30.8833 45.45 31.6666 44.9667 32.1666Z" fill="#23A26D" />
                        </svg>
                    )}

                    <p className={`text-center font-semibold text-lg ${errorStatus === true ? 'text-[#ed544e]' : 'text-[#41d195]'}`}>
                        {message}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
