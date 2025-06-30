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
        companyName="Freelance"
        role="Frontend Developer"
        projects={[
          {
            title: "JW Control",
            description: "Designed and deployed a user interface for JW Control using the Astro framework. The application was hosted on Vercel and linked to a Cloudflare-managed domain.",
            links: [
              { url: "https://jw-control.com", label: "Live Site" }
            ]
          },
          {
            title: "Galoiss Academy",
            description: "Developed a QR-based attendance system enabling professors, directors, or administrators to scan QR codes to mark students as present. The platform provides detailed reports on attendance, student data, and key metrics through multiple charts. It also allows for student registration and enrollment, organized by period, semester, and grade, ensuring scalability for future features like parental tracking of students academic progress.",
            links: [
              { url: "https://qr-assistance.vercel.app", label: "Live Demo" }
            ]
          },
          {
            title: "Bess Solar",
            description: "Developed a responsive e-commerce platform for Bess Solar, a clean energy company. The platform features a CMS integration, shopping cart functionality, and integrated quotation system with WhatsApp/email routing. It also includes a dashboard for tracking orders, customers, and sales.",
            links: [
              { url: "https://bess-solar.vercel.app", label: "Live Site" }
            ]
          }
        ]}
      />

      <ListItem
        date="September 2023 - November 2024"
        companyName="SkyTech"
        role="Frontend Developer - UI/UX Designer"
        projects={[
          {
            title: "Contributor & Interface Design",
            description: "Designed user-centered interfaces, applying usability and accessibility principles to ensure an intuitive and seamless experience. Used Figma to prototype and create designs, ensuring responsive and cross-platform compatibility.",
            links: [
              { url: "https://skytech-services.vercel.app/", label: "Live Site" }
            ]
          }
        ]}
      />

      <ListItem
        date="August - September 2023"
        companyName="Breath Module Project"
        role="Full-Stack Developer"
        projects={[
          {
            title: "Air Quality Measurement System",
            description: "Designed an air quality module using an ESP32, integrating sensors to measure CO2, PM2.5, temperature, pressure, and humidity. Calibrated the SCD40 sensor to classify air quality into three ranges: good, decent, and unhealthy. Developed a landing page for the platform to display real-time data.",
            links: [
              { url: "https://surichakra.vercel.app/", label: "Live Demo" },
              { url: "https://github.com/Abraham-ch/Breath-project/blob/main/InformeFinal_Digitales_Calle_Chafloque.pdf", label: "Technical Report" }
            ]
          }
        ]}
      />
      </ol>
    </section>
  )
};

export { Experience }