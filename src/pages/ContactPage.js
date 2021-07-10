import React from "react";
import ContactItem from "../components/ContactItem";
import phone from "../img/phone.svg";
import emailme from "../img/emailme.svg";
import location from "../img/location.svg";
import Title from "../components/Title";

function ContactPage() {
  return (
    <div>
      <div className="contact-title">
        <Title title={"About Me"} span={"About me"} />
      </div>
      <div className="contact-page">
        <div className="map-section">
          <iframe
            title="home"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.859497737582!2d101.515643488319!3d2.856902029134981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cda537bafa9095%3A0xdbab97c8f4be607d!2s8%2C%20Jalan%20Sentosa%208%2C%20Taman%20Sentosa%2C%2042700%20Banting%2C%20Selangor!5e0!3m2!1sen!2smy!4v1625751527226!5m2!1sen!2smy"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-section">
          <ContactItem
            icon={phone}
            text1={"+064 478373778"}
            text2={"+433 4343434443"}
            title={"Phone:"}
          />
          <ContactItem
            icon={emailme}
            text1={"uthaman@gmail.com"}
            text2={"superman@gmail.com"}
            title={"Email:"}
          />
          <ContactItem
            icon={location}
            text1={"NO 8, JALAN SENTOSA 8, TAMAN SENTOSA"}
            text2={"BUKIT CHEEDING, 42700 BANTING SELANGOR."}
            title={"Location:"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
