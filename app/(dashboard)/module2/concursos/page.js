"use client";

import ActionButton from "@/components/buttons/ActionButton";
import SearchBar from "@/components/inputs/SearchBar";
import Header from "@/components/menus/Header";
import Table from "@/components/tables/Table";

const Concursos = () => {
    const breadcrumbItems = [
        { href: "/home", label: "Inicio" },
        { href: "/module2/cargos", label: "Provisión" },
        { href: "#", label: "Concursos" },
    ];

    const data = [
        { codigo: "01001", nombre: "Concurso 1" },
        { codigo: "00901", nombre: "Concurso 2" },
        { codigo: "00801", nombre: "Concurso 3" },
        { codigo: "00701", nombre: "Concurso 4" },
        { codigo: "00601", nombre: "Concurso 5" },
        { codigo: "00501", nombre: "Concurso 6" },
        { codigo: "00401", nombre: "Concurso 7" },
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
                    <ActionButton text="Nuevo concurso" />
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

export default Concursos;
