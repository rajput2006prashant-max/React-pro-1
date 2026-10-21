// import { Fragment } from "react/jsx-runtime";
import myimg from "./image/home.jpg";
import { FcLike } from "react-icons/fc";
import { FaHeartPulse } from "react-icons/fa6";
import { FaPersonPregnant } from "react-icons/fa6";
import { FaBone } from "react-icons/fa";
import { FaTooth } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa6";
import { FaSyringe } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import doctorVideo from "./video/doctor.mp4";

// const xyz="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScIaFgccuJf95QorURBEgQlzF7X_rc3Ou4T3VR5nTGXQ&s=10"

function Home() {
  return (
    <div className="outer">
      <div className="navbar">
        <div className="logo">
          <strong>
            Health<span>+</span>
          </strong>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/"> Our Service</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Reviews</a>
            </li>
            <li>
              <a href="/">Doctors</a>
            </li>
          </ul>
        </div>
        <div className="Livechart-btn">
          <button>Livechart</button>
          <div className="Login-btn">
            <button>Login</button>
          </div>
        </div>
      </div>

      <div className="Herosection">
        <section>
          <h4>
            <span>
              <FcLike />
            </span>
            Health Comes First
          </h4>
          <h1>
            Find your Doctor and <br />
            make an Appliction
          </h1>
          <p>
            Health is very important in our life. We should eat healthy food,
            drink water, exercise daily, and sleep well. Good health keeps us
            happy, active, and strong.
          </p>
          <button>Book Appointment</button>
          <div className="title">
            <table>
              <tr>
                <td>145k+</td>
                <td>50+</td>
                <td>10+</td>
              </tr>
              <tr>
                <td>Receive Patients </td>
                <td> Expert Doctor</td>
                <td>Years of Experience</td>
              </tr>
            </table>
          </div>
        </section>

        <section>
          <img src={myimg} alt="home pic" />
          {/* <img src={xyz} alt="home pic" /> */}
        </section>
      </div>

      <div className="services">
        <section>
          <h5>• Services section</h5>
          <h2>
            Complete Care <br /> for <span>Every Stage </span>of Life
          </h2>
          <p>
            From prevrntive care to specialized treatment, we,re here to support
            you and your loved ones at every step.
          </p>

          <button>View All Services </button>

          <h4>Care for a brighter tomorrow</h4>
        </section>

        <section className="one">
          <div className="service-card">
            <h3>
              🩺
              <br /> General Medicine
            </h3>
            <p>Primary care for a healthier you.</p>
            <a href="/">Learn More →</a>
          </div>

          <div className="service-card">
            <h3>
              <FaHeartPulse />
              <br />
              Cardiology
            </h3>
            <p>Advanced heart care you can trust.</p>
            <a href="/">Learn More →</a>
          </div>

          <div className="service-card">
            <h3>
              <FaPersonPregnant />
              <br />
              Women's Health
            </h3>
            <p>Comprehensive care for every stage.</p>
            <a href="/">Learn More →</a>
          </div>
          <div className="service-card">
            <h3>
              <FaBone />
              <br />
              Orthopedics
            </h3>
            <p>Keep moving towards a better life.</p>
            <a href="/">Learn More →</a>
          </div>
          <div className="service-card">
            <h3>
              <FaTooth />
              <br />
              Dental care
            </h3>
            <p>Healthy smiles for brighter days.</p>
            <a href="/">Learn More →</a>
          </div>
          <div className="service-card">
            <h3>
              <FaBrain />
              <br />
              Menatal Health
            </h3>

            <p>A Stronger mind for a brighter you.</p>
            <a href="/">Learn More →</a>
          </div>

          <div className="service-card">
            <h3>
              <FaSyringe />
              <br />
              Vaccination
            </h3>
            <p>protection for a healthier future.</p>
            <a href="/">Learn More →</a>
          </div>
          <div className="service-card">
            <h3>
              <FaUserDoctor />
              <br />
              Specislized Care
            </h3>
            <p>Expert treatment tailored to you.</p>
            <a href="/">Learn More →</a>
          </div>
        </section>
      </div>
      {/* <div className="two">
          <section className="TT">
          <img src={myimg} alt="home pic" />
          </section>
          <section>
            
          </section>
        </div> */}

      <div className="two">
        <section className="left">
          {/* <img src={myimg} alt="home pic" /> */}
          <video controls autoPlay  loop playsInline width="800">
            <source src={doctorVideo} type="video/mp4" />
          </video>
        </section>

        <section className="right">
          <h5>•Why Choose Carely?</h5>
          <h2>
            More Than Treatment. <br /> for <span>Every Stage </span>of Life
          </h2>
          <p>
            We combine advanced medical expertise with a caring human touch to
            make healthcare simple, compassionate, and accessible to everyone.
          </p>
          <section className="down">
            <div className="box1">
              <h4>
                <FaUsers />
              </h4>
              <h6>20k+</h6>
              <p>Patients Served</p>
            </div>
            <div className="box1">
              <h4>
                <FaHandHoldingHeart />
              </h4>
              <h6>20k+</h6>
              <p>Patients Served</p>
            </div>
            <div className="box1">
              <h4>
                <FaUserDoctor />
              </h4>
              <h6>20k+</h6>
              <p>Patients Served</p>
            </div>
            <div className="box1">
              <h4>
                <FaGlobe />
              </h4>
              <h6>20k+</h6>
              <p>Patients Served</p>
            </div>
          </section>
        </section>
      </div>
    </div>

    // -------------------------services---------------------------//
  );
}
export default Home;
