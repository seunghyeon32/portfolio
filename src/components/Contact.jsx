import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="-box">
        <div className="contact">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/email.png"}
            alt="email"
          />
          <div>
            <p className="contact-title">이메일</p>
            <p>window8397@naver.com</p>
          </div>
        </div>

        <div className="contact">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/phone.png"}
            alt="phone"
          />
          <div>
            <p className="contact-title">연락처</p>
            <p>010.9022.8397</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
