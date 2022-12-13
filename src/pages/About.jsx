import React, {useEffect} from "react";
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/Items/SectionHeading";
import AboutSection from "../components/Sections/About";
import SkillsBack from "../components/Sections/SkillsBack";
import SkillsFrameworks from "../components/Sections/SkillsFrameworks";
import SkillsOther from "../components/Sections/SkillsOther";


function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <section className="shadow-blue white-bg padding mt-0">
        <SectionHeading title="About Me" />
        <AboutSection />
      </section>

      <section className="shadow-blue white-bg padding">
        <SectionHeading title="Language skills" />
        <SkillsBack />
      </section>

      <section className="shadow-blue white-bg padding">
        <SectionHeading title="Framework Skills" />
        <SkillsFrameworks />
      </section>

      <section className="shadow-blue white-bg padding">
        <SectionHeading title="Other Skills" />
        <SkillsOther />
      </section>
    </Layout>
  );
}

export default About;
