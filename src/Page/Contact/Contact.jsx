import React, { useState } from "react";
import "./Contact.css";
import moment from "moment";

const Contact = () => {
  const host = process.env.REACT_APP_HOST;
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    let data = JSON.parse(localStorage.getItem("user"));

    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD hh:mm:ss a");
    // console.log(date);
    e.preventDefault();
    fetch(`${host}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: phone,
        date: date,
        msg: msg,
      }),
    })
      .then((res) => res.json())
      .then((dat1) => console.log(dat1))
      .then(
        setTimeout(() => {
          window.location.href = "/final";
        }, 100)
      );
    // setFormData(initialFormData);
    // setFormData(initialFormData);
    setPhone("");
    setMsg("");
  };

  return (
    <div className="contact">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
