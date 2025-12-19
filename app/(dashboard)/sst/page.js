import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import bot from "@/public/img/SENABot.png";

const Module6 = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between py-14 px-20 font-work-sans h-170">
            <div className="flex-1 border-t-5 border-b-5 border-dotted border-[#85CA62] py-6">
                <div className="mb-8 md:mb-0 md:mr-10">
                    <h1 className="text-[40px] font-bold text-[#57B627] mb-4">
                        ¡Bienvenido al módulo de SST!
                    </h1>
                    <p className="text-[28px] text-[#262626] mb-6">
                        Aquí podrás resolver tus dudas sobre Seguridad y Salud en el Trabajo
                    </p>
                    <button className="flex items-center gap-2 bg-[#57B627] text-white px-5 py-2 rounded-2xl hover:bg-[#2E7D00] transition">
                        <Link href="/sst/chatbot" className="flex items-center gap-2">
                            Comenzar
                            <Icon icon="material-symbols:play-arrow" width="20" height="20" />
                        </Link>
                    </button>
                </div>
            </div>
            <div className="flex-1 flex justify-center">
                <Image
                    src={bot}
                    alt="Asistente SST"
                    width={450}
                    height={450}
                    className="w-full max-w-sm md:max-w-md h-auto"
                />
            </div>
        </div>
    );
};

export default Module6;
