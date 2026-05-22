import type { Route } from "./+types/home";
import ProjectsTitle from "../composables/projects/ProjectsTitle";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Ethan Claire | Projects" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}


export default function Projects() {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-light">
            <ProjectsTitle />
        </div>
    );
};