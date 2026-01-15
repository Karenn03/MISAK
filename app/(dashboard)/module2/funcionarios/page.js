"use client";

import ActionButton from "@/components/buttons/ActionButton";
import SearchBar from "@/components/inputs/SearchBar";
import Header from "@/components/menus/Header";
import Table from "@/components/tables/Table";

const Funcionarios = () => {
    const breadcrumbItems = [
        { href: "/home", label: "Inicio" },
        { href: "/module2/cargos", label: "Provisión" },
        { href: "#", label: "Funcionarios" },
    ];

    const data = [
        { documento: "C.C. 51465363", nombre: "Adrian Montesinos", tipoContratacion: "Planta", telefono: "3101465654", correoElectronico: "adrian@sena.edu.co" },
        { documento: "C.C. 36516514", nombre: "Valeria Casal", tipoContratacion: "Planta", telefono: "3125465458", correoElectronico: "valeria@sena.edu.co" },
        { documento: "C.C. 25261651", nombre: "Julián Echeverría", tipoContratacion: "Contratista", telefono: "3145848569", correoElectronico: "julian@sena.edu.co" },
        { documento: "C.C. 98547584", nombre: "Beatriz Rocha", tipoContratacion: "Contratista", telefono: "3004585448", correoElectronico: "beatriz@sena.edu.co" },
        { documento: "C.C. 13256174", nombre: "Mateo Villalobos", tipoContratacion: "Planta", telefono: "3024584547", correoElectronico: "mateo@sena.edu.co" },
        { documento: "C.C. 1465469", nombre: "Elena Santibáñez", tipoContratacion: "Contratista", telefono: "3154656958", correoElectronico: "elena@sena.edu.co" },
        { documento: "C.C. 56946936", nombre: "Ricardo Falcón", tipoContratacion: "Planta", telefono: "3145614695", correoElectronico: "ricardo@sena.edu.co" },
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
                <SearchBar placeholder="Buscar por documento o nombre" />
                <div className="self-end">
                    <ActionButton text="Nuevo funcionario" />
                </div>
                <Table
                    columns={[
                        { label: "Documento", field: "documento" },
                        { label: "Nombre", field: "nombre" },
                        { label: "Tipo de contratación", field: "tipoContratacion" },
                        { label: "Teléfono", field: "telefono" },
                        { label: "Correo electrónico", field: "correoElectronico" },
                    ]}
                    data={data}
                    actions={actions}
                />
            </div>
        </>
    );
};

export default Funcionarios;
