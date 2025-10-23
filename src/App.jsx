import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import Header from "./Components/Header/Header.jsx";
import Projects from "./Components/Projects/Projects";
import Aboutme from "./Components/Aboutme/Aboutme.jsx";
import Form from "./Components/Form/Form.jsx";
import Services from "./Components/Services/Services.jsx";
import Loader from "./Components/Loader/Loader.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>

      {loading && <Loader />}
      <Header />
      <Aboutme />
      <Projects />
      <Services />
      <Form />
    </div>
  );
}

export default App;
