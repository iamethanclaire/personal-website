import type { Route } from "./+types/home";
import  { NavLink } from "react-router";
import NameAnimation from "../composables/NameAnimation"

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Ethan Claire | Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-dark">
      <NameAnimation />
      {/* <button className="mt-4"> 
        <NavLink to="/projects"
        className="font-outfit text-primary"
      >
        See Portfolio
      </NavLink> </button> */}
    </div>

  );
}
