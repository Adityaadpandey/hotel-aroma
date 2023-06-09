import React, { useState } from 'react'
import "./Footer.css"

const Footer = () => {
    const host = process.env.REACT_APP_HOST
    const [phone, setPhone] = useState("")
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
            .then((dat1) => console.log(dat1))
            .then(setTimeout(() => {
                window.location.href = "/final";
            }, 100))
        // setFormData(initialFormData);
        // setFormData(initialFormData);
        setPhone("")
    };
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4>Aroma Guest House</h4>
                            <p>Lanka Nagwa Road</p>
                            <p>Varanasi, India</p>
                            <p>Phone: 9336991000</p>
                        </div>
                        <div className="col">
                            <h4>Site Link</h4>
                            <ul>
                                <li>
                                    <a href="https://www.google.com/maps/place/Aroma+Guest+House/@23.0333333,85.6666667,17z/data=!3m1!4b1!4m5!3m4!1s0x89c9696969696969:0x89c9696969696969!8m2!3d23.0333333!4d85.6666667" target="_blank" rel="noreferrer">
                                        <i className="fa fa-map-marker"></i>
                                        <span>Aroma Guest House</span>
                                    </a>
                                </li>
                                <li><a href="/privacy-policy">Privacy-Policy</a></li>
                                <li>
                                    <a href="/rooms">Rooms</a>
                                </li>
                                <li>
                                    <a href="https://goo.gl/maps/Cz9XyBT8ReCpbowv8">Location</a>
                                </li>
                                {/* <li>
              <a href="/">Amenities</a>
            </li> 
            <li>
              <a href="/contact">Contact</a>
            </li>*/}
                            </ul>
                        </div>
                        <div className="col">
                            <h4>Connect</h4>
                            <ul>
                                <li>
                                    <a href="/">Facebook</a>
                                </li>
                                <li>
                                    <a href="/">Twitter</a>
                                </li>
                                <li>
                                    <a href="/">Instagram</a>
                                </li>
                                <li>
                                    <a href="tel:9336991000">Phone No.</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>Subscribe</h4>
                            <form onSubmit={handleSubmit}>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="phoneValue"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                    placeholder="Enter your Phone"
                                />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    {/* <hr> */}
                    <p>&copy; 2023 Aroma Guest House. All rights reserved.</p>
                </div>
                {/* <button onClick={() => {
      localStorage.setItem("cred", false);
      googleLogout();
    }}>Logout</button> */}
                {/* <img src={data} alt="image" /> */}

            </footer>
        </>
    )
}

export default Footer