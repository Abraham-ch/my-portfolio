import { ListItem } from '../components/ListItem';

const Experience = () => {
  return (
    <section className="px-8 pb-12 h-full flex flex-col justify-center min-[420px]:h-full">
      <h2 className="text-2xl font-bold text-blue-950 dark:text-yellow-400 pb-10">
        Experience
      </h2>
      <ol className="relative border-s dark:border-orange-200 border-black ml-3">
        <ListItem
          date="November 2024 - Current"
          companyName="Freenlance"
          role='Frontend Developer'
          subtitle1='JW Control: '
          description="Designed and deployed a user interface for JW Control using the Astro framework. The application was hosted on Vercel and linked to a Cloudflare-managed domain. (jw-control.com)"
          subtitle2='Galoiss Academy: '
          description2="Developed a QR-based attendance system enabling professors, directors, or administrators to scan QR codes to mark students as present. The platform provides detailed reports on attendance, student data, and key metrics through multiple charts. It also allows for student registration and enrollment, organized by period, semester, and grade, ensuring scalability for future features like parental tracking of students academic progress. (qr-assistance.vercel.app)"
        />
        <ListItem
          date="September 2023 - November 2024"
          companyName="SkyTech contributor"
          role='Frontend Developer - UI/UX Designer'
          description="Designed user-centered interfaces, applying usability and accessibility principles to ensure an intuitive and seamless experience. Used Figma to prototype and create designs, ensuring responsive and crossplatform compatibility."
          link1="https://skytech-services.vercel.app/"
        />
        <ListItem
          date="August - September 2023"
          companyName="Breath module - Developing landing of Air Quality measurement system"
          description="Designed an air quality module using an ESP32, integrating sensors to measure CO2, PM2.5, temperature, pressure, and humidity. Calibrated the SCD40 sensor to classify air quality into three ranges: good, decent, and unhealthy. Developed a landing page for the platform to display real-time data."
          link1='https://surichakra.vercel.app/'
          link2="https://github.com/Abraham-ch/Breath-project/blob/main/InformeFinal_Digitales_Calle_Chafloque.pdf"
        />
      </ol>
    </section>
  )
};

export { Experience }