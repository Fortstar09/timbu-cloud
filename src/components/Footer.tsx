import "./style/footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-sub">
        <p>Get latest deals and newsletters directly to your inbox</p>
        <div className="footer-form">
          <img src="/img/message.svg" alt="" />
          <input type="text" placeholder="johndoe@example.com" />
          <a href="#">
            <span>Subscribe</span>
          </a>
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-about">
        <NavLink to="/">
          <img src="/img/logo.svg" alt="logo " />
      </NavLink>
          <p>
            Timbu Cloud Shop offers a curated selection of high-quality products
            at unbeatable prices. Find everything you need in one place. Shop
            now!
          </p>
          <div className="socials">
            <img src="/img/instagram.svg" alt="instagram logo" />
            <img src="/img/x.svg" alt="X icon" />
            <img src="/img/facebook.svg" alt=" facbook logo" />
          </div>
        </div>
        <div className="footer-contact">
          <p className="footer-bold">Contact us</p>
          <p>Phone: +234 123 456 7890</p>
          <p>Email: timbushop@example.com</p>
        </div>
        <div className="footer-contact">
          <p className="footer-bold">Help</p>
          <p>FAQs</p>
          <p>Delivert & returns</p>
          <p>Track your order</p>
          <p>Bulk purchases</p>
        </div>
        <div className="footer-contact">
          <p className="footer-bold">More services</p>
          <p>Gift cards</p>
          <p>Coupons</p>
          <p>Discount</p>
        </div>
      </div>
      <div className="term">
        <p>2024 Timbu Cloud Shop. All right reserved.</p>
        <p>Terms of Use</p>
        <p>Privacy</p>
      </div>
    </>
  );
};

export default Footer;
