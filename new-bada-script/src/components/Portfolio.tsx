import "./Portfolio.css";
import Project from "./Project";

function Portfolio() {
  const projects = [
    {
      image:
        "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1757835389/Screenshot_2025-09-14_at_08.02.03_f08jw5.png",
      title: "SERVAURA",
      description: "A Luxury Home Service Brand with subscription based plans",
      url: "https://servaura.com",
      stacks: "PERN Stack",
    },
    {
      image:
        "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1757835441/Screenshot_2025-09-14_at_08.05.24_keyfsc.png",
      title: "AROMETA",
      description: "Customized Chef Prepared meal ordering and delivery system",
      url: "https://arometa.co.uk",
      stacks: "MERN Stack",
    },
    {
      image:
        "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1702827321/Portfolio/ziara_uxazgg.png",
      title: "Ziara",
      description: "A Creative fashion E-commerce Website",
      url: "https://ziara-fashion.netlify.app",
      stacks: "Vanilla JS + TailwindCSS + GSAP",
    },
    {
      image:
        "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1699171818/Portfolio/plwlsn_vzfx1b.png",
      title: "PL-WLSN Stores",
      description: "A Men's fashion store for exclusive wears for PLWLSN Brand",
      url: "https://plwlsn.netlify.app",
      stacks: "React + CSS + Paystack",
    },
    {
      image:
        "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1699171792/Portfolio/electpoll_k3ibnd.png",
      title: "Electpoll",
      description:
        "A voting app that is used for conducting elections and polls in institutions and organizations",
      url: "https://electpoll.com",
      stacks: "React JS + Airtable",
    },
    {
      image:
        "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1758864820/Screenshot_2025-09-26_at_06.31.21_wmjt1n.png",
      title: "Titaja",
      description: "A product marketing website for marketing teams",
      url: "https://www.titaja.com/",
      stacks: "Webflow",
    },
    {
      image:
        "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1758864848/Screenshot_2025-09-26_at_06.31.52_segvwr.png",
      title: "Hollam Recruit",
      description: "A marketplace for teachers and learners",
      url: "https://www.hollamrecruit.co.uk/",
      stacks: "Webflow",
    },
    {
      image:
        "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1699171780/Portfolio/sanwo_fi6nb8.png",
      title: "Sanwo Landing Page",
      description:
        "A landing page for a fintech in Ibadan that helps with escrow payments",
      url: "https://sanwo-homepage.netlify.app",
      stacks: "React + CSS",
    },
    // {
    //   image:
    //     "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1702827298/Portfolio/starwars_xhct17.png",
    //   title: "Star Wars",
    //   description: "A Starwar movies app that fetches data from an API",
    //   url: "https://sunwars.netlify.app",
    //   stacks: "React js + TailwindCSS + Starwars API",
    // },
    // {
    //   image:
    //     "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1699171793/Portfolio/countrydetailer_pvqaxc.png",
    //   title: "Country API",
    //   description: "A counrty detailer app that fetches data froman API",
    //   url: "https://countrydetailer.netlify.app",
    //   stacks: "JavaScript + CSS + Country API",
    // },
  ].map((project) => (
    <Project
      key={project.title}
      url={project.url}
      title={project.title}
      stacks={project.stacks}
      image={project.image}
      description={project.description}
    />
  ));

  return (
    <main className="portfolio-section" id="projects">
      <h1>Some of my Projects!</h1>
      <div>{projects}</div>
    </main>
  );
}

export default Portfolio;
