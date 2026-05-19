import type { Route } from "./+types/posts";

export async function loader({ params }: Route.LoaderArgs) {
    const postId = params.postId;
    return { postId };
}

export default function Post({ loaderData }: Route.ComponentProps) {
    return (
        <div>
            {" "}
            <p> Post Id: {loaderData.postId}</p>
        </div>
    )
}