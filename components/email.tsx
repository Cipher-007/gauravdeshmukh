import Link from "next/link";

export default function Email() {
  return (
    <aside className="fixed bottom-0 left-auto right-[40px]">
      <Link
        href="mailto:gaurav7deshmukh@gmail.com"
        className="font-mono text-xs text-gray-400 [writing-mode:vertical-lr]"
      >
        gaurav7deshmukh@gmail.com
      </Link>
      <div className="mx-auto mt-6 h-[90px] w-[1px] bg-[#a8b2d1] content-none" />
    </aside>
  );
}
