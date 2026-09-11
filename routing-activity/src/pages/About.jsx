import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "./About.css";

const About = () => {
  const [chef, setChef] = useState(null);

  useEffect(() => {
    async function fetchChef() {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setChef(data.chef);
      } catch (error) {
        console.log(error);
      }
    }
    fetchChef();
  }, []);

  if (!chef) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>

      <section className="hero">
        <div className="hero-content">
          <h2>{chef.name}</h2>
          <p className="intro">{chef.specialty}</p>
          <p className="description">{chef.bio}</p>
          <hr />
          <div className="information">
            <p className="information-title">Years of Experience</p>
            <p>{chef.yearsExperience}</p>
          </div>
          <div className="information">
            <p className="information-title">Location</p>
            <p>{chef.location}</p>
          </div>
          <div className="information">
            <p className="information-title">Email</p>
            <p>{chef.email}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;