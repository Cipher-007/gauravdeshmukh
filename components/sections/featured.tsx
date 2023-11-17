import type { Project } from "@/lib/types";
import FeaturedCard from "../featured-card";

export default function Featured() {
  const featureProjects: Project[] = [
    {
      title: "ProjectVerse",
      description:
        "A productivity-focused project management app with streamlined organization and seamless multi-tenancy support for efficient team collaboration and task management.",
      tech: [
        "Next.js",
        "React",
        "Node",
        "Drizzle",
        "TypeScript",
        "Postgresql",
        "Tailwind CSS",
      ],
      links: {
        github: "https://github.com/cipher-007/projectverse",
        deploy: "https://projectverse.vercel.app",
      },
      image: "/Home.png",
    },
    {
      title: "Diary Insights",
      description:
        "Developed a personal diary app using AI-driven analysis, powered by OpenAI's GPT-3 Turbo model. Enhances user experience with automated entry summaries, mood assessment, and sentiment scores.",
      tech: [
        "Next.js",
        "React",
        "SQL",
        "Node",
        "Clerk",
        "OpenAI",
        "LangChain",
        "TypeScript",
        "Tailwind CSS",
      ],
      links: {
        github: "https://github.com/Cipher-007/Journal",
        deploy: "https://diaryinsights.vercel.app/",
      },
      image: "/DiaryInsights.png",
    },
  ];
  return (
    <section
      className="snap-center px-28 pt-40 text-[#ccd6f6] 2xl:px-[21rem]"
      id="work"
    >
      <div className="flex gap-x-2 pb-10">
        <h2 className="self-end font-mono text-xl text-[#64ffda]">02.</h2>
        <h2 className="text-3xl font-bold text-[#ccd6f6]">
          Some Things I&apos;ve Built
        </h2>
        <div className="ml-5 h-[1px] w-[30%] self-center bg-[#233554] content-none" />
      </div>
      {featureProjects.map((project, i) => (
        <FeaturedCard project={project} key={i} index={i} />
      ))}
    </section>
  );
}
