import "./Project.css";
interface ProjectProps {
  url: string;
  image: string;
  title: string;
  stacks: string;
  description: string;
}

function Project(props: ProjectProps): JSX.Element {
  return (
    <a href={props.url}>
      <div className="project-section">
        <div>
          <img
            src={props.image}
            alt={props.title}
            loading="lazy"
            sizes="(max-width: 320px) 300px,
            300px"
          />
        </div>
        <h2>{props.title}</h2>
        <h3>{props.stacks}</h3>
        <p>{props.description}</p>
      </div>
    </a>
  );
}
export default Project;
