import { Main } from "../sections/Main";
import { Experience } from "../sections/Experience";
import { Projects } from "../sections/Projects";
import { InTouch } from "../sections/InTouch";
import { Technologies } from "../sections/Technologies";

export default function Home() {
  return (
    <>
      <div className="top-0 z-[-2] bg-slate-100 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)][background-size:16px_16px][mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-neutral-900">
        <main className="max-w-5xl mx-auto">
          <Main />
          <Experience />
          <Technologies/>
          <Projects />
          <InTouch />
          <footer className="h-10 pb-16 dark:text-gray-100 px-4 text-sm">
            © 2024 Abraham Ch. Some rights reserved and deserved.
          </footer>
        </main>
      </div>
    </>
  );
}
