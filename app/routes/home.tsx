import type { Route } from "./+types/home";
import HomeTitle from "../composables/home/HomeTitle"

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Ethan Claire | Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-light">
      <HomeTitle />
    </div>

  );
}
