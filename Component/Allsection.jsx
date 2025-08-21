import React from "react";
import Section from "./section";

const Allsection = () => {
  return (
    <>
    <section style={{ display:"flex",flexWrap:"wrap", gap:"20px"}}>
      
   <Section title="About LearnSphere" despriction="At LearnSphere, we believe that AI & Data Science are shaping the future. Our goal
          is to provide accessible, high-quality, and industry-relevant education to aspiring
          data professionals."/>
          <br></br>
   <Section title="Our Mission" despriction=" To democratize AI education by offering world-class training, ensuring that every
          learner can master data science skills and land high-paying jobs."/>
          <br></br>
   <Section title="Our Vision" despriction="To become the #1 AI & Data Science training institute globally, producing highly
          skilled professionals who drive innovation."/>
          <br></br>
   <Section title="Who We Are" despriction=" We are a team of AI experts, data scientists, and educators dedicated to helping
          students transition into successful AI careers."/>
          <br></br>
   <Section title="What is Data Science?" despriction="Data Science is the field of analyzing, processing, and extracting insights from
          structured and unstructured data using statistics, machine learning, and AI."/>
    </section>
   </>
  );
};

export default Allsection;