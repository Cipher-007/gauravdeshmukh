import type { Project } from "@/lib/types";
import FeaturedCard from "../featured-card";

export default function Featured() {
  const featureProjects: Project[] = [
    {
      title: "ProjectVerse",
      description:
        "A productivity-focused project management app with streamlined organization and seamless multi-tenancy support for efficient team collaboration and task management.",
      tech: [
        "Node",
        "React",
        "Next.js",
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
        "A personal diary app using AI-driven analysis, powered by OpenAI's GPT-3 Turbo model. Enhances user experience with automated entry summaries, mood assessment, and sentiment scores.",
      tech: [
        "SQL",
        "Node",
        "React",
        "Clerk",
        "OpenAI",
        "Next.js",
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
    <section className="snap-center pt-40 text-[#ccd6f6]" id="work">
      <div className="flex gap-x-2 pb-10">
        <h2 className="self-end font-mono text-base text-[#64ffda] md:text-xl lg:text-2xl">
          02.
        </h2>
        <h2 className="text-lg font-bold text-[#ccd6f6] md:text-2xl lg:text-3xl">
          Some Things I&apos;ve Built
        </h2>
        <div className="h-[1px] w-[30%] self-center bg-[#233554] content-none md:ml-5" />
      </div>
      <ul>
        {featureProjects.map((project, i) => (
          <FeaturedCard project={project} key={i} index={i} />
        ))}
      </ul>
    </section>
  );
}
