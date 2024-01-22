"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "lucide-react";

const Accordion = ({ question, answer }: {question: string, answer: JSX.Element}): JSX.Element => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const toggleAccordion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`rounded border border-[#f7f7f7] bg-white shadow-[0px_30px_44px_20px_rgba(231,_231,_231,_0.35)] py-4 px-6 grid ${isExpanded ? 'gap-4' : 'gap-0'}`}>
            <button
                className="text-brand-dark-purple font-semibold leading-[170%] text-lg flex items-center gap-10 justify-between text-left w-full"
                type="button"
                onClick={toggleAccordion}
            >
                {question}

                {isExpanded ? <MinusIcon /> : <PlusIcon />}
            </button>

            <div className={`transition-all ease-linear overflow-hidden ${isExpanded ? 'max-h-[500px]' : 'max-h-0'}`}>
                {answer}
            </div>
        </div>
    );
};

export default Accordion;
