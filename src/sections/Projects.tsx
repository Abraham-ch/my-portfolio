import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";

import SuriImg from "../img/Projects/Surichakra.webp"
import STImg from "../img/Projects/SmartTransit.webp"
import SkyTechImg from "../img/Projects/SkyTech.webp"
import FigmaImg from "../img/Projects/Figma.webp"

const projects = [
    {
        id: 1,
        title: "Surichakra",
        responsibilities: "UI Design & Development",
        description: "Presenting the design of the dashboard for Surichakra, a web app developed for SkyTech. It provides real-time management of data for air, water, and ground quality IoT devices.",
        imageUrl: `${SuriImg}`,
        link: "https://surichakra.vercel.app/",
        rol: "Design and development of the UI/UX of the landing page, utilizing elements such as design patterns, responsiveness, and best UI/UX practices.",
        tecnologias: {
            Frameworks: ["Vite", "React", "Remix"],
            UI_Libraries: ["Framer Motion", "TailwindCSS"],
            Languages: ["HTML", "CSS", "JavaScript", "TypeScript"],
            Tools_Environments: ["Git"]
        }
    },
    {
        id: 2,
        title: "SkyTech",
        responsibilities: "UI Design & Development",
        description: "Designed and developed a responsive landing page for SkyTech, a consulting company. Delivered a modern, user-friendly interface with optimized performance and mobile compatibility, ensuring a seamless experience across all devices.",
        imageUrl: `${SkyTechImg}`,
        link: "https://skytech-services.vercel.app/",
        rol: "Developed the initial design of the landing page for this project, applying design patterns, responsiveness, and best UI/UX practices.",
        tecnologias: {
            Frameworks: ["Astro"],
            UI_Libraries: ["Shadcn/ui", "Flowbite"],
            Languages: ["HTML", "CSS", "JavaScript", "TypeScript"],
            Tools_Environments: ["Git", "TailwindCSS"]
        }
    },
    {
        id: 3,
        title: "SmartTransit",
        responsibilities: "UI/UX Design",
        description: "Presenting the design for Smart Transit, a web app developed for SkyTech. It provides real-time bus tracking, nearby stops, and route planning, all in one intuitive platform. Designed for efficiency and ease of use.",
        imageUrl: `${STImg}`,
        link: "https://www.figma.com/community/file/1415097760195199937/smart-transit-landing-page",
        rol: "Made changes to the UI/UX in the dashboard configuration and designed the landing page, utilizing design patterns, responsiveness, and UI/UX techniques.",
        tecnologias: {
            Frameworks: ["Remix"],
            UI_Libraries: ["MUI"],
            Languages: ["HTML", "CSS", "TypeScript"],
            Tools_Environments: ["Git"]
        }
    },
    {
        id: 4,
        title: "Figma",
        responsibilities: "UI/UX Design",
        description: "First design of the register for a skin care app, UI can be extrapolated to other topics.",
        imageUrl: `${FigmaImg}`,
        link: "https://www.figma.com/community/file/1429287727958038197/mobile-ui-register",
        rol: "Design and development of the beta (not deployed) using design patterns, responsiveness, and best UI/UX practices.",
        tecnologias: {
            Frameworks: ["Expo", "React Native"],
            UI_Libraries: [],
            Languages: [],
            Tools_Environments: ["Figma"]
        }
    },
];


const Projects = () => {
    const [selectedId, setSelectedId] = useState(0)
    return (
        <section className="md:h-dvh flex flex-col justify-center pb-12 sm:py-0">
            <span className="pb-5 block">
                <h2 className="text-2xl inline font-bold text-blue-950 pl-7 pr-4 dark:text-yellow-400">
                    Projects
                </h2>
                <p className="md:inline dark:text-orange-300 text-sky-900 hidden text-sm">(Click on the project to see more details)</p>
            </span>
            <div className="grid sm:grid-cols-2 grid-rows-2 gap-4 px-7 py-4">
                {
                    projects.map(item => (
                        <motion.div key={item.id} className={`w-fit dark:hover:ring-yellow-500 ring-transparent hover:ring-blue-950 ring-1 transition-all duration-200 bg-black/10 border dark:border-gray-800 rounded-lg text-white place-items-center mx-auto`} onClick={() => setSelectedId(item.id)}>
                            <motion.img src={item.imageUrl} alt={item.title} className="h-fit rounded-lg cursor-pointer" />
                        </motion.div>
                    ))
                }
            </div>
            <AnimatePresence>
                {selectedId && (
                    <motion.div className="fixed inset-0 z-20 flex flex-col items-center h-dvh justify-center backdrop-blur-3xl bg-black/60 text-white"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(0)}>
                        <motion.div className="z-50 md:w-11/12 bg-black/50 rounded-xl flex flex-col justify-center gap-y-2 p-8 md:p-10 lg:p-12 xl:p-16">
                            <motion.h2 className="text-xl md:text-2xl font-semibold text-yellow-400">{projects[selectedId - 1].title}</motion.h2>
                            <motion.h5 className="text-lg md:text-xl font-semibold text-orange-300">{projects[selectedId - 1].responsibilities}</motion.h5>
                            <div className="grid lg:grid-cols-2 gap-8">
                                <div className="w-11/12 flex flex-col gap-y-3">
                                    <motion.p className="md:text-base text-sm">{projects[selectedId - 1].description}</motion.p>
                                    <motion.img src={projects[selectedId - 1].imageUrl} alt={projects[selectedId - 1].title} className="my-2 w-min lg:h-fit rounded-xl" />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <span className="hidden lg:block">
                                        <p className="pb-2">{projects[selectedId - 1].rol}</p>
                                        <div className="grid grid-cols-2 gap-y-2 py-4">
                                            {projects[selectedId - 1].tecnologias.Frameworks.length > 0 && (
                                                <div>
                                                    <h6 className="text-orange-300 text-lg">Frameworks</h6>
                                                    <ul className="list-disc pl-5">
                                                        {projects[selectedId - 1].tecnologias.Frameworks.map(item => (
                                                            <li key={item} className="py-1">{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {projects[selectedId - 1].tecnologias.UI_Libraries.length > 0 && (
                                                <div>
                                                    <h6 className="text-orange-300 text-lg">UI Libraries</h6>
                                                    <ul className="list-disc pl-5">
                                                        {projects[selectedId - 1].tecnologias.UI_Libraries.map(item => (
                                                            <li key={item} className="py-1">{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {projects[selectedId - 1].tecnologias.Languages.length > 0 && (
                                                <div>
                                                    <h6 className="text-orange-300 text-lg">Languages</h6>
                                                    <ul className="list-disc pl-5">
                                                        {projects[selectedId - 1].tecnologias.Languages.map(item => (
                                                            <li key={item} className="py-1">{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {projects[selectedId - 1].tecnologias.Tools_Environments.length > 0 && (
                                                <div>
                                                    <h6 className="text-orange-300 text-lg">Tools/Environments</h6>
                                                    <ul className="list-disc pl-5">
                                                        {projects[selectedId - 1].tecnologias.Tools_Environments.map(item => (
                                                            <li key={item} className="py-1">{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </span>
                                    <motion.a target="_blank" rel="noopener noreferrer" title={projects[selectedId - 1].title} href={projects[selectedId - 1].link} className="border-2 hover:scale-105 border-orange-400 bg-orange-400 rounded-lg w-fit px-6 py-2 font-semibold md:text-base text-sm"> Go there! </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export { Projects } 