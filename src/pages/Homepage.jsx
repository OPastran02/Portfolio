import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Herosection from "../components/Sections/Herosection";

function Homepage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      return (
        <Layout>
          <Herosection />
        </Layout>
      );
}

export default Homepage;
