export default function SkillCard({ skillType, skillWeight, skillTitle, specificOne, specificOneWeight, specificTwo, specificTwoWeight, dateStarted, description }: 
                                  { skillType: string, skillWeight: number, skillTitle: string, specificOne: string, specificOneWeight: number, specificTwo: string, specificTwoWeight: number, dateStarted: Date, description: string }) {
    return (
        <div className="flex bg-yellow m-4 rounded-3xl" style={{ height: "375px", width: "275px" }}>
            <div className="flex justify-start flex-col items-start bg-light m-3 flex-1">
                <p className="mx-4 mt-2 text-xs font-outfit">{skillType}</p>
                <div className="flex flex-row -mt-1 justify-between w-full">
                    <p className="mx-4 text-md font-outfit">{skillTitle}</p>
                    <p className="mx-4 text-md font-outfit">{skillWeight}</p>
                </div>
                <div className="flex mx-4 flex bg-yellow flex-1 rounded-md self-stretch shadow-md">
                    <div className="flex m-1 flex bg-light flex-1 self-stretch ">
                        {/* Put photo here */}
                    </div>
                </div>

                <div className="flex my-1 mx-10 flex bg-yellow h-3 skew-x-45 self-stretch " />

                <div className="flex mb-2 flex flex-1 w-full flex-col">
                    <div className="flex mx-4 mb-2 justify-between">
                        <p>5</p>
                        <p>{specificOne}</p>
                        <p>{specificOneWeight}</p>
                    </div>
                    <div className="flex mx-2 mb-2 bg-dark rounded-xl self-stretch h-0.25" />
                    <div className="flex mx-4 mb-2 justify-between">
                        <p>5</p>
                        <p>{specificTwo}</p>
                        <p>{specificTwoWeight}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};