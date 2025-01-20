interface ListItemProps {
  date: string;
  companyName: string;
  subtitle1: string;
  description: string;
  subtitle2: string;
  description2: string;
  role: string;
  link1: string;
  link2: string;
}

export const ListItem = ( { date, companyName, subtitle1, description, subtitle2, description2, role, link1, link2 }: ListItemProps ) => {
  return (
    <li className="mb-8 ms-4">
      <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700 dark:border-orange-200 dark:bg-orange-200"></div>
      <time className="mb-1 text-sm font-semibold leading-none text-sky-800 dark:text-orange-200">
        {date}
      </time>
      <h3 className="text-lg font-bold mt-2 dark:text-orange-400">
        {companyName}
      </h3>
      <p className="text-sm font-normal text-pretty text-sky-700 dark:text-gray-200">
        {role}
      </p>
      <ul className="pb-4 pl-4 dark:text-white">
        <li className="list-disc">
          <p className="pt-2 text-base font-normal text-pretty max-w-3xl dark:text-gray-200">
            <strong className="font-semibold">{subtitle1}</strong>{description}
          </p>
        </li>
        {
          description2 == null ? null : <li className="list-disc"> <p className="pt-2 text-base font-normal text-pretty max-w-3xl dark:text-gray-200">
            <strong className="font-semibold">{subtitle2}</strong>{description2}
          </p>
          </li>
        }
        
      </ul>
      <span className="flex flex-row-reverse gap-x-10 w-fit">
        {link2==null ? null : <a
        target="_blank"
        href={link2}
        className="border-solid px-2 py-1 md:py-2 md:px-4 text-xs md:text-base inline-flex justify-center items-center transition dark:text-gray-400/50 dark:hover:text-orange-400 dark:hover:border-orange-400 hover:text-sky-800 hover:border-sky-800 underline underline-offset-8"
        title="IoT air quality development Github reference"
        rel="noopener noreferrer"
        >
          Reference
        </a>}
        {link1==null ? null : 
        <a target="_blank" href={link1} className="border-transparent border-2 bg-slate-200 dark:bg-transparent dark:border-orange-400 px-2 py-1 md:py-2 md:px-4 text-xs md:text-base inline-flex justify-center items-center transition dark:hover:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-400 dark:hover:text-black font-bold rounded-md hover:text-sky-800 hover:border-sky-800" title="Surichakra web app" rel="noopener noreferrer">Go to the page</a>
        }
      </span>
    </li>
  );
};