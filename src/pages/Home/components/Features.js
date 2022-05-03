import React from "react";
import { Row, Col } from "reactstrap";

const Feature = () => {
  const features = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1584362917137-56406a73241c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlzZWFzZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
      title: "LOREM IPSUM",
      desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      link: "/",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/6303590/pexels-photo-6303590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "LOREM IPSUM",
      desc: "Sed perspiciatis unde omnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo excepturi sint occaecati cupiditate architecto.",
      link: "/",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1583088580009-2d947c3e90a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGVhbHRoJTIwY2FyZSUyMHByb2R1Y3R8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "LOREM IPSUM",
      desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      link: "/",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1602928299025-47892a76808a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFib3JhdG9yeXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
      title: "LOREM IPSUM",
      desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      link: "/",
    },
  ];
  return (
    <div className="p-10 mt-14" id="feature">
      <div>
        <Row className="justify-content-center">
          <Col lg={10} md={8}>
            <div className="title text-center mb-5">
              <h3 className="text-center mb-4">
                <span className="text-6xl font-semibold ">Features</span>
              </h3>
              <p className="text-gray-500 text-lg text-center">
              Here at <strong>WellBe</strong>, you can book a appointment with doctor and cure your disease with proper Checkup and health routine.You can schedule a Full Body Test.
              </p>
            </div>
          </Col>
        </Row>

        {/* <FeatureBox features={features} /> */}
        <div className="grid grid-cols-7 gap-4">
          <div className="col-start-1 col-end-3 text-5xl rounded my-auto capitalize font-serif">
            Isn't it too much you can do here?
            <br />
            <br />
            Let's dive in....
          </div>
          <div
            className="col-start-3 col-end-5 p-auto rounded-xl mt-4 mb-6 inline-block capitalize text-white text-center text-3xl align-middle  hover:opacity-70 hover:text-4xl"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(" +
                features[2].img +
                ")",
              position: "sticky",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <p className=" capitalize text-center align-bottom mt-52 ">
              HealthCare Products
            </p>
          </div>
          <div className="col-start-5 col-end-8 grid grid-rows-2 grid-col-2 gap-4">
            <div
              className="col-start-1 col-end-8 row-span-1 p-auto rounded-xl text-white py-auto capitalize text-center text-3xl hover:opacity-70 hover:text-4xl"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(" +
                  features[1].img +
                  ")",
                position: "sticky",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <p className=" capitalize text-center align-bottom mt-24">
                Doctor Consultation
              </p>
            </div>
            <div
              className="col-start-1 col-end-4 row-span-2 h-fit p-24 rounded-xl text-white capitalize py-auto text-center text-3xl hover:opacity-70"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),url(" +
                  features[0].img +
                  ")",
                position: "sticky",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              {/* <img src={features[0].img} className=""/> */}
             Disease Checker
            </div>
            <div
              className="col-start-4 col-end-8 row-span-2 h-fit p-24 rounded-xl text-white capitalize py-auto text-center text-3xl hover:opacity-70"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(" +
                  features[3].img +
                  ")",
                position: "sticky",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              {/* <img src={features[3].img} className="h-min"/> */}
              Lab test
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feature;
