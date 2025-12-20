import Tabs from "@/components/menus/Tabs";

export const TABS = [
    {
        label: "Cargos (IDP)",
        href: "/module2/cargos",
        icon: "streamline-sharp:workspace-desk",
    },
    {
        label: "Funcionarios",
        href: "/module2/funcionarios",
        icon: "healthicons:city-worker-outline",
    },
    {
        label: "Novedades",
        href: "/module2/novedades",
        icon: "quill:warning-alt",
    },
    {
        label: "Concursos",
        href: "/module2/concursos",
        icon: "ep:trophy-base",
    },
    {
        label: "Perfilación",
        href: "/module2/perfilacion",
        icon: "carbon:user-profile",
    },
];

export default function ProvisionLayout({ children }) {
    return (
        <section className="flex flex-col">
            <div className="-mx-10 -mt-6 bg-[#f3faee] px-10 pt-6">
                <Tabs tabs={TABS} />
            </div>
            <div className="mt-6">
                {children}
            </div>
        </section>
    );
}
