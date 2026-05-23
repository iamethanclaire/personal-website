import SkillCard from './SkillCard'
export default function SkillDeck() {
    return (
        <div className="flex flex-row justify-center flex-wrap overflow-x-auto px-10">
            <SkillCard
                skillType="Programming Languages"
                skillWeight={100}
                skillTitle="HTML/CSS"
                skillPhoto="/images/skills/htmlcss_image.png"
                specificOne="Website Development"
                specificOneWeight={100}
                specificTwo="Web Animations"
                specificTwoWeight={99}
                dateStarted={new Date('2020-08-15')}
                description="Test"
            />
            <SkillCard
                skillType="Programming Languages"
                skillWeight={98}
                skillTitle="C#"
                skillPhoto="/images/skills/csharp_image.jpg"
                specificOne="Game Development"
                specificOneWeight={100}
                specificTwo="Physics Rendering"
                specificTwoWeight={90}
                dateStarted={new Date('2019-07-05')}
                description="Test"
            />
            <SkillCard
                skillType="Programming Languages"
                skillWeight={95}
                skillTitle="C++"
                skillPhoto="/images/skills/cpp_image.png"
                specificOne="Object-Oriented Programming"
                specificOneWeight={95}
                specificTwo="Data Stuctures"
                specificTwoWeight={95}
                dateStarted={new Date('2023-08-15')}
                description="Test"
            />
            <SkillCard
                skillType="Programming Languages"
                skillWeight={95}
                skillTitle="Swift"
                skillPhoto="/images/skills/swift_image.png"
                specificOne="iOS App Design"
                specificOneWeight={95}
                specificTwo="Assistive Technology Development"
                specificTwoWeight={95}
                dateStarted={new Date('2022-08-15')}
                description="Test"
            />
            <SkillCard
                skillType="Programming Languages"
                skillWeight={94}
                skillTitle="TypeScript"
                skillPhoto="/images/skills/typescript_image.png"
                specificOne="Website Design"
                specificOneWeight={95}
                specificTwo="API Integration"
                specificTwoWeight={94}
                dateStarted={new Date('2023-08-15')}
                description="Test"
            />
            <SkillCard
                skillType="Programming Languages"
                skillWeight={93}
                skillTitle="JavaScript"
                skillPhoto="/images/skills/javascript_image.jpg"
                specificOne="Extension Design"
                specificOneWeight={92}
                specificTwo="Website Design"
                specificTwoWeight={94}
                dateStarted={new Date('2022-08-15')}
                description="Test"
            />
            <SkillCard
                skillType="Programming Languages"
                skillWeight={92}
                skillTitle="Python"
                skillPhoto="/images/skills/python_image.png"
                specificOne="Unit Testing"
                specificOneWeight={95}
                specificTwo="Machine Learning"
                specificTwoWeight={90}
                dateStarted={new Date('2023-08-15')}
                description="Test"
            />
            <SkillCard
                skillType="Programming Languages"
                skillWeight={91}
                skillTitle="SQL"
                skillPhoto="/images/skills/sql_image.jpeg"
                specificOne="Database Management"
                specificOneWeight={95}
                specificTwo="Performance Optimization"
                specificTwoWeight={90}
                dateStarted={new Date('2022-08-15')}
                description="Test"
            />
            <SkillCard
                skillType="DevOps"
                skillWeight={100}
                skillTitle="Git"
                skillPhoto="/images/skills/github_image.png"
                specificOne="Version Control"
                specificOneWeight={100}
                specificTwo="Workflow (Actions)"
                specificTwoWeight={99}
                dateStarted={new Date('2021-08-15')}
                description="Test"
            />
            <SkillCard
                skillType="DevOps"
                skillWeight={90}
                skillTitle="Docker"
                skillPhoto="/images/skills/docker_image.png"
                specificOne="Authoring"
                specificOneWeight={90}
                specificTwo="Optimization"
                specificTwoWeight={90}
                dateStarted={new Date('2024-08-15')}
                description="Test"
            />
            <SkillCard
                skillType="Management"
                skillWeight={95}
                skillTitle="Taxonomy Design"
                skillPhoto="/images/skills/taxonomy_image.png"
                specificOne="Classification"
                specificOneWeight={95}
                specificTwo="Relationship Modeling"
                specificTwoWeight={94}
                dateStarted={new Date('2021-08-15')}
                description="Test"
            />
            <SkillCard
                skillType="Management"
                skillWeight={93}
                skillTitle="Documentation"
                skillPhoto="/images/skills/documentation_image.jpg"
                specificOne="Information Architecture"
                specificOneWeight={95}
                specificTwo="Technical Writing"
                specificTwoWeight={92}
                dateStarted={new Date('2021-08-15')}
                description="Test"
            />

        </div>
    );
}