"use client";

import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import Header from "@/components/menus/Header";
import SearchBar from "@/components/inputs/SearchBar";
import UploadButton from "@/components/buttons/UploadButton";
import Table from "@/components/tables/Table";
import FileInput from "@/components/inputs/FileInput";

const API_BASE_URL = "http://127.0.0.1:8000/api";

const Training = () => {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const breadcrumbItems = [
        { href: "/home", label: "Inicio" },
        { href: "/sst", label: "Seguridad y salud en el trabajo" },
        { href: "#", label: "Entrenamiento" },
    ];

    // Cargar documentos desde el backend
    const fetchDocuments = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_BASE_URL}/documents`);
            
            if (!response.ok) {
                throw new Error("Error al cargar documentos");
            }
            
            const data = await response.json();
            setDocuments(data.documents || []);
        } catch (error) {
            console.error("Error fetching documents:", error);
            alert("Error al cargar los documentos");
        } finally {
            setLoading(false);
        }
    };

    // Cargar documentos al montar el componente
    useEffect(() => {
        fetchDocuments();
    }, []);

    // Subir PDF
    const handleUpload = async (file) => {
        if (!file) return;

        // Validar que sea PDF
        if (!file.name.toLowerCase().endsWith('.pdf')) {
            alert("Solo se permiten archivos PDF");
            return;
        }

        try {
            setUploading(true);
            
            const formData = new FormData();
            formData.append("file", file);

            const response = await fetch(`${API_BASE_URL}/upload`, {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.detail || "Error al subir el archivo");
            }

            alert(result.message || "PDF subido e indexado correctamente");
            
            // Recargar la lista de documentos
            await fetchDocuments();
            
        } catch (error) {
            console.error("Error uploading file:", error);
            alert(error.message || "Error al subir el archivo");
        } finally {
            setUploading(false);
        }
    };

    // Ver PDF
    const handleView = (row) => {
        alert(`Ver PDF: ${row.nombre}\n\nEsta funcionalidad permitirá visualizar el PDF en un modal o nueva ventana.`);
    };

    // Eliminar PDF
    const handleDelete = async (row) => {
        if (!confirm(`¿Estás seguro de eliminar "${row.nombre}"?\n\nEsto eliminará el archivo y sus embeddings de la base de datos.`)) {
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/documents/${encodeURIComponent(row.nombre)}`, {
                method: "DELETE",
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.detail || "Error al eliminar el archivo");
            }

            alert(result.message || "Documento eliminado correctamente");
            
            // Recargar la lista de documentos
            await fetchDocuments();
            
        } catch (error) {
            console.error("Error deleting file:", error);
            alert(error.message || "Error al eliminar el archivo");
        }
    };

    const actions = [
        {
            icon: "mi:eye",
            className: "text-[#007832] hover:text-[#007832]/70",
            onClick: handleView,
        },
        {
            icon: "fluent:delete-16-regular",
            className: "text-[#D32F2F] hover:text-[#D32F2F]/70",
            onClick: handleDelete,
        },
    ];

    // Filtrar documentos por término de búsqueda
    const filteredDocuments = documents.filter(doc =>
        doc.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Header title="Provisión de talento humano" items={breadcrumbItems} />
            <div className="flex flex-col gap-3">
                <SearchBar 
                    placeholder="Buscar por nombre de archivo" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="self-end">
                    <UploadButton 
                        text={uploading ? "Subiendo..." : "Subir PDF"} 
                        onFileSelect={handleUpload}
                        disabled={uploading}
                    />
                </div>

                {loading ? (
                    <div className="flex justify-center items-center py-12">
                        <Icon icon="eos-icons:loading" width="48" height="48" className="text-[#007832]" />
                    </div>
                ) : (
                    <Table
                        title="Archivos Cargados"
                        description="Gestiona los documentos que alimentan la inteligencia del chatbot."
                        columns={[
                            { label: "Nombre del Archivo", field: "nombre" },
                            { label: "Fecha", field: "fecha" },
                            { label: "Estado", field: "estado" },
                        ]}
                        data={filteredDocuments}
                        actions={actions}
                    />
                )}
            </div>
        </>
    );
};

export default Training;
