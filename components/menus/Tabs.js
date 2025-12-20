"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

export default function Tabs({ tabs }) {
    const pathname = usePathname();

    return (
        <nav className="h-11 flex justify-between">
            {tabs.map((tab) => {
                const isActive = pathname.startsWith(tab.href);

                return (
                    <Link
                        key={tab.href}
                        href={tab.href}
                        className={`flex gap-2 px-4 py-1 text-sm font-medium
                            ${isActive
                                ? "border-b-2 border-[#39A900] text-[#39A900]"
                                : "text-[#262626] hover:text-black"
                            }
                        `}
                    >
                        {tab.icon && (
                            <Icon
                                icon={tab.icon}
                                className="text-lg"
                            />
                        )}
                        <span>{tab.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}
