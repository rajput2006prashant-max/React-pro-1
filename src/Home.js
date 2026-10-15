// import { Fragment } from "react/jsx-runtime";
import myimg from "./image/home.jpg";
import { FaHeart } from "react-icons/fa";
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
            <span>❤️</span>Health Comes First
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
                <td>Receive Patients</td>
                <td>Expert Doctor</td>
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
             <h3>🩺<br/> General Medicine</h3>
            <p>Primary care for a healthier you.</p>
            <a href="/">Learn More →</a>
          </div>
          <div className="service-card">
            <h3><FaHeart/><br/>Car</h3>
            <p>Advanced heart care you can trust.</p>
            <a href="/">Learn More →</a>
          </div>
          <div className="service-card"> 
            
          </div>
          <div className="service-card"></div>
          <div className="service-card"></div>
          <div className="service-card"></div>
          <div className="service-card"></div>
          <div className="service-card"></div>
        </section>
      </div>
    </div>

    // -------------------------services---------------------------//
  );
}
export default Home;
