import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Ethan Claire | Contact" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function Contact() {
    return (
        <div>
            <p>Welcome to the Contact Page</p>
        </div>
    );
};