import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/AboutMe/index";
import ContactMe from "./components/ContactMe/index";
import Footer from "./components/Footer/index";
import Intro from "./components/Intro/index";
import Projects from "./components/MyWork/index";
import Navbar from "./components/Nav/index";
import Services from "./components/Services/index";
import Progress from "./components/Skills/index";
import Email from "./components/EmailMe/index";
import $ from "jquery";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAbout,
  getContact,
  getIntro,
  getLanguages,
  getProjects,
  getServices,
  getSocial,
} from "./store/API/utils";

function App() {
  // Preloader
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(1)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  const { about } = useSelector((state) => state.about);
  const { contact } = useSelector((state) => state.contact);
  const { intro } = useSelector((state) => state.intro);
  const { languages } = useSelector((state) => state.languages);
  const { projects } = useSelector((state) => state.projects);
  const { services } = useSelector((state) => state.services);
  const { social } = useSelector((state) => state.social);
  const dispatch = useDispatch();

  useEffect(() => {
    const getdata = setTimeout(() => {
      dispatch(getAbout());
      dispatch(getIntro());
      dispatch(getContact());
      dispatch(getLanguages());
      dispatch(getProjects());
      dispatch(getServices());
      dispatch(getSocial());
    }, 0);

    return () => {
      clearTimeout(getdata);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <div id="preloader">
          <h2 className="name-load  animate-charcter">l O A D I N G</h2>
        </div>
        <div className="homepage">
          <Navbar />
          <Intro intro={intro} social={social} />
        </div>
        <AboutMe about={about} intro={intro} />
        <Services services={services} />
        <Progress languages={languages} />
        <Projects projects={projects} />
        <ContactMe contact={contact} />
        <Email contact={contact} />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
