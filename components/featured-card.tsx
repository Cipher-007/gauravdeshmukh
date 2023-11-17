import Link from "next/link";
import { Github, Share } from "./icons";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/types";

type Props = {
  project: Project;
  index: number;
};

export default function FeaturedCard({ project, index }: Props) {
  return (
    <div key={project.title} className="grid grid-cols-3 pb-20">
      <Link
        href={
          project.links.deploy ? project.links.deploy : project.links.github
        }
        className={cn(
          "col-span-2 mt-6 h-fit w-fit rounded-md bg-[#64ffda] mix-blend-screen hover:bg-transparent lg:mt-0",
          index % 2 === 0 ? null : "order-last ml-[4.5rem]",
        )}
      >
        <Image
          src={project.image!}
          alt={project.title}
          height={400}
          width={600}
          className="rounded-md bg-[#0a192f] mix-blend-multiply brightness-90 contrast-100 grayscale transition hover:brightness-100 hover:contrast-100 hover:grayscale-0"
        />
      </Link>
      <div
        className={cn(
          "flex basis-2/5 flex-col lg:my-auto",
          index % 2 === 0 ? "items-end" : "items-start",
        )}
      >
        <p className="font-mono text-xs text-[#64ffda]">
          Featured Project {index}
        </p>
        <h3 className="pb-7 text-2xl font-bold text-[#ccd6f6]">
          <Link href={project.links.deploy}>{project.title}</Link>
        </h3>

        <div
          className={cn(
            "relative z-[2] mb-5 rounded-md bg-[#112240] p-6 text-[#a8b2d1] shadow-xl lg:text-base",
            index % 2 === 0 ? "-ml-40 text-end" : "-mr-40 text-start",
          )}
        >
          {project.description}
        </div>
        {project.tech.length && (
          <ul className="flex flex-wrap gap-x-4 pb-5 font-mono text-sm text-[#a8b2d1]">
            {project.tech.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        )}
        <div className="flex gap-x-5">
          {project.links.github && (
            <Link href={project.links.github} aria-label="GitHub Link">
              <Github />
            </Link>
          )}
          {project.links.deploy && (
            <Link
              href={project.links.deploy}
              aria-label="External Link"
              className="external"
            >
              <Share />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
