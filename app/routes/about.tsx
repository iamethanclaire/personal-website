import type { Route } from "./+types/home";
import NameAnimation from "../composables/NameAnimation";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Ethan Claire | About" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function About() {
    return (
        <div>
            <p>Welcome to the About Page</p>
        </div>
    );
};