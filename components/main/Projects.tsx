import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="games">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Featured Games
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Cosmic Explorers"
          description="Lead your fleet through procedurally generated galaxies. Trade resources, build alliances, and conquer new territories in this expansive space MMO."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Space Station Commander"
          description="Build and manage your own space station. Research new technologies, manage resources, and defend against hostile forces in this strategic simulation."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Galactic Racing League"
          description="Compete in high-speed races through spectacular space tracks. Customize your ship, join racing teams, and become the galaxy's ultimate racing champion."
        />
      </div>
    </div>
  );
};

export default Projects;
