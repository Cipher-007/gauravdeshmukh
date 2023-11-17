export default function Hero() {
  return (
    <section className="mx-auto flex h-screen max-w-[1000px] snap-center flex-col items-start justify-center">
      <h1 className="ml-1 font-mono text-[#64ffda]">Hi, my name is</h1>
      <h2 className="mt-6 text-6xl font-bold text-[#ccd6f6]">
        Gaurav Deshmukh.
      </h2>
      <h3 className="mt-2 text-6xl font-bold text-[#8892b0]">
        I build things for the web.
      </h3>
      <p className="pt-8 text-center text-[#8892b0]">
        Aspiring Software Engineer
        <span className="px-2 text-white">|</span>
        Passionate about Building Innovative Solutions
      </p>
    </section>
  );
}
