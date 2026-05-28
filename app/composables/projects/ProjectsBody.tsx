import ProjectCard from "./ProjectCard"


export default function ProjectsBody() {
    return (
        <div className="flex min-h-screen flex-col pt-36 lg:px-28 md:px-18 sm:px-12 bg-light">
            <h1 className="font-woodblock text-2xl text-about items-start justify-start text-projects">
                Projects
            </h1>
            <div className="flex flex-row gap-4 items-center justify-center">
                <ProjectCard
                    projectPhoto="/images/projects/adapt_project.png"
                    projectTitle="ADAPT"
                    projectDescription="ADAPT (A Dyslexia-Accessible Page Transformer) is a Google Chrome 
                                        extension that lets users customize their reading environment to 
                                        improve digital readability."
                    projectSkills="JavaScript, HTML/CSS, UI/UX Design"
                    projectLink="https://github.com/iamethanclaire/ADAPT" 
                />
                <ProjectCard
                    projectPhoto="/images/projects/assist_project.png"
                    projectTitle="AssistAAC"
                    projectDescription="AssistAAC is an iOS-native Augmentative and Alternative Communication 
                                        (AAC) app that leverages Natural Language Processing to enhance the  
                                        communication experience."
                    projectSkills="Swift, CoreML, Accessibility Design" 
                    projectLink="https://github.com/iamethanclaire/Assist-AAC"
                />
                <ProjectCard
                    projectPhoto="/images/projects/xrb_project.png"
                    projectTitle="XRB"
                    projectDescription="This project is a web-based application designed for  University of Nevada, 
                    Reno’s Physics Department that supports visualisations of X-ray binary (XRB) data and supplemental 
                    data querying, analysis, and post-processing."
                    projectSkills="TypeScript, HTML/CSS, Docker" 
                    projectLink="https://github.com/iamethanclaire/xrb"
                />
            </div>
        </div>
    );
}