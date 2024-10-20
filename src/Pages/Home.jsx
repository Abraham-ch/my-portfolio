import { Main } from "../sections/Main";
import { Experience } from "../sections/Experience";
import { InTouch } from "../sections/InTouch";
import { Technologies } from "../sections/Technologies";
import { Projects } from "../sections/Projects";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto">
          <Main />
          <Experience />
          <Projects />
          <Technologies/>
          <InTouch />
          <footer className="h-10 pb-16 dark:text-gray-100 px-4 text-sm">
            © 2024 Abraham Ch. Some rights reserved and deserved.
          </footer>
    </main>
  );
}
