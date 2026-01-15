import { Icon } from "@iconify/react";

const PrimaryCard = ({ title, description }) => {
    const items = [
        {
            title: "Gestión del Talento Humano.",
            text: "Control de planta y estructura organizacional."
        },
        {
            title: "Provisión del Talento Humano.",
            text: "Gestión de vacantes y nombramientos."
        },
        {
            title: "Formación y desarrollo del Talento Humano.",
            text: "Planes de capacitación y bienestar."
        }
    ];

    return (
        <div className="h-fit p-6 sm:p-10 rounded-xl border border-[#C2E5B1] bg-linear-to-b from-[#F0F8EB] to-white">
            <div className="bg-[#39A900] p-5 h-fit w-fit rounded-xl mb-7">
                <Icon icon="fa-solid:user-tie" className="text-white w-6 h-7 sm:w-7 sm:h-8 md:w-8 md:h-9" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black mb-7">{title}</h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#505050] mb-7">{description}</p>
            <div className="space-y-4">
                {items.map((item, idx) => (
                    <div key={idx} className="flex flex-row items-start gap-3 sm:gap-4">
                        <Icon icon="lets-icons:check-fill" className="text-[#39A900] w-5 h-5 sm:w-6 sm:h-6" />
                        <div className="flex flex-col">
                            <p className="font-medium text-base sm:text-lg md:text-xl text-[#505050]">{item.title}</p>
                            <p className="text-sm sm:text-base md:text-lg text-[#707070]">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default PrimaryCard;