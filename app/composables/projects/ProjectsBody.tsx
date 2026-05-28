import ProjectCard from "./ProjectCard"
import { asset } from '@/app/utils/assets';

export default function ProjectsBody() {
    return (
        <div className="flex min-h-screen flex-col pt-36 lg:px-28 md:px-18 sm:px-12 pb-16 bg-light">
            <h1 className="font-woodblock text-2xl text-about items-start justify-start text-projects">
                Projects
            </h1>
            <div className="flex flex-row gap-4 items-center justify-center flex-wrap overflow-y-none">
                <ProjectCard
                    projectPhoto={asset("/images/projects/adapt_project.png")}
                    projectTitle="ADAPT"
                    projectDescription="ADAPT (A Dyslexia-Accessible Page Transformer) is a Google Chrome 
                                        extension that lets users customize their reading environment to 
                                        improve digital readability."
                    projectSkills="JavaScript, HTML/CSS, UI/UX Design"
                    projectLink="https://github.com/iamethanclaire/ADAPT"
                />
                <ProjectCard
                    projectPhoto={asset("/images/projects/assist_project.png")}
                    projectTitle="AssistAAC"
                    projectDescription="AssistAAC is an iOS-native Augmentative and Alternative Communication 
                                        (AAC) app that leverages Natural Language Processing to enhance the  
                                        communication experience."
                    projectSkills="Swift, CoreML, Accessibility Design"
                    projectLink="https://github.com/iamethanclaire/Assist-AAC"
                />
                <ProjectCard
                    projectPhoto={asset("/images/projects/xrb_project.png")}
                    projectTitle="XRB"
                    projectDescription="XRB is a web-based application designed for  University of Nevada, 
                    Reno's Physics Department that supports visualisations of X-ray binary (XRB) data and supplemental 
                    data querying, analysis, and post-processing."
                    projectSkills="TypeScript, HTML/CSS, Docker"
                    projectLink="https://github.com/iamethanclaire/xrb"
                />
                <ProjectCard
                    projectPhoto={asset("/images/projects/sdg_project.png")}
                    projectTitle="Strictly Dominant Gaming"
                    projectDescription="Strictly Dominant Gaming is a video game company centered around creating
                                        both engaging and educational games. SDG won the 2019 Congressional App Challenge
                                        with Prime Target."
                    projectSkills="C#, Unity, SwiftUI"
                    projectLink="https://strictlydominant.wixsite.com/home"
                />
                <ProjectCard
                    projectPhoto={asset("/images/projects/udephi_project.png")}
                    projectTitle="Udephi"
                    projectDescription="Udephi is a software company centered around providing the best user experience
                    without collecting user data."
                    projectSkills="SwiftUI, HealthKit, CoreML"
                    projectLink="https://www.udephi.com"
                />
            </div>
        </div>
    );
}