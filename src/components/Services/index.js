import "./index.css";

const Services = ({ services }) => {
  return (
    <>
      {services && (
        <section id="services">
          <div className="service-container">
            <div className="service-title">
              <h2>What Service i Offer you</h2>

              <h3>Services</h3>
            </div>

            <div className="service-row">
              {services.map((ser, idx) => (
                <div
                  key={idx}
                  className=" my-service"
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                >
                  <div className="ser-back">
                    <img src={ser.icon_image} alt="" />
                  </div>
                  <h4 className="web">{ser.service_name}</h4>
                  <p className="service-info">{ser.service_description}</p>
                  {/* <h6 className="learn-more">{service.learn_more}</h6> */}
                  <div className="shadow-icon">
                    <i className={ser.shadow_icon}></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Services;
