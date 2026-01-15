import Image from "next/image";
import Background from "@/public/img/Background.jpg";
import Previewer from "@/public/img/Previewer.png";
import PrimaryCard from "@/components/cards/PrimaryCard";
import SecondaryCard from "@/components/cards/SecondaryCard";

const Landing = () => {
    return (
        <>
            <section
                className="relative flex justify-center items-center bg-fixed bg-cover bg-center text-white w-full min-h-screen pt-20"
                style={{ backgroundImage: `url(${Background.src})` }}
            >
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-10 md:px-26">
                    <div className="md:w-3/5 lg:w-1/2 text-center md:text-left space-y-7 px-4 sm:px-8 md:px-14">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[66px] font-semibold text-black">
                            El <span className="text-[#39A900]">Talento Humano</span> como eje de nuestra institución
                        </h1>
                        <p className="text-lg md:text-2xl text-black">Bienvenido a <b>MISAK</b>, la plataforma donde la gestión administrativa, la nómina y la seguridad orbitan alrededor de lo más importante: <b>nuestros funcionarios.</b></p>
                    </div>
                    <div className="md:w-2/5 lg:w-1/2 flex justify-center mt-8 md:mt-0">
                        <Image src={Previewer} className="h-200xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl" alt="Previewer MISAK" />
                    </div>
                </div>
            </section>
            <section className="p-12">
                <div>
                    <p className="text-center text-[#39A900] text-lg pb-2">ECOSISTEMA INSTITUCIONAL</p>
                    <h4 className="text-center text-[#262626] text-4xl pb-8">Gestión integral del Talento Humano</h4>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="row-span-2">
                        <PrimaryCard
                            title="Talento Humano"
                            description="El núcleo de MISAK. Gestiona la información del servidor público desde su vinculación hasta su retiro, garantizando la trazabilidad y el cumplimiento normativo en cada etapa de su vida laboral en la entidad."
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <SecondaryCard
                            title="Pensiones"
                            description="Control de aportes y gestión de expedientes pensionales."
                            icon="healthicons:old-man-outline-24px"
                        />
                        <SecondaryCard
                            title="Administración de salarios"
                            description="Liquidación de nómina y prestaciones sociales."
                            icon="mdi:cash-multiple"
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <SecondaryCard
                            title="Seguridad y Salud en el Trabajo"
                            description="Asistente virtual para resolver dudas sobre SST."
                            icon="ix:helmet-safety-filled"
                        />
                        <SecondaryCard
                            title="Administración documental"
                            description="Repositorio digital seguro de historias laborales."
                            icon="ph:files-fill"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    <SecondaryCard
                        title="Vivienda"
                        description="Gestión de auxilios y programas de vivienda para funcionarios."
                        icon="mdi:house"
                    />
                    <SecondaryCard
                        title="Relaciones sindicales"
                        description="Registro y seguimiento de acuerdos y relaciones laborales."
                        icon="streamline-ultimate:labor-hands-action-bold"
                    />
                    <SecondaryCard
                        title="Servicio médico asistencial"
                        description="Coordinación de servicios de salud para el personal."
                        icon="material-symbols:health-cross-rounded"
                    />
                    <SecondaryCard
                        title="Gestión administrativa"
                        description="Soporte operativo para la eficiencia institucional."
                        icon="clarity:administrator-solid"
                    />
                </div>
            </section>
            <footer className="text-[#262626]/35 text-center py-4 border-t border-[#262626]/10">
                © 2025 SENA - MISAK. Todos los derechos reservados.
            </footer>
        </>
    );
};

export default Landing;