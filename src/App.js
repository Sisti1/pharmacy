import "./App.css";
import Consult from "./components/consult";
import Header from "./components/header";
import Home from "./components/home";
import Services from "./components/services";
import Contact from "./components/Contact";
import MessageForm from "./components/MessageForm";


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <Consult />
      <Contact />
      <MessageForm/>
    </div>
  );
}

export default App;
