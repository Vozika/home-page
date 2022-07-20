import "./App.scss";
import Header from "./containers/header/Header";
import Top from "./containers/top/Top";
import About from "./containers/about/About";
import Design from "./containers/design/Design";
import Contact from "./containers/contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      
      <Top />
      <About />
      <Design />
      <Contact />
    </div>
  );
}

export default App;
