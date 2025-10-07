import "./About.css";

function About() {
  return (
    <div className="about-section" id="bio">
      <div className="profile-picture">
        <img
          src="https://res.cloudinary.com/dhuoa5mmo/image/upload/c_crop,ar_1:1/v1757837521/IMG-20241222-WA0058_rqqonj.jpg"
          alt="profile picture"
          loading="lazy"
          width="300"
          height="auto"
        />
      </div>
      <h1>Hello, I am Tomiwa Bada</h1>
      <h2> &lt; BadaScript /&gt;</h2>
      <p className="about-text">
        I’m a <span>Front-end Developer</span> driven by aesthetics and
        simplicity. I like to think of myself as an abstract painter — with the
        browser as my canvas and <span>JavaScript</span> as my brush.
      </p>
      <ul className="stack-list">
        <li>TypeScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>GSAP</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
      </ul>
    </div>
  );
}

export default About;
