export default function NameAnimation() {
    return (
        <div className="flex relative flex-col items-center justify-center">
            <p className="font-woodblock text-4xl select-none text-dark drop-shadow-[0_6px_2px_rgba(255,255,255,1)]">
                {"Ethan Claire".split("").map((char, index) => (
                    <span key={index} className="transition-colors duration-0 delay-500 hover:text-primary hover:delay-0">
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </p>
            <p className="text-lg -mt-12 mb-2 select-none font-outfit text-secondary">A PORTFOLIO SHOWCASING</p>
            <p className="text-xl select-none font-outfit text-secondary">Software Development, Assistive Technology, & Human-Computer Interaction</p>
        </div>
    );
};