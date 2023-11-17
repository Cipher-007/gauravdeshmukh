export default function About() {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "C++",
    "tRPC",
    "LangChain",
    "GPT-3.5-turbo",
  ];
  return (
    <section
      id="about"
      className="snap-center flex-col px-28 py-24 text-lg text-[#8892b0] 2xl:px-80"
    >
      <div className="flex">
        <div className="flex gap-x-2">
          <h2 className="self-end font-mono text-[#64ffda]">01.</h2>
          <h2 className="text-2xl font-bold text-[#ccd6f6]">About Me</h2>
        </div>
        <div className="ml-4 h-[1px] w-[25%] self-center bg-[#233554] content-none" />
      </div>
      <p className="pt-10">
        Hello! My name is Gaurav and I enjoy creating things that live on the
        internet. I am a diligent and enthusiastic software engineering graduate
        with a deep-seated passion for crafting efficient code and developing
        innovative solutions. While I may be a fresher in the industry, my
        commitment to learning, coupled with my hands-on experience in various
        programming languages and technologies, drives my ambition to excel in
        the field.
      </p>
      <p className="pt-6">
        I am an avid learner, continuously honing my skills in software
        development, problem-solving, and staying abreast of the latest industry
        trends.
      </p>
      <p className="pt-6">
        Here are a few technologies I&apos;ve been working with recently:
      </p>
      <ul className="grid grid-cols-2 gap-y-2 pt-5">
        {skills.map((skill, i) => (
          <li
            key={i}
            className="before:mr-3 before:text-[#64ffda] before:content-['▹']"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
