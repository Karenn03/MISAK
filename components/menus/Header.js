"use client";

import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";

export default function Header({ title, items }) {
    return (
        <div className="bg-[#F0F8EB] p-[30px] rounded-[10px] font-work-sans text-[#262626]">
            <h2 className="text-lg font-semibold mb-3">{title}</h2>
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