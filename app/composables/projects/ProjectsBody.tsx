import ProjectsTitle from "./ProjectsTitle"
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
                    projectSkills="JavaScript, HTML/CSS" />
            </div>
        </div>
    );
}