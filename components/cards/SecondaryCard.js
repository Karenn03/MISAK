import { Icon } from "@iconify/react";

const SecondaryCard = ({ icon, title, description }) => {
    return (
        <div className="h-67 p-5 sm:p-6 rounded-xl bg-[#F9FAFB] flex flex-col justify-center">
            <div className="bg-[#F3F4F6] p-4 w-fit rounded-xl mb-5">
                <Icon
                    icon={icon}
                    className="text-[#4B5563] w-6 h-7 sm:w-7 sm:h-8 md:w-8 md:h-9"
                />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-4">
                {title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-[#505050]">
                {description}
            </p>
        </div>
    );
};

export default SecondaryCard;