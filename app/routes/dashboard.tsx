import { Outlet } from "react-router";

export default function About() {
    return (
        <div>
            Welcome to the Dashboard Page! <Outlet />
        </div>
    );
};