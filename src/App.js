import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  async function fetchUser(user) {
    let data = await fetch("https://api.github.com/users/" + user);
    data = await data.json();
    console.log(data);
    setUserData(data);
  }
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetchUser("nanavinay");
  }, []);
  return (
    <div className="App">
      <header className="App-header">
      <div className="links">
          <a
            className="App-link"
            href={userData.blog}
            target="_blank"
            rel="noopener noreferrer"
          >
            Linked In
          </a>
          <a
            className="App-link"
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            GIT
          </a>
        </div>
        <div className="logo-container">
          <img
            src={userData.avatar_url}
            className="App-logo"
            alt={userData.login}
          />
        </div>
        <p id="title">{String(userData.login).toUpperCase()}</p>
        <div className="containerSubject">
          <div className="circle singleWord" id="hybris">Hybris</div>
          <div className="circle singleWord" id="spring">Spring</div>
          <div className="circle singleWord" id="react">React</div>
          <div className="circle singleWord" id="java">Java</div>
          <div className="circle" id="javascript">Java Script</div>
        </div>
        <p id="about">
          2.5+ years of experience in building pixel-perfect, smooth UI, along
          with API integration and debugging on both mobile platforms using
          React Native.
          <br />
          <br />
          2.5+ years of experience in building REST-API with concerning edge
          cases using SpringBoot. Strong in Functional Development and handy in
          interaction with the client, analyzing resolutions for feedback and
          further implementation. Good team player with quick learning
          capability and good environment adaptation.
          <br />
          <br />
          <b>Expertise Area:</b> Java, SpringBoot, JavaScript, TypeScript,
          JavaScript Frameworks.
          <br />
          <b> Frameworks:</b> Spring 4, Spring Boot 2, React, React-Native,
          Hibernate
          <br />
          <b> Mobile Frameworks:</b> React Native <br /> <b>TestTools:</b> Junit
          5, Jest, Enzyme <br />
          <b>Databases:</b> MongoDB, MySQL <br /> <b>Platforms:</b> SAP [y]
          Hybris 6.7, 1905.
          <br />
          <b> BuildTools:</b> Gradle 5.4.1, ANT 1.10.5, Maven 3.5 <br />{" "}
          <b> Programming Tools: </b>Eclipse, Visual Studio Code <br /> New
          Technologies Following: Java11, Spring Security
        </p>
       
      </header>
    </div>
  );
}

export default App;
