import React from "react";

const AboutC = () => {
  return (
    <div className="p-2">
      <div className="grid grid-cols-6 p-4">
        <div className="col-end-3 text-3xl text-blue-800 decoration-4 font-bold mr-auto">
          <br></br>
          <h2>Personal care for your healthy living</h2>
        </div>
        <div className="col-start-3 col-end-6 text-xl text-gray-500 mt-2 ml-3">
          <h4>
          WellBe offers medicines and health products across various categories through its retail partners which are spread across the country.
          
          </h4>
          <br></br>
          <h4> You can simply place an order on our website/app and we will deliver your online medicine order in as low as 4 hours, with a guaranteed delivery to you in 24-48* hrs!
You can either pay online or opt for COD (cash on delivery) for your orders.
          </h4>
        </div>
      </div>
      <div className="grid grid-cols-10 p-6 mt-10 ml-28">
        <div className="col-start-2 col-span-2 ">
          <img
            className="w-60 h-32 shadow rounded-lg"
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yJTIwY29uc3VsdGF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="just"
          />
          <h2 className="text-black-600 text-xl pt-2 pb-2 font-bold">
            {" "}
            Instant Consultation
          </h2>
          <p className="text-gray-500">
          We have created Instant Consult ,to make it easier for patients to have access to an online doctor consultation when they need it
          </p>
        </div>
        <div className="col-span-2 pl-4">
          <img
            className="w-60 shadow rounded-lg"
            src="https://media.istockphoto.com/photos/laboratory-testing-for-covid19-picture-id1327475879?b=1&k=20&m=1327475879&s=170667a&w=0&h=zU37crOUleTnhts22inx8MHPVckVIHZtiEBIvmi0T1c="
            alt="just"
          />
          <h2 className="text-black-600 text-xl pt-2 pb-2 font-bold ">
            {" "}
           Laboratory Test
          </h2>
          <p className="text-gray-500">
          Simply book a lab test and have your test sample collected from the comfort of your home. Get your test results delivered online.
          
          </p>
        </div>
        <div className=" col-span-2 pl-4">
          <img
            className="w-60 shadow rounded-lg"
            src="https://media.istockphoto.com/photos/customer-review-satisfaction-feedback-survey-concept-picture-id1254918599?b=1&k=20&m=1254918599&s=170667a&w=0&h=7AHvelKRHWp7ZA_R99HA3xzBQJbrMM-WI3GL3WXjmjU="
            alt="just"
          />
          <h2 className="text-black-600 text-xl pt-2 pb-2 font-bold">
            {" "}
            Authorized Products
          </h2>
          <p className="text-gray-500">
          All our medicine and healthcare content is strictly moderated by our team of healthcare experts, qualified and trusted doctors, pharmacists, and editors.
          </p>
        </div>
        <div className="col-span-2 pl-4">
          <img
            className="w-60 shadow rounded-lg"
            src="https://demo.themefisher.com/novena/images/about/about-1.jpg"
            alt="just"
          />
          <h2 className="text-black-600 text-xl pt-2 pb-2 font-bold">
            {" "}
           Best Expertize
          </h2>
          <p className="text-gray-500">
         We have the best expertize and staff for consultation.
          </p>
        </div>
      </div>
      <div className="p-6">
        <h1 className="text-4xl text-blue-800 font-medium text-center">
          Meet Our Team
        </h1>
        <p className="text-center text-gray-500 p-4">
          Today’s users expect effortless experiences. Don’t let essential
          people and processes stay stuck in the past. Speed it up, skip the
          hassles
        </p>
      </div>
    </div>
  );
};

export default AboutC;
