import Link from "next/link";
import { Folder, Github, Share } from "./icons";
import type { Project } from "@/lib/types";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="flex h-full flex-col justify-between overflow-auto rounded-md bg-[#112240] p-5 shadow transition-all duration-200 ease-in-out hover:-translate-y-2">
      <div>
        <div className="flex justify-between">
          <Folder />
          <div className="flex gap-x-4">
            <Link href={project.links.github}>
              <Github />
            </Link>
            {project.links.deploy && (
              <Link href={project.links.deploy}>
                <Share />
              </Link>
            )}
          </div>
        </div>
        <div className="py-4 text-lg font-bold">{project.title}</div>
        <div className="text-sm text-[#a8b2d1]">{project.description}</div>
      </div>
      <div className="mt-5">
        {project.tech.map((tech, i) => (
          <span
            className="mr-1 inline-block rounded-md bg-[#233554] px-2 py-1 font-mono text-xs text-[#8892b0]"
            key={i}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
