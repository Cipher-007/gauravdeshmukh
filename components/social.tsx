import Link from "next/link";
import { Github, Instagram, Linkedin, Twitter } from "./icons";

export default function Socials() {
  const socialMedia = [
    {
      name: "Github",
      url: "https://github.com/Cipher-007",
      logo: <Github />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/cipher__07",
      logo: <Instagram />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/cipher__27",
      logo: <Twitter />,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/gauravdeshmukh07",
      logo: <Linkedin />,
    },
  ];

  return (
    <aside className="fixed bottom-0 left-[40px] right-auto text-[#8892b0]">
      {socialMedia.map((social, i) => (
        <div
          className="px-[10px] py-[13px] hover:-translate-y-1 hover:scale-110 hover:text-[#64ffda]"
          key={i}
        >
          <Link href={social.url}>{social.logo}</Link>
        </div>
      ))}
      <div className="mx-auto mt-5 h-[90px] w-[1px] bg-[#a8b2d1] content-none" />
    </aside>
  );
}
