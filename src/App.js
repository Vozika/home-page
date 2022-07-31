import "./App.scss";
import Header from "./containers/header/Header";
import Top from "./containers/top/Top";
import About from "./containers/about/About";
import Design from "./containers/design/Design";
import Apparel from "./containers/apparel/Apparel";
import Code from "./containers/code/Code";
import Skills from "./containers/skills/Skills";
import Contact from "./containers/contact/Contact";

import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";

function App() {
  return (
    <div className="App">
      <div className="splash">
        <Header />
        <Top />
      </div>

      <About />
      <Skills
        icon001={<SiAdobephotoshop />}
        icon002={<SiAdobeillustrator />}
        icon003={<SiAdobeindesign />}
        icon004={<SiAdobepremierepro />}
      />
      <Design />
      <Skills
        icon001={<FaReact />}
        icon002={<FaHtml5 />}
        icon003={<FaCss3Alt />}
        icon004={<FaSass />}
      />
      <Code />
      <Apparel />
      <Contact />
    </div>
  );
}

export default App;
