export default function NameAnimation() {
    return (
        <div className="flex relative flex-col items-center justify-center">
            <h1 className="font-woodblock lg:text-4xl md:text-3xl sm:text-2xl select-none text-home">
                {"Ethan Claire".split("").map((char, index) => (
                    <span key={index} className="transition-colors duration-0 delay-500 hover:text-primary hover:delay-0">
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </h1>
            <h2 className="lg:text-lg md:text-md sm:text-sm lg:-mt-12 md:-mt-11 sm:-mt-10 lg:mb-2 md:mb-1 select-none font-outfit text-primary">A PORTFOLIO SHOWCASING</h2>
            <h2 className="lg:text-xl md:text-md sm:text-sm select-none font-outfit text-primary">Software Development, Assistive Technology, & Human-Computer Interaction</h2>
        </div>
    );
};