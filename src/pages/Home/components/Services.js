import { Container, Row, Col } from "reactstrap";
// import Logo from "../../../assets/s1.svg"
 import Ser1 from "../../../assets/s-3.png";
import Ser2 from "../../../assets/s-4.png";
import Ser3 from "../../../assets/s-8.png";
import Ser4 from "../../../assets/s-7.png";
import Ser5 from "../../../assets/s-5.png";
import Ser6 from "../../../assets/s-6.png";
const Service = () => {
  const services = [
    {
      title: "Wake Up Early",
      desc: "You don’t need to rise and shine with the sun every morning, but waking up at a early hour is essential for optimal health.",
       img: Ser4,
    },
    {
      title: "Spend Time Outside",
      desc: "Getting fresh air on a regular basis is one of the easiest ways to improve your overall health. ",
      img: Ser6,
    },
    {
      title: "Eat a Vegetable",
      desc: " Not only are vegetables whole foods but they are rich in vitamins, minerals and are great sources of fibre, which can help to maintain a healthy gut",
      img: Ser5,
    },
    {
      title: "Put Your Phone Away",
      desc: "Turn off your phone at least one hour before bed and allow yourself to relax and unwind without the digital stress..",
      img: Ser3,
    },
    {
      title: "Drink Water Before Anything Else",
      desc: "Before you start sipping on your morning brew, drink a glass of water. It can help to hydrate the body while aiding digestion and metabolism at the same time.",
      img: Ser2,
    },
    {
      title: "Read Something",
      desc: "Reading has benefits to both your physical and mental health and those benefits can last a lifetime. ",
      img: Ser1,
    },
  ];

  return (
    <section className="section" id="service">
      <div className="container px-12 ">
        <Row className="justify-content-center">
          <Col lg={10} md={12}>
            <div className="text-center mb-5">
              <h3 className="font-semibold text-3xl md:text-5xl text-emerald-400 mb-3">
                <span className="">
                  Daily habits you can do to be healthy
                </span>
              </h3>
              <p className="text-muted text-lg">
              Some healthy daily habits that you can do every day to help create a healthier lifestyle.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {services.map((service, key) => (
            <Col key={key} lg={4} sm={6}>
              <div className="shadow-sm shadow-cyan-500 rounded-xl mx-auto mb-5 bg-gradient-to-b from-gray-300 via-gray-100">
                <div className="mx-auto ">
                  <img src={service.img} className="mx-auto py-10 h-64 " alt="img" />
                </div>
                <div className="pb-10 h-40">
                  <h5 className="text-2xl text-center font-semibold pb-2">
                    {service.title}
                  </h5>
                  <p className="text-lg text-center text-gray-500">
                    {service.desc}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};
export default Service;
