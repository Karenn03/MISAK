import { Icon } from "@iconify/react";

export default function UploadButton({ text }) {
    return (
        <button className="flex flex-row gap-2.5 bg-linear-to-r from-[#5EA500] to-[#39A900] font-work-sans px-6 py-2.5 rounded-[10px] shadow-sm hover:shadow-md">
            <Icon
                icon="material-symbols:upload-rounded"
                width="16"
                height="16"
                className="text-white"
            />
            <p className="text-xs text-white">{text}</p>
        </button>
    );
}