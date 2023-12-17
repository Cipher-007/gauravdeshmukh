import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, ShareIcon } from "./icons";

type Props = {
  project: Project;
  index: number;
};

export default function FeaturedCard({ project, index }: Props) {
  const link = project.links.deploy
    ? project.links.deploy
    : project.links.github;
  return (
    <li className="mb-20 grid grid-cols-1 rounded shadow-md transition duration-200 ease-in-out last:mb-0 hover:shadow-2xl md:grid-cols-12 md:rounded-none md:shadow-none md:hover:shadow-none">
      <div
        className={cn(
          "row-start-1 row-end-6 flex flex-col bg-[#112242] p-6 md:col-span-6 md:col-start-auto md:bg-inherit md:pt-0 lg:my-auto",
          index % 2 === 0
            ? "md:order-last md:items-end md:pr-0"
            : "md:order-first md:items-start md:pl-0",
        )}
      >
        <p className="font-mono text-xs text-[#64ffda]">Featured Project</p>
        <h3 className="pb-2 text-2xl font-bold text-white md:pb-7 md:text-[#ccd6f6]">
          <Link href={link}>{project.title}</Link>
        </h3>
        <div
          className={cn(
            "relative z-[2] mb-5 text-[#a8b2d1] md:rounded-md md:bg-[#112240] md:p-6 md:shadow-xl lg:text-base",
            index % 2 === 0
              ? "md:-ml-40 md:text-end"
              : "md:-mr-40 md:text-start",
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
              <GithubIcon />
            </Link>
          )}
          {project.links.deploy && (
            <Link
              href={project.links.deploy}
              aria-label="External Link"
              className="external"
            >
              <ShareIcon />
            </Link>
          )}
        </div>
      </div>
      <Link
        href={link}
        className={cn(
          "row-start-1 row-end-6 hidden h-full w-auto bg-[#64ffda] opacity-25 mix-blend-screen md:col-span-7 md:mt-6 md:block md:h-fit md:w-fit md:rounded-md md:opacity-100 md:hover:bg-transparent lg:mt-0",
          index % 2 === 0 ? "md:order-first" : "md:order-last",
        )}
      >
        <Image
          src={project.image!}
          alt={project.title}
          height={1280}
          width={720}
          className="h-full w-full bg-[#0a192f] object-cover mix-blend-multiply brightness-90 contrast-100 grayscale transition hover:brightness-100 hover:contrast-100 hover:grayscale-0 md:rounded md:object-contain"
        />
      </Link>
    </li>
  );
}
