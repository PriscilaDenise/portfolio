import { useState } from "react";
import "./App.css";
import picture from "./assets/profile.jpeg"
// import video from "./assets/Bungee video.mp4"

import ResultsComponent from "./app/ResultsComponent";

import AboutComponent from "./app/AboutComponent";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const correctPassword = "denise123"; // This should be set by the user

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="password-screen">
        <div className="password-container">
          <h2>Enter Password to View Profile</h2>
          <form onSubmit={handlePasswordSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
            <button type="submit">Access Profile</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>

          <HeaderComponent toggleDarkMode={toggleDarkMode} />

          <IntroComponent />

      <hr />

          <CareerComponent />

      <hr />

          <AboutComponent />


      <hr />

          <ResultsComponent />


      <hr />

          <ContactComponent />

      
    </div>
  );
}




function ContactComponent(){
  return(
    <>
      <section id="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <p>Feel free to reach out for collaborations or just a friendly chat.</p>
          <p>Email: <a href="mailto:denisepriscilamuwanguzi@gmail.com">denisepriscilamuwanguzi@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/denise-priscila-muwanguzi-b8243924a/">My Profile</a></p>
          <p>GitHub: <a href="https://github.com/PriscilaDenise">My Account</a></p>
        </div>
      </section>
    </>
  );
}

function CareerComponent(){
  return(
    <>
            <section id="career">
        <div className="container">
          <h2>My Career Goals</h2>
          <p>I am committed to advancing cybersecurity, software development, and AI research while shaping tech policy to create secure, innovative, and ethical digital ecosystems. My expertise lies in leveraging cutting-edge technologies to solve complex security challenges, develop scalable software solutions, and drive AI advancements. Additionally, I am passionate about the hotel industry, where I apply my leadership and technological skills to enhance customer experiences and streamline operations. I aspire to influence tech policy to bridge the gap between innovation and regulation, ensuring responsible and impactful technology adoption across industries, including hospitality.</p>
        </div>
      </section>
    </>
  );
}

function IntroComponent(){
  return(
    <>
            <section id="hero">
        <div className="hero-content">
          <img src= {picture} alt="Your Profile" className="profile-photo" />
          <h1>Denise Priscila Muwanguzi</h1>
          <p>I am a second-year Computer Science student with a strong passion for cybersecurity.</p>
          <a href="#projects" className="btn">View My Work</a>
        </div>
      </section>
    </>
  );
}

function HeaderComponent(toggleDarkMode){
  return(
    <>
    <header>
        <nav>
          <div className="logo">DENISE PRISCILA M</div>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#results">Results</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#career">Career Goals</a></li>
            <li><button onClick={toggleDarkMode.toggleDarkMode}>🌑</button></li>
          </ul>
        </nav>
    </header>
    </>
  )
}
export default App;
