import React from "react";
import { Link as ScrollLink } from "react-scroll";

const aboutData = {
  cvpath: "media/CVPastran.pdf",
  image: "images/about.png",
  name: "Oscar Marcelo Pastrán",
  location: "Buenos Aires, Argentina",
  birthday: "10 January 1986",
  email: "opastran02@gmail.com",
  aboutMe:
    "FullStack developer, Actually i´m working in the argentinian goberment as a functional analyst, I create apps from scratch, starting from a study of the needs, Database Developer, backend, frontend, deploy to Production, and provide training to the final users",
};

function About() {
  return (
    <div className="row">
      <div className="col-md-3">
        <img src={aboutData.image} alt={aboutData.name} />
      </div>
      <div className="col-md-9">
        <h2 className="mt-4 mt-md-0 mb-4">Hi! I,m Marcelo, based in Argentina.</h2>
        <p className="mb-0">{aboutData.aboutMe}</p>
        <div className="row my-4">
          <div className="col-md-6">
            <p className="mb-2">
              Name: <span className="text-dark">{aboutData.name}</span>
            </p>
            <p className="mb-0">
              Birthday: <span className="text-dark">{aboutData.birthday}</span>
            </p>
          </div>
          <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
            <p className="mb-2">
              Location: <span className="text-dark">{aboutData.location}</span>
            </p>
            <p className="mb-0">
              Email: <span className="text-dark">{aboutData.email}</span>
            </p>
          </div>
        </div>
        <a href={aboutData.cvpath} className="btn btn-default mr-3">
          <i className="icon-cloud-download"></i>Download CV
        </a>
        <ScrollLink
          activeClass="active"
          to="section-contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-alt mt-2 mt-md-0 mt-xs-2"
        >
          <i className="icon-envelope"></i>Contact me
        </ScrollLink>
      </div>
    </div>
  );
}

export default About;
