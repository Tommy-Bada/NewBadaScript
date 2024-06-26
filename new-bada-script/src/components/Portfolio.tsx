import "./Portfolio.css";
import Project from "./Project";

function Portfolio() {
  const projects = [
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
        "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1714452562/Portfolio/wasset_jetsia.png",
      title: "Wasset",
      description:
        "A waste market place that connects waste producers to waste collectors and recyclers",
      url: "https://wasset.io",
      stacks: "React Js + Next JS + TypeScript + Tailwind CSS",
    },
    {
      image:
        "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1702826717/Portfolio/jubal_Dashboard_fcgzig.png",
      title: "Jubal",
      description:
        "A marketplace for Africa's foremost creative and musical talents",
      url: "https://thejubal.com",
      stacks: "Next Js + TypeScript + Tailwind CSS",
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
        "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1702827321/Portfolio/ziara_uxazgg.png",
      title: "Ziara",
      description: "A Creative fashion E-commerce Website",
      url: "https://ziara-fashion.netlify.app",
      stacks: "Vanilla JS + TailwindCSS + GSAP",
    },
    // {
    //   image:
    //     "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1702827283/Portfolio/traka_jprwc6.png",
    //   title: "Traka",
    //   description: "A task management app for tracking daily productivity",
    //   url: "https://traka-manager.netlify.app",
    //   stacks: "React JS + TailwindCSS + Firebase",
    // },
    // {
    //   image:
    //     "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1699171806/Portfolio/metamask_jjllnl.png",
    //   title: "Metamask",
    //   description:
    //     "A web3 real estate app that allows users to rent properties in the metaverse using etherium",
    //   url: "https://rentnft.netlify.app",
    //   stacks: "React Js + CSS",
    // },
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
