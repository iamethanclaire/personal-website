import { asset } from '@/app/utils/assets';

export default function SkillCard({ skillType, skillWeight, skillTitle, skillPhoto, specificOne, specificOneWeight, specificTwo, specificTwoWeight, dateStarted, description }:
    { skillType: string, skillWeight: number, skillTitle: string, skillPhoto: string, specificOne: string, specificOneWeight: number, specificTwo: string, specificTwoWeight: number, dateStarted: Date, description: string }) {
    const yearsOfExperience = Math.floor((new Date().getTime() - dateStarted.getTime()) / (1000 * 60 * 60 * 24 * 365.25));

    let skillColor = '#FFFFFF';
    switch (skillType) {
        case "Programming Languages":
            skillColor = '#5ce64d';
            break;
        case "DevOps":
            skillColor = '#5abcf1';
            break;
        case "Management":
            skillColor = '#f07171';
            break;
        case "Frameworks":
            skillColor = '#ece00c';
            break;
    }

    return (

        <div className="flex bg-yellow m-4 rounded-3xl transition-transform hover:-translate-y-[5px]" style={{ height: "375px", width: "275px" }}>
            <div className="relative flex justify-start flex-col items-start m-3 flex-1" style={{ backgroundColor: skillColor }}>
                <img src={asset("/images/skills/texture.png")} alt="texture" className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10 opacity-25" />
                <div className="relative z-20">
                    <p className="mx-4 mt-2 text-xs font-outfit">{skillType}</p>
                    <div className="flex flex-row -mt-1 justify-between w-full">
                        <p className="mx-4 text-md font-outfit font-bold truncate">{skillTitle}</p>
                        <p className="mx-4 text-md font-outfit">{skillWeight}</p>
                    </div>
                    <div className="flex mx-4 flex bg-yellow flex-1 rounded-md self-stretch shadow-md" style={{ height: "125px" }}>
                        <div className="flex m-1 bg-light flex-1 self-stretch overflow-hidden">
                            <img src={skillPhoto} alt={skillTitle} className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="flex mt-1 mb-4 mx-10 flex bg-gradient-to-r from-gold-start to-gold-end h-3 skew-x-45 self-stretch justify-center items-center">
                        <p className="text-xs -skew-x-45">Practiced for {yearsOfExperience} year{yearsOfExperience !== 1 ? 's' : ''}</p>
                    </div>

                    <div className="flex mb-2 flex flex-1 w-full flex-col text-sm">
                        <div className="flex mx-4 mb-2 justify-between font-bold">
                            <p>{specificOne}</p>
                            <p>{specificOneWeight}</p>
                        </div>
                        <div className="flex mx-2 mb-2 bg-dark rounded-xl self-stretch h-0.25" />
                        <div className="flex mx-4 mb-2 justify-between font-bold">
                            <p>{specificTwo}</p>
                            <p>{specificTwoWeight}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};