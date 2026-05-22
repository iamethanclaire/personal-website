import type { Route } from "./+types/home";
import AboutTitle from "../composables/about/AboutTitle"

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Ethan Claire | Contact" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}
export default function About() {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-dark">
            <AboutTitle />
        </div>
    );
};