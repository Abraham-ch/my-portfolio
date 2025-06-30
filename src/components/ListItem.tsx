interface ListItemProps {
  date: string;
  companyName: string;
  projects?: Array<Project>;
  description?: string;
  link1?: string;
  link2?: string;
}

interface Project {
  title: string;
  description: string;
  links: Array<{ url: string, label: string }>;
}

export const ListItem = ({ 
  date, 
  companyName, 
  projects = [],
  description, 
  link1, 
  link2
}: ListItemProps) => {
  const projectsToRender = projects.length > 0 ? projects : [
    {
      title: companyName,
      description: description,
      links: [
        { url: link1, label: "Demo" },
        { url: link2, label: "Repository" }
      ].filter(link => link.url)
    }
  ];

  return (
    <div className="mb-8 pl-6">
      <div className="mb-2">
      <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700 dark:border-orange-200 dark:bg-orange-200"></div>
        <span className="mb-1 text-sm font-semibold leading-none text-sky-800 dark:text-orange-200">
          {date}
        </span>
      </div>
      
      <h3 className="text-lg font-bold mt-2 dark:text-orange-400">
        {companyName}
      </h3>
      
      <ul className="space-y-6 list-disc pb-4 pl-4 dark:text-white">
        {projectsToRender.map((project, index) => (
          <li key={index} className="rounded-lg shadow-sm">
            {projects.length > 0 && (
              <h5 className="text-md font-medium mb-2">
                {project.title}
              </h5>
            )}
            
            <p className="text-base font-normal text-pretty max-w-3xl dark:text-gray-200 pb-2">
              {project.description}
            </p>
            
            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-transparent border-2 bg-slate-200 dark:bg-transparent dark:border-orange-400 px-2 py-1 md:py-2 md:px-4 text-xs md:text-base inline-flex justify-center items-center transition dark:hover:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-400 dark:hover:text-black font-bold rounded-md hover:text-sky-800 hover:border-sky-800"
                  >
                    {link.label}
                    <svg 
                      className="ml-1 w-3 h-3" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};