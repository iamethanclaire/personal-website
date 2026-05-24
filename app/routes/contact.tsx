import type { Route } from "./+types/home";
import ContactTitle from "../composables/contact/ContactTitle"
import ContactBody from "../composables/contact/ContactBody"

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Ethan Claire | Contact" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}
export default function Contact() {
    return (
        <div>
            {/* <ContactTitle /> */}
            <ContactBody />
        </div>
    );
};