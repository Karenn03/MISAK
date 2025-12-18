"use client";

import { Icon } from "@iconify/react";

export default function Table({ columns, data, actions }) {
    return (
        <div className="w-full mx-auto">
            <div className="font-work-sans border border-[#262626]/10 rounded-lg transition-all duration-300 hover:shadow-sm hover:-translate-y-1 overflow-x-auto">
                <table className="w-full min-w-max table-auto text-sm">
                    <thead className="bg-[#262626]/5 text-[#262626] text-center font-medium border-b border-[#262626]/10 rounded-t-[10px] h-15.5">
                        <tr>
                            {columns.map((col, idx) => (
                                <th key={idx} className="p-2.5 whitespace-nowrap">
                                    {col.label}
                                </th>
                            ))}
                            {actions && <th className="p-2.5">Acciones</th>}
                        </tr>
                    </thead>
                    <tbody className="text-[#3C3833] text-left divide-y divide-[#262626]/10">
                        {data.map((row, idx) => (
                            <tr key={idx} className="transition-all duration-200 hover:bg-[#262626]/3 h-12.5">
                                {columns.map((col, i) => (
                                    <td key={i} className="px-5 py-2.5 max-w-2xl">
                                        {row[col.field] ?? "---"}
                                    </td>
                                ))}
                                {actions && (
                                    <td className="px-5 py-2.5 whitespace-nowrap">
                                        <div className="flex justify-center items-center gap-2">
                                            {actions.map((action, i) => (
                                                <Icon
                                                    key={i}
                                                    icon={action.icon}
                                                    width="24"
                                                    height="24"
                                                    onClick={() => action.onClick(row)}
                                                    className={`${action.className} cursor-pointer duration-150`}
                                                />
                                            ))}
                                        </div>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                    <tfoot className="bg-[#262626]/5 text-[#262626]/40 text-center text-sm font-medium border-t border-[#262626]/10 rounded-b-[10px] h-15.5">
                        <tr>
                            <td colSpan={columns.length + (actions ? 1 : 0)} className="p-2.5">
                                <div className="flex justify-between items-center px-4">
                                    <span>Página 1 de 3</span>
                                    <div className="flex gap-3">
                                        <button className="flex items-center gap-2.5 px-3.5 py-2 rounded-md border border-[#262626]/20 hover:bg-[#F0EFED] duration-150">
                                            <Icon icon="ooui:previous-ltr" width="14" height="14" />
                                            Anterior
                                        </button>
                                        <button className="flex items-center gap-2.5 px-3.5 py-2 rounded-md border border-[#262626]/20 hover:bg-[#F0EFED] duration-150">
                                            Siguiente
                                            <Icon icon="ooui:next-ltr" width="14" height="14" />
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}