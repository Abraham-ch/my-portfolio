import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="App">
      <header class="bg-transparent px-6 max-w-5xl mx-auto sm:rounded-full -m-b-4 shadow-sm">
        <navbar class="flex h-16 items-center justify-between">
          <button class="rounded p-1 -ml-1 text-slate-500 hover:text-slate-100 hover:bg-blue-950 dark:hover:bg-yellow-400 dark:hover:text-white dark:text-yellow-500 focus:ring-2 focus:ring-slate-50 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-menu-deep"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6h16" />
              <path d="M7 12h13" />
              <path d="M10 18h10" />
            </svg>
          </button>
          <div class="hidden sm:flex space-x-6">
            <a
              href="#about-me"
              class="p-2 m-1 transition-colors hover:text-blue-800 dark:hover:text-white dark:text-yellow-400"
            >
              About me
            </a>
            <a
              href="#projects"
              class="p-2 m-1 transition-colors hover:text-blue-800 dark:hover:text-white dark:text-yellow-400"
            >
              Projects
            </a>
            <a
              href="#contact"
              class="p-2 m-1 transition-colors hover:text-blue-800 dark:hover:text-white dark:text-yellow-400"
            >
              Contact
            </a>
            <div class="flex">
              <button
                class="ml-2 transition-colors hover:text-blue-800 dark:hover:text-white dark:text-yellow-500 rounded-full"
                onClick={handleChangeTheme}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-sun-filled h-6 dark:hidden"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"
                    stroke-width="0"
                    fill="currentColor"
                  />
                  <path
                    d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z"
                    stroke-width="0"
                    fill="currentColor"
                  />
                  <path
                    d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"
                    stroke-width="0"
                    fill="currentColor"
                  />
                  <path
                    d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
                    stroke-width="0"
                    fill="currentColor"
                  />
                  <path
                    d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
                    stroke-width="0"
                    fill="currentColor"
                  />
                  <path
                    d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z"
                    stroke-width="0"
                    fill="currentColor"
                  />
                  <path
                    d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"
                    stroke-width="0"
                    fill="currentColor"
                  />
                  <path
                    d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"
                    stroke-width="0"
                    fill="currentColor"
                  />
                  <path
                    d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
                    stroke-width="0"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button
                class="ml-2 transition-colors hover:text-blue-800 dark:hover:text-white dark:text-yellow-500 rounded-full"
                onClick={handleChangeTheme}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-moon hidden dark:block"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                </svg>
              </button>
            </div>
          </div>
        </navbar>
        <div class="space-y-1 pb-3 border-t py-3 pt-2 sm:hidden">
          <a
            href="#about-me"
            class="bg-yellow-400 text-white block px-3 py-2 rounded-md transition-colors"
          >
            About me
          </a>
          <a
            href="#projects"
            class="text-slate-300 hover:bg-yellow-400 hover:text-white block px-3 py-2 rounded-md transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            class="text-slate-300 hover:bg-yellow-400 hover:text-white block px-3 py-2 rounded-md transition-colors"
          >
            Contact
          </a>
        </div>
      </header>
    </div>
  );
}
export default App;
