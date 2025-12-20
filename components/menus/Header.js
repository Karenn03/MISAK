"use client";

import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";

export default function Header({ title, items }) {
    return (
        <div className="bg-[#F0F8EB] py-6.5 px-8 rounded-[10px] font-work-sans text-[#262626] mb-4">
            <h2 className="text-base font-semibold mb-2">{title}</h2>
            <Breadcrumbs className="text-sm tracking-wide">
                {items.map((item, idx) => {
                    const isLast = idx === items.length - 1;
                    return (
                        <BreadcrumbItem
                            key={idx}
                            href={isLast ? undefined : item.href}
                            className={isLast ? "font-bold" : ""}
                        >
                            {item.label}
                        </BreadcrumbItem>
                    );
                })}
            </Breadcrumbs>
        </div>
    );
}