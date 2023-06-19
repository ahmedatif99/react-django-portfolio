import "./index.css";
import decor1 from "../../images/decoration/dots-1.png";
import reactagle from "../../images/decoration/Rectangle-7.png";
import shady from "../../images/decoration/dots.png";

const AboutMe = ({ about, intro }) => {
  return (
    <>
      {about &&
        about.map((data, idx) => (
          <main id="about" key={idx}>
            <div className="aboutMe-container">
              <div className="about-decor">
                <div className="about-dots">
                  <img src={decor1} alt="" />
                </div>
                <div className="about-rect">
                  <img src={reactagle} alt="" />
                </div>
                <div className="about-shady">
                  <img src={shady} alt="" />
                </div>
              </div>
              <div className="abouMe-row">
                <div
                  className=" col-lg-6 col-md-5 col-sm-12 about-img"
                  data-aos="fade-up-right"
                >
                  <img src={data.about_avatar} alt="" />
                </div>
                <div
                  className=" col-lg-6 col-md-7  col-sm-12 about_myinfo"
                  data-aos="fade-up-left"
                >
                  <div className="title">
                    <h2>{data.title}</h2>
                    <h3>{data.title_2}</h3>
                  </div>
                  <div className="about-description">
                    <div id="foo" unselectable="on" className="unselectable">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${data.description_one}`,
                        }}
                      />
                    </div>
                  </div>

                  {intro &&
                    intro.map((list, idx) => (
                      <div className="itscv" key={idx}>
                        <a
                          href={list.cv}
                          download="RESUME.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="download-cv">
                            Download Cv <i className="bx bx-download"></i>
                          </button>
                        </a>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </main>
        ))}
    </>
  );
};

export default AboutMe;
