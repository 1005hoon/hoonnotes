import Link from "next/link";

export function MainNav() {
  return (
    <header className="font-display mb-32 flex flex-col items-start">
      <Link className="font-medium" href="/">
        Seunghoon Oh
      </Link>
      <span className="text-gray-1000 font-medium">Frontend Engineer</span>
    </header>
  );
}
