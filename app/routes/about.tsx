import type { Route } from "./+types/home";
import AboutTitle from "../composables/about/AboutTitle"
import AboutDescription from "../composables/about/AboutDescription"

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Ethan Claire | Contact" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}
export default function About() {
    return (
        <div className="bg-light">
            {/* <AboutTitle /> */}
            <AboutDescription />
        </div>
    );
};