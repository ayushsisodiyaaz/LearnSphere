import React from "react";

const Section = ({title,despriction}) => {
  return (
    <section style={{ padding: "2rem", maxWidth: "400px", margin: "0 auto",  }}>
      <h2>{title}</h2>
      <p>
        {despriction}
      </p>
    </section>
  );
};

export default Section;