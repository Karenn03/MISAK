"use client";

import { Icon } from "@iconify/react";
import Header from "@/components/menus/Header";
import SearchBar from "@/components/inputs/SearchBar";
import UploadButton from "@/components/buttons/UploadButton";
import Table from "@/components/tables/Table";
import FileInput from "@/components/inputs/FileInput";

const Training = () => {
    const breadcrumbItems = [
        { href: "/home", label: "Inicio" },
        { href: "/sst", label: "Seguridad y salud en el trabajo" },
        { href: "#", label: "Entrenamiento" },
    ];

    const data = [
        { nombre: "Sistema_de_gestion.pdf", fecha: "19/12/2025", estado: "Procesado" },
        { nombre: "Evaluacion_de_riesgos.pdf", fecha: "18/12/2025", estado: "Pendiente" },
        { nombre: "Plan_de_emergencias.pdf", fecha: "17/12/2025", estado: "Procesado" },
        { nombre: "Accidentes.pdf", fecha: "16/12/2025", estado: "Pendiente" },
        { nombre: "Incidentes.pdf", fecha: "15/12/2025", estado: "Procesado" },
        { nombre: "Uso_de_EPP.pdf", fecha: "14/12/2025", estado: "Procesado" },
        { nombre: "Riesgos.pdf", fecha: "13/12/2025", estado: "Error" },
        { nombre: "Ergonomia.pdf", fecha: "12/12/2025", estado: "Procesado" },
    ];

    const actions = [
        {
            icon: "mi:eye",
            className: "text-[#007832] hover:text-[#007832]/70",
            onClick: (row) => console.log("Ver", row),
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
                    <UploadButton text="Subir PDF" />
                </div>

                {/*             <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 font-work-sans">
                <div className="flex flex-col gap-2">
                    <p className="text-text-secondary text-base font-normal max-w-2xl">
                        Gestiona los archivos PDF que alimentan la información con la que responde tu chatbot. Sube nuevos documentos y entrena el modelo para actualizar sus respuestas.
                    </p>
                </div>
            </div> */}

                {/*             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col gap-6 font-work-sans">
                <div className="border border-[#262626]/10 rounded-xl p-6 flex flex-col gap-4">
                    <div className="flex items-center gap-2 mb-2">
                        <Icon icon="tabler:cloud-upload" width="24" height="24" />
                        <h3 className="text-lg font-bold text-black">Cargar Documentos</h3>
                    </div>
                    <FileInput />
                </div>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-2"> */}
                <Table
                    title="Archivos Cargados"
                    description="Gestiona los documentos que alimentan la inteligencia del chatbot."
                    columns={[
                        { label: "Nombre del Archivo", field: "nombre" },
                        { label: "Fecha", field: "fecha" },
                        { label: "Estado", field: "estado" },
                    ]}
                    data={data}
                    actions={actions}
                />
                {/* </div >
            </div> */ }
            </div>
        </>
    );
};

export default Training;
