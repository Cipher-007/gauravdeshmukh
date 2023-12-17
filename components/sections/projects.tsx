import type { Project } from "@/lib/types";
import ProjectCard from "../project-card";

export default function Projects() {
  const projects: Project[] = [
    {
      title: "QuickWrite: Efficient Note-Taking",
      description:
        "Node.js CLI for fast note-taking with efficient creation, deletion, and search features. User-friendly web interface optimizes note management, enhancing productivity.",
      tech: ["Node", "JavaScript"],
      links: {
        github: "https://github.com/Cipher-007/notes-CLI",
      },
    },
    {
      title: "React Meals",
      description:
        "A web app mirroring a food ordering platform, leveraging Firebase for menu item management and order storage. Utilized React.js for a seamless and intuitive frontend experience.",
      tech: ["React", "JavaScript", "Firebase"],
      links: {
        github: "https://github.com/Cipher-007/food-order",
        deploy: "https://food-order-cipher-007.vercel.app",
      },
    },
  ];
  return (
    <section className="flex snap-center flex-col items-center justify-center pt-20 text-[#ccd6f6]">
      <h1 className="text-3xl font-bold">Other Noteworthy Projects</h1>
      <div className="grid w-full grow flex-wrap items-center gap-4 pt-10 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard project={project} key={i} />
        ))}
      </div>
    </section>
  );
}
