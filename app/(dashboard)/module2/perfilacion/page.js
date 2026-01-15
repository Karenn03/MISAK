"use client";

import ActionButton from "@/components/buttons/ActionButton";
import SearchBar from "@/components/inputs/SearchBar";
import Header from "@/components/menus/Header";
import Table from "@/components/tables/Table";

const Perfilacion = () => {
    const breadcrumbItems = [
        { href: "/home", label: "Inicio" },
        { href: "/module2/cargos", label: "Provisión" },
        { href: "#", label: "Perfilación" },
    ];

    const data = [
        { nivel: "202010", denominacion: "Profesional", grado: "G10" },
        { nivel: "202009", denominacion: "Profesional", grado: "G09" },
        { nivel: "202008", denominacion: "Profesional", grado: "G08" },
        { nivel: "202007", denominacion: "Profesional", grado: "G07" },
        { nivel: "202006", denominacion: "Profesional", grado: "G06" },
        { nivel: "202005", denominacion: "Profesional", grado: "G05" },
        { nivel: "202004", denominacion: "Profesional", grado: "G04" },
    ];

    const actions = [
        {
            icon: "mi:eye",
            className: "text-[#007832] hover:text-[#007832]/70",
            onClick: (row) => console.log("Ver", row),
        },
        {
            icon: "bx:edit",
            className: "text-[#007832] hover:text-[#007832]/70",
            onClick: (row) => console.log("Editar", row),
        },
        {
            icon: "fluent:delete-16-regular",
            className: "text-[#D32F2F] hover:text-[#D32F2F]/70",
            onClick: (row) => console.log("Eliminar", row),
        },
    ];

    return (
        <>
            <Header title="Provisión de talento humano" items={breadcrumbItems} />
            <div className="flex flex-col gap-3">
                <SearchBar placeholder="Buscar por nivel o denominación" />
                <div className="self-end">
                    <ActionButton text="Nueva perfilación" />
                </div>
                <Table
                    columns={[
                        { label: "Nivel", field: "nivel" },
                        { label: "Denominación", field: "denominacion" },
                        { label: "Grado", field: "grado" },
                    ]}
                    data={data}
                    actions={actions}
                />
            </div>
        </>
    );
};

export default Perfilacion;
