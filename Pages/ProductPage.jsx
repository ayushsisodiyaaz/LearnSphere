import SchoolIcon from "@mui/icons-material/School";
import ArticleIcon from "@mui/icons-material/Article";
import EditDocumentIcon from "@mui/icons-material/EditDocument";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import Button from "@mui/material/Button";
import "../Pages/ProductPage.css";

const ProductPage = () => {
  return (
    <div className="page-container">
      <section className="section">
        <h2>DataSprint – AI & Data Science Bootcamp</h2>
        <p><strong>Duration:</strong> 6 Months | <strong>Mode:</strong> Online + Mentorship</p>
      </section>

      <section className="section">
        <h2>Why Choose DataSprint?</h2>
        <ul className="features">
          <h5><EditDocumentIcon/> Project-Based Learning: Hands-on projects for real-world skills.</h5>
          <h5><LiveTvIcon/> Live Mentorship: Guidance from AI professionals.</h5>
          <h5><ArticleIcon/> Industry-Aligned Curriculum: Designed by top data scientists.</h5>
          <h5><SchoolIcon/> Placement Assistance: Resume building, mock interviews, and job referrals.</h5>
        </ul>
      </section>

    

      <section className="section">
        <h2>Sample Curriculum</h2>
        <table className="curriculum-table">
          <thead>
            <tr>
              <th>Module</th>
              <th>Topics Covered</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1. Python & SQL</td>
              <td>Data types, loops, functions, queries</td>
            </tr>
            <tr>
              <td>2. Statistics & Probability</td>
              <td>Descriptive stats, probability distributions</td>
            </tr>
            <tr>
              <td>3. Machine Learning</td>
              <td>Regression, classification, clustering</td>
            </tr>
            <tr>
              <td>4. Deep Learning</td>
              <td>Neural networks, CNN, RNN</td>
            </tr>
            <tr>
              <td>5. NLP & Computer Vision</td>
              <td>Text analysis, image recognition</td>
            </tr>
            <tr>
              <td>6. AI Deployment</td>
              <td>Model serving, cloud deployment</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section">
        <h2>Ready to Kickstart Your AI Career?</h2>
        <Button type="submit" variant="outlined">Apply Now</Button>
      </section>

    </div>

  
  );
};

export default ProductPage;
