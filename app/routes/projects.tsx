import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Ethan Claire | Projects" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


export default function Projects() {
    return (
        <div>
            <p>Welcome to the Projects Page</p>
        </div>
    );
};