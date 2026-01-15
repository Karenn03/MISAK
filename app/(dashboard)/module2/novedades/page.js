"use client";

import ActionButton from "@/components/buttons/ActionButton";
import SearchBar from "@/components/inputs/SearchBar";
import Header from "@/components/menus/Header";
import Table from "@/components/tables/Table";

const Novedades = () => {
    const breadcrumbItems = [
        { href: "/home", label: "Inicio" },
        { href: "/module2/cargos", label: "Provisión" },
        { href: "#", label: "Novedades" },
    ];

    const data = [
        { codigo: "010", nombre: "Encargo" },
        { codigo: "009", nombre: "Vacancia temporal" },
        { codigo: "008", nombre: "Nombramiento por concurso" },
        { codigo: "007", nombre: "Nombramiento por ascenso" },
        { codigo: "006", nombre: "Renuncia" },
        { codigo: "005", nombre: "Retiro" },
        { codigo: "004", nombre: "Destitución" },
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
                <SearchBar placeholder="Buscar por código o nombre" />
                <div className="self-end">
                    <ActionButton text="Nueva novedad" />
                </div>
                <Table
                    columns={[
                        { label: "Código", field: "codigo" },
                        { label: "Nombre", field: "nombre" },
                    ]}
                    data={data}
                    actions={actions}
                />
            </div>
        </>
    );
};

export default Novedades;
