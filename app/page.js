import DesignSection from "@/components/design/DesignSection";
import Home from "@/components/Home/Home";
import React from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import MyPortfolio from "./MyPortfolio/MyPortfolio";
import ServiceCard from './Services/ServiceCard';


const page = () => {
  return (
    <div>
      <DesignSection>
        {" "}
        <Home></Home>
        <About></About>
        <MyPortfolio></MyPortfolio>
        <Contact></Contact>
        <ServiceCard></ServiceCard>
      </DesignSection>
    </div>
  );
};

export default page;
