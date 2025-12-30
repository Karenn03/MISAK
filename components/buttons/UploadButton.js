import { Icon } from "@iconify/react";
import { useRef } from "react";

export default function UploadButton({ text, onFileSelect, disabled = false }) {
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file && onFileSelect) {
            onFileSelect(file);
        }
        // Resetear el input para permitir subir el mismo archivo nuevamente
        e.target.value = '';
    };

    return (
        <>
            <button 
                onClick={handleClick}
                disabled={disabled}
                className="flex flex-row gap-2.5 bg-linear-to-r from-[#5EA500] to-[#39A900] font-work-sans px-6 py-2.5 rounded-[10px] shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <Icon
                    icon="material-symbols:upload-rounded"
                    width="16"
                    height="16"
                    className="text-white"
                />
                <p className="text-xs text-white">{text}</p>
            </button>
            <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
            />
        </>
    );
}