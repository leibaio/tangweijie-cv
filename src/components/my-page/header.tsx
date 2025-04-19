import { ModeToggle } from "../mode-toggle";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row md:justify-between w-full items-center md:items-start border-b-2 pb-6 md:pb-4">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-3xl font-bold mb-4">leibaio</h1>
        <h2 className="text-xl mb-4 md:mb-0">Frontend Developer</h2>
      </div>
      <div className="mt-4 md:mt-0">
        <ModeToggle />
      </div>
    </header>
  );
}
