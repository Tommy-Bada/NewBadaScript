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
      <p>
        I'm a dedicated full stack developer with a relentless drive to be world
        class. I'm committed to mastering the craft and delivering extraordinary
        products.
      </p>
    </div>
  );
}

export default About;
