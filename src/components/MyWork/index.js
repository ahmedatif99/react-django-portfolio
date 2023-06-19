import "./index.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Projects = ({ projects }) => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    navText: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      310: {
        items: 1,
      },
      500: {
        items: 1,
      },
      600: {
        items: 1,
      },
      740: {
        items: 2,
      },
      1000: {
        items: 2.7,
      },
      1300: {
        items: 3,
      },
      1440: {
        items: 3,
      },
    },
  };

  return (
    <div className="mywork " id="work">
      <div className="mywork-title">
        <h2>Check Out My React Projects</h2>

        <h3>My Work</h3>
      </div>
      {projects &&
        projects.map((pro, idx) => (
          <div className="project-row" key={idx}>
            <OwlCarousel className="owl-theme" {...options}>
              <div className="project" data-aos="fade-up">
                <div className="project-img">
                  <img src={pro.image} alt="" className="work-img" />
                </div>

                <div className="date-posted">
                  <div className="who-post">
                    <p className="admin">{pro.language_used}</p>
                  </div>
                </div>
                <div className="work-details">
                  <h2>{pro.title}</h2>
                  <p className="work-info">{pro.Project_info}</p>
                  <div className="project-links">
                    <a
                      href={pro.demo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="learnmore">
                        <i className="fa fa-laptop" aria-hidden="true"></i>
                        &nbsp; Live Demo
                      </h6>
                    </a>
                    <a
                      href={pro.project_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="learnmore">
                        <i className="fa fa-github" aria-hidden="true"></i>
                        &nbsp; Source Code
                      </h6>
                    </a>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        ))}
    </div>
  );
};

export default Projects;
