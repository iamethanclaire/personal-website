import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function ContactBody() {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    function handleClick(first: string, last: string, company: string, email: string, message: string) {
        // check for errors
        if (!first) {
            setStatus("Please enter a first name");
        } else if (!last) {
            setStatus("Please enter a last name");
        } else if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setStatus("Please enter a valid email");
        } else if (!message) {
            setStatus("Please enter a message");
        } else {

            emailjs.send(
                "service_dxdi5nl",
                "template_1al6ikb",
                {
                    first: first,
                    last: last,
                    company: company,
                    email: email,
                    message: message,
                },
                "sM4E0XpBl3M8oIkSh"
            )
                .then(() => setStatus("Email sent!"))
                .catch(() => setStatus("Something went wrong. Please try again."));
        }

    }

    return (
        <div className="flex min-h-screen flex-col pt-36 lg:px-28 md:px-18 sm:px-12 bg-light">
            <h1 className="font-woodblock text-2xl text-about items-start justify-start text-contact">
                Contact
            </h1>
            <div className="flex flex-col justify-center items-center">
                <h2 className="font-chiron text-secondary text-lg mb-12">For any inquires, please feel free to fill out this contact form:</h2>
                <div className="flex flex-row gap-24 items-start">
                    <div className="flex flex-1 w-1/2 justify-center pt-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className=" text-accent-1 size-72">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                        </svg>
                    </div>
                    <div className="flex flex-1 w-1/2 flex-col items-center gap-y-4">
                        <input
                            className="border-1 border-border rounded-3xl px-4"
                            style={{ width: "400px", height: "50px" }}
                            placeholder="First Name"
                            value={first}
                            onChange={(e) => setFirst(e.target.value)}
                        />
                        <input
                            className="border-1 border-border rounded-3xl px-4"
                            style={{ width: "400px", height: "50px" }}
                            placeholder="Last Name"
                            value={last}
                            onChange={(e) => setLast(e.target.value)}
                        />
                        <input
                            className="border-1 border-border rounded-3xl px-4"
                            style={{ width: "400px", height: "50px" }}
                            placeholder="Company (Optional)"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                        <input
                            className="border-1 border-border rounded-3xl px-4"
                            style={{ width: "400px", height: "50px" }}
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <textarea
                            className="border-1 border-border rounded-3xl px-4 pt-3 font-sans"
                            style={{ width: "400px", height: "175px", verticalAlign: "top" }}
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button onClick={() => handleClick(first, last, company, email, message)}
                            className="bg-gold-start hover:bg-accent-1 transition-colors duration-300 rounded-3xl text-light cursor-pointer"
                            style={{ width: "400px", height: "50px" }}>
                            Send
                        </button>
                        {status && (
                            <p className={status === "Email sent!" ? "text-green-500" : "text-red-500"}>
                                {status}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}