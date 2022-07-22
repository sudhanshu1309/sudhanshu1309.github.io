import React from "react";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="container mx-auto flex flex-col items-center text-cyan-300 h-screen"
      >
        <h3 className="text-4xl md:text-6xl py-12 md:m-16">Contact Me</h3>
        <div className="flex flex-col md:flex-row justify-between md:gap-x-32 gap-y-6">
          <div className="flex flex-col gap-y-6 text-lg md:text-xl">
            <div>
              <p>Sudhanshu Tripathi</p>
              <p>IIIT Naya Raipur</p>
              <p>Sector 24, Naya Raipur,</p>
              <p>Chhattisgarh 493661 - India</p>
            </div>
            <div>
              <p>Email:</p>
              <p>sudhanshutripathi008@gmail.com</p>
              <p>sudhanshu20101@iiitnr.edu.in</p>
            </div>
          </div>
          <div>
            <iframe
              className="rounded-lg"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.6009596014214!2d81.76397671503071!3d21.12846938974253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c434ac2ae871%3A0x4e3568497a7e1d7e!2sInternational%20Institute%20of%20Information%20Technology%2C%20Naya%20Raipur!5e0!3m2!1sen!2sin!4v1657965459930!5m2!1sen!2sin"
              height="250"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
