import Link from "next/link";

export default function Contact() {
  return (
    <section
      className="flex snap-center flex-col items-center justify-center px-28 pb-40 pt-56 text-[#ccd6f6] 2xl:px-[21rem]"
      id="contact"
    >
      <div className="flex gap-x-2">
        <h2 className="self-end font-mono text-sm text-[#64ffda]">04.</h2>
        <h2 className="text-[#64ffda]">What&apos;s Next?</h2>
      </div>
      <h2 className="py-4 text-5xl font-bold">Get In Touch</h2>
      <p className="px-52 text-center text-[#8892b0]">
        At present, I am actively seeking new opportunities and welcome any
        professional inquiries or connections. Whether you have a question or
        just want to say hi, I&apos;ll try my best to get back to you!
      </p>
      <Link
        href="mailto:gaurav7deshmukh@gmail.com"
        className="my-10 rounded bg-[#64ffda] font-mono text-sm text-[#64ffda]"
      >
        <div className="rounded border border-[#64ffda] bg-[#0a192f] px-7 py-4 transition-transform hover:-translate-x-1 hover:-translate-y-1">
          Say Hello
        </div>
      </Link>
    </section>
  );
}
