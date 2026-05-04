import "../styles/home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      
      <nav className="navbar">
    <div className="nav-container">

    {/* Logo */}
    <div className="logo">Trifinity</div>

    {/* Links */}
    <div className="nav-links">
      <a href="#">Home</a>
      <a href="#">Tutor</a>
      <a href="#">Student</a>
      <a href="#">Contact</a>
    </div>

  </div>
    </nav>

      {/* ✅ Section 2 */}
      <div className="section-2">
  <section className="secondSection">
    <div className="secondSectionContainer">

      {/* LEFT IMAGE */}
      <div className="vrImageSection">
        <img src="/images/vrImage.png" className="vrImage" alt="" />
      </div>

      {/* TEXT */}
      <div className="content">
        <h1 className="heading">
          Building Great Things <br /> Together
        </h1>

        <h2 className="subheading">
          TRIFINITY TUTORS
        </h2>

        <p className="desc">
          Experience personalized learning with expert tutors, tailored sessions, and a supportive academic community.
        </p>

        <div className="buttons">
          <button className="primaryBtn" onClick={() => navigate("/tutor")}>
            Register As a Tutor
          </button>
          <button className="primaryBtn" onClick={() => navigate("/student")}>
            Register As a Student
          </button>
          {/* <button className="secondaryBtn">Learn More</button> */}
        </div>
      </div>

      {/* BACKGROUND ARROW */}
      <div className="bgArrow">
        <img src="/images/bgArrowImg.png" alt="" />
      </div>
      

    </div>
  </section>

  <div className="desc">
  <div className="desc">

    <h2 className="desc-heading">Get in Touch</h2>

    <p className="contact-subtext">
      Have questions or want to connect with Trifinity Tutors? Reach out anytime.
    </p>

    <div className="contact-grid">

        <p>+91 8085150774</p>
        <p>trifinitytutors@gmail.com</p>
        <p>Pune, Maharashtra</p>

    </div>

  </div>
</div>
    </div>


    </div>
  );
}

export default Home;