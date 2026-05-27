export default function ProjectCard({ projectPhoto, projectTitle, projectDescription, projectSkills}: 
                                    { projectPhoto: string, projectTitle: string, projectDescription: string, projectSkills: string }) {
    return (
        <div className="flex flex-col rounded-3xl shadow-md border-1 border-border" style={{ height: "600px", width: "500px" }}>
            {/* Photo */}
            <div className="bg-light rounded-t-3xl" style={{ height: "250px" }}>
                <img src={projectPhoto} alt="Test" className="w-full h-full object-cover rounded-t-3xl" />
            </div>
            {/* Border */}
            <div className="border-b-1 border-border" />
            <div className="flex flex-1 flex-col m-4">
                {/* Title */}
                <h2 className="text-xl font-chiron mb-2 text-primary">
                    {projectTitle}
                </h2>
                {/* Description */}
                <p className="text-md font-outfit mx-3 text-secondary">
                    {projectDescription}
                </p>
                {/* Tools / Skills Used */}
                <p className="mt-auto text-md font-outfit m-3 text-tertiary">
                    Skills Used: {projectSkills}
                </p>
            </div>
        </div>
    );
}