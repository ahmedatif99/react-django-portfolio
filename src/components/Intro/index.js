import decor3 from "../../images/decoration/Group-31.png";
import "./index.css";

const Intro = ({ intro, social }) => {
  return (
    <>
      <section className=" intro-page" id="home">
        <div className="decorations">
          <div className="decor-dot2">
            <img src={decor3} alt="" />
          </div>

          <div className="parcol"></div>
        </div>
        {intro &&
          intro.map((i, idx) => (
            <div className="small-intro" key={idx}>
              <div className="intro-row">
                <div className="col-lg-5  col-md-6 col-sm-12 intro-left">
                  <div className="intro-name">
                    <h3
                      className="hello"
                      data-aos="fade-down"
                      data-aos-duration="1500"
                    >
                      {i.job_title}
                    </h3>
                    <h3
                      className="name"
                      data-aos="fade-down"
                      data-aos-duration="1600"
                    >
                      Hey! I Am
                    </h3>
                    <h3
                      className="job  text-animate"
                      data-aos="fade-down"
                      data-aos-duration="1700"
                    >
                      {i.name}
                    </h3>
                    <p
                      className="myinfo"
                      data-aos="fade-down"
                      data-aos-duration="1800"
                    >
                      {i.par_inro}
                    </p>
                  </div>
                  <div
                    className="intro-btns"
                    data-aos="fade-up"
                    data-aos-duration="1900"
                  >
                    <a href={`mailto:${i.hireMe_link}`} className="contactMe">
                      <button className="contact-me">
                        Hire me <i className="bx bx-send "></i>
                      </button>
                    </a>
                  </div>
                  {social && (
                    <div
                      className="intro-contact"
                      data-aos="fade-up"
                      data-aos-duration="1800"
                    >
                      <span>Follow Me:</span>
                      <ul>
                        <li>
                          {social.map((s, idx) => (
                            <a
                              href={s.link}
                              className="icon-link"
                              target="_blank"
                              rel="noopener noreferrer"
                              key={idx}
                            >
                              <i className={s.social_icon}></i>
                            </a>
                          ))}
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div
                  className="col-lg-7 col-md-6 col-sm-12 left-img "
                  data-aos="fade-down-left"
                >
                  <div className="ff">
                    {/* <img
              className="intro-img"
              src="https://drive.google.com/uc?id=1iyVyaGyw5HniEugxd1-qZ54rpFpn2UTc"
              alt=""
            /> */}
                    <img className="intro-img" src={i.avatar_img} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </section>
    </>
  );
};

export default Intro;
