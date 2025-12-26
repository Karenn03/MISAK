import { FileInput, Label } from "flowbite-react";
import { Icon } from "@iconify/react";

export function DropFile() {
    return (
        <div className="flex w-full items-center justify-center">
            <Label
                htmlFor="dropzone-file"
                className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <Icon icon="duo-icons:upload-file" width="32" height="32" />
                    <p className="py-2 text-center text-sm text-gray-500 dark:text-gray-400">
                        <b>Arrastra tus PDFs aquí</b><br /> o haz clic para seleccionarlos.
                    </p>
                </div>
                <FileInput id="dropzone-file" className="hidden" />
            </Label>
        </div>
    );
}
export default DropFile;