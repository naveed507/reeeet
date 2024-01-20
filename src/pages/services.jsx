import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";
import Content from "../data/sections/services.json";
import Link from "next/link";
const Service4Courses = dynamic(
  () => import("@/src/components/sliders/Service4Courses"),
  {
    ssr: false,
  }
);
const Services = () => {
  return (
    <Layouts>
      <PageBanner pageName={"Services"} pageTitle={"Our Core Services"} />
      {/* about */}
      <section className="mil-p-120-90">
        <div
          className="mil-deco"
          style={{ bottom: 0, right: "20%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-4">
              <div
                className="mil-circle-illustration mil-with-dots-2 mil-mb-60"
                data-swiper-parallax-scale=".8"
              >
                <div className="mil-circle-bg" />
                <div className="mil-image-frame">
                  <img
                    src="img/faces/serv.webp"
                    alt="img"
                    className="img rounded-circle"
                    style={{
                      borderRadius: "50%",
                      objectFit: "contain",
                      height: "500px",
                      marginTop: "100px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <h2 className="mil-mb-30">
                <span className="mil-accent">
                  {" "}
                  Crafting Digital Excellence:{" "}
                </span>{" "}
                Your Vision, Our Expertise – A Powerful Partnership for Success
                with <span className="mil-accent">InvonixTech</span>
              </h2>
              <div className="mil-hori-box mil-mb-30">
                <div className="mil-mr-30">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg">
                    <img src="img/icons/md/1.svg" alt="icon" />
                  </div>
                </div>
                <p>
                  Let's Connect and Elevate Your Digital Journey! Reach out to
                  <span className="mil-accent"> InvonixTech </span> for
                  innovative solutions and personalized consultations.
                </p>
              </div>
              <Link href="/contact" className="mil-button mil-border mil-mb-30">
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* ??? */}
      <section className="mil-p-120-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Discover Our Company
              </span>
              <h2 className="mil-mb-30">
                <span className="mil-accent">InvonixTech</span> Provide IT
                Services & Solutions
              </h2>
              <p className="mil-mb-90">
                At InvonixTech, we provide a comprehensive suite of cutting-edge
                services and solutions tailored to meet your unique business
                needs. From web and mobile app development to strategic digital
                marketing, our offerings are designed to elevate your online
                presence and drive success. Explore the possibilities with
                InvonixTech – where innovation meets solutions for a digitally
                empowered future.
              </p>
            </div>
          </div>
          <div className="row">
            {Content.column1.items.map((item, key) => (
              <div className="col-xl-4">
                <div
                  className="mil-hover-card mil-box-center mil-mb-30"
                  style={{ minHeight: "480px" }}
                >
                  <div
                    className="mil-deco mil-deco-accent"
                    style={{ top: "-10%", right: "-10%" }}
                  />
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                    <h3>I</h3>
                  </div>
                  <h5 className="mil-mb-30">{item.name}</h5>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
            {Content.column2.items.map((item, key) => (
              <div className="col-xl-4">
                <div
                  className="mil-hover-card mil-box-center mil-mb-30"
                  style={{ minHeight: "480px" }}
                >
                  <div
                    className="mil-deco mil-deco-accent"
                    style={{ top: "-10%", right: "-10%" }}
                  />
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                    <h3>I</h3>
                  </div>
                  <h5 className="mil-mb-30">{item.name}</h5>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
            {/* <div className="col-xl-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div
                  className="mil-deco mil-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>II</h3>
                </div>
                <h5 className="mil-mb-30">Data Protection</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div
                  className="mil-deco mil-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>III</h3>
                </div>
                <h5 className="mil-mb-30">Network Security</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div
                  className="mil-deco mil-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>IV</h3>
                </div>
                <h5 className="mil-mb-30">Security Strategy</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div
                  className="mil-deco mil-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>V</h3>
                </div>
                <h5 className="mil-mb-30">Detection and Response</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div
                  className="mil-deco mil-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>VI</h3>
                </div>
                <h5 className="mil-mb-30">Elastic Engineering</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* ??? end */}
      {/* ??? */}
      {/* <section className="mil-deep-bg mil-p-120-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Explore More Solutions
              </span>
              <h2 className="mil-mb-90">
                Boost Your <span className="mil-accent">Advantage</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 mil-mb-30">
              <div
                className="mil-deco mil-deco-accent"
                style={{ top: "-10%", right: "-10%" }}
              />
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <h3>I</h3>
              </div>
              <h5 className="mil-mb-30">
                Cloud Native <br />
                Security Services
              </h5>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-xl-3 mil-mb-30">
              <div
                className="mil-deco mil-deco-accent"
                style={{ top: "-10%", right: "-10%" }}
              />
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <h3>II</h3>
              </div>
              <h5 className="mil-mb-30">
                Multi <br />
                Cloud Security
              </h5>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-xl-3 mil-mb-30">
              <div
                className="mil-deco mil-deco-accent"
                style={{ top: "-10%", right: "-10%" }}
              />
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <h3>III</h3>
              </div>
              <h5 className="mil-mb-30">
                On Site Security <br />
                and Compliance
              </h5>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-xl-3 mil-mb-30">
              <div
                className="mil-deco mil-deco-accent"
                style={{ top: "-10%", right: "-10%" }}
              />
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <h3>IV</h3>
              </div>
              <h5 className="mil-mb-30">
                Consectetur <br />
                adipiscing elit
              </h5>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      {/* ??? end */}
      {/* ??? */}
      {/* <section className="mil-gradient-bg mil-p-120-90">
        <div
          className="mil-deco mil-deco-accent"
          style={{ bottom: 0, right: "20%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-4">
              <span className="mil-suptitle mil-suptitle-2 mil-light mil-mb-30">
                Explore More Solutions
              </span>
              <h2 className="mil-light mil-mb-90">
                Do You Know what Your{" "}
                <span className="mil-accent">Cybersecurity</span> Risk Score Is?
              </h2>
            </div>
            <div className="col-xl-7 mil-mb-30">
              <p className="mil-light-soft mil-mb-30">
                By answering these simple questions about your cybersecurity
                technology, processes, and people, you'll receive a
                cybersecurity risk score against our baseline that can help you
                identify common security gaps in your environment that you may
                not be aware of.
              </p>
              <a href="#." className="mil-button mil-border mil-light">
                <span>Start Now</span>
              </a>
            </div>
          </div>
        </div>
      </section> */}
      {/* ??? end */}
      {/* courses */}
      {/* <Service4Courses /> */}
      {/* courses end */}
      {/* contact */}

      {/* contact end */}
    </Layouts>
  );
};
export default Services;
