import { Icon } from "@iconify/react";

export default function SearchBar({ placeholder }) {
    return (
        <div className="flex items-center gap-2 p-2.5 rounded-[10px] font-work-sans border border-[#262626]/50 w-full">
            <Icon
                icon="material-symbols:search"
                width="20"
                height="20"
                className="text-[#262626]/50 shrink-0"
            />
            <input
                type="text"
                placeholder={placeholder}
                className="w-full outline-none text-[12px] sm:text-sm placeholder-[#262626]/50"
            />
        </div>
    );
}