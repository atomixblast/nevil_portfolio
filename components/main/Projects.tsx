import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                Mes Projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src="/projet1.png"
                    title="Unigine Squad"
                    description="Une landing page pour une équipe d'e-sport avec un style sombre, des couleurs néon et une mise en avant des personnages de jeux."
                />
                <ProjectCard
                    src="/projet2.png"
                    title="Starbucks"
                    description="Une page web simple et aérée pour présenter une boisson, avec un design clair centré sur l'image et la marque."
                />
                <ProjectCard
                    src="/projet3.png"
                    title="Lecteur de Musique"
                    description="Un petit lecteur audio avec un design moderne, des effets d'ombre et une interface épurée pour contrôler sa playlist."
                />
            </div>
        </div>
    );
};

export default Projects;