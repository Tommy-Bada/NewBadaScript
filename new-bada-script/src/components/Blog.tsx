import "./Blog.css";
import Project from "./Project";

function Blog() {
  const articles = [
    {
      image:
        "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1699171818/Portfolio/fyi_pjeinz.png",
      title: "First Year In",
      description:
        "An article about my first year in the tech industry, and how I got here. You might find it inspiring, but it is mostly for documentation purpose.",
      url: "https://medium.com/@tomiwabada/first-year-in-9e1b8b9cb84",
      stacks: "Medium",
    },
    {
      image:
        "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1714452797/Portfolio/staying_motivated_uc3e0e.png",
      title: "Staying Motivated as a Self Learning Developer",
      description:
        "A guide on how to stay motivated as a self-taught developer, from my personal experience.",
      url: "https://medium.com/@tomiwabada/staying-motivated-as-a-self-learning-developer-6c68ab66252a",
      stacks: "Medium",
    },
    {
      image:
        "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1714452795/Portfolio/second_year_uilwki.png",
      title: "My second year as a developer",
      description:
        "A guide on how to stay motivated as a self-taught developer, from my personal experience.",
      url: "https://medium.com/@tomiwabada/second-year-already-1244c3cac093",
      stacks: "Medium",
    },
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
    <main className="blog-section" id="blog">
      <h1>I write seldomly!</h1>
      <div>{articles}</div>
    </main>
  );
}

export default Blog;
