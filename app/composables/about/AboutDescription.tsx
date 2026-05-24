import EthanImage from '@/public/images/ethan_selfie.jpeg'
import SkillDeck from './SkillDeck'
import ToolTechGrid from './ToolTechGrid'

export default function AboutTitle() {
    return (
        // general full page
        <div className="flex min-h-screen flex-col pt-36 lg:px-28 md:px-18 sm:px-12 items-start justify-start">
            <div className="mb-10">
                <h1 className="font-woodblock text-2xl text-about">
                    About Me
                </h1>
                <div className="flex align-top lg:flex-row md:flex-col">
                    <div className="px-10 flex flex-col" style={{ width: "700px" }}>
                        <p className="font-outfit text-lg text-primary mb-4">
                            My name is Ethan Claire. I'm a Computer Science and Engineering graduate from the University of Nevada, Reno,
                            heading to Georgia Tech for my master's in CS with a focus in Machine Learning. During my undergraduate years
                            I led research on assistive technology and human-computer interaction. Here I drafted two NSF-funded projects: ADAPT,
                            a Chrome extension that improves web readability for users with dyslexia (published at ITNG 2026), and AssistAAC,
                            an iOS AAC app powered by a fine-tuned T5 transformer for grammar correction. I also designed Udephi Standard, a
                            dyslexia-friendly typeface supporting 20+ languages.
                        </p>
                        <p className="font-outfit text-lg text-primary">
                            Beyond my academic work, I have been an independent software developer for over seven years. In 2019, I founded
                            Strictly Dominant Gaming, where I developed Prime Target — winner of the U.S. Congressional App Challenge.
                            In 2023, I established Udephi with a focus on building applications that respect and protect user privacy. Looking ahead,
                            I am committed to creating software that makes a meaningful difference in people's lives.
                        </p>
                    </div>
                    <div className="px-10" style={{ width: "700px" }}>
                        <img src={EthanImage} alt="Ethan Claire sitting at a coffee shop." />
                    </div>
                </div>
            </div>
            <div className="mb-10">
                <h2 className="font-chiron text-xl text-about">
                    Skills
                </h2>
                <SkillDeck />
            </div>
            {/* <div className="mb-10">
                <h2 className="font-chiron text-xl text-about">
                    Tools and Technologies
                </h2>
                <ToolTechGrid />
            </div> */}
        </div>
    );
};