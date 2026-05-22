import type { Route } from "./+types/home";
import ContactTitle from "../composables/contact/ContactTitle"

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Ethan Claire | Contact" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}
export default function Contact() {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-dark">
            <ContactTitle />
        </div>
    );
};