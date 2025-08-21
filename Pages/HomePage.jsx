import "../Pages/HomePage.css";
import Chatbot from "../Component/Chatbot";
import Weather from "../Component/weather";
import Allsection from "../Component/Allsection";


const HomePage = () => {
  return (
    <div className="home-container">
      <section className="intro">
        <h2> LearnSphere </h2>
      </section>
       <h2>Course we Offer</h2> 

        <Allsection/>
      
        <Weather/>

        <hr></hr>
       
        <Chatbot/>

      <hr />

    </div>
  );
};

export default HomePage;
