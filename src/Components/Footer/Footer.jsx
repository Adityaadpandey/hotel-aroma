import React,{useState} from "react";
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  // const host = process.env.REACT_APP_HOST;
  const host = 'https://my-hotel-bacl.onrender.com'
  const [phone, setPhone] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${host}/api/phone`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: phone,
      }),
    })
      .then((res) => res.json())
      .then((dat1) => console.log(dat1));
    //   .then(
    //     setTimeout(() => {
    //       window.location.href = "/final";
    //     }, 100)
    //   );
    setPhone("");
  };
  return (
    <footer className="footer">
      <div className="container2">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Hotel Name</h3>
            <p>Address, City, Country</p>
            <p>Phone: +1 234 567 890</p>
            <p>Email: info@example.com</p>
          </div>
          <div className="footer-column">
            <h3>Explore</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/rooms">Rooms</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Subscribe</h3>
            <p>Stay updated with our latest offers and promotions.</p>
            <form className="subscribe-form" onSubmit={handleSubmit}>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                type="phoneValue"
                placeholder="Enter your Phone No"
              />
              <button type="submit">Subscribe</button>
            </form>
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com/hotelname">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/hotelname">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/hotelname">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/hotelname">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Hotel Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
