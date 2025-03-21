"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type SelectProps = {
    options: string[];
    selectedRegion: string;
    setSelectedRegion: (region: string) => void;
}

const Select = ( {options, selectedRegion, setSelectedRegion}: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onSelect = (region: string) => {
        setSelectedRegion(region);
    }

    return (
        <div className="w-1/3 relative">
            <div>
                <button type="button" aria-expanded={isOpen} aria-controls="region-menu" aria-label="Open region menu" aria-haspopup="listbox"  
                    onClick={() => setIsOpen(!isOpen)} className="w-full rounded-lg border-gray-4 mb-4 px-4 py-2 shadow-sm focus:ring-2 focus:ring-gray-200 focus:outline-none flex items-center justify-between ">
                    {selectedRegion}
                    <ChevronDownIcon className={`size-4 ${isOpen ? 'transform rotate-180' : ''}`}  />
                </button>
            </div>
            {isOpen && <div className="absolute bg-white rounded-lg shadow-lg z-10 w-full border-gray-4 overflow-hidden" id="region-menu" role="listbox" aria-expanded={isOpen} tabIndex={0} aria-activedescendant={`option-${focusedIndex}  `}>
                {options.map((option,  index) => (
                    <div id={`option-${index}`}  key={option} className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={() => {onSelect(option); setIsOpen(false)}}>
                        {option}
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default Select
