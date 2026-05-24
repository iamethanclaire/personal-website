import type { Route } from "./+types/home";
import ProjectsTitle from "../composables/projects/ProjectsTitle";
import ProjectsBody from "../composables/projects/ProjectsBody";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Ethan Claire | Projects" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}


export default function Projects() {
    return (
        <div>
            <ProjectsBody />
            {/* <ProjectsTitle /> */}
        </div>
    );
};