import React, { useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format, addDays,differenceInDays } from "date-fns"; // Import the date-fns library for date manipulation
import moment from "moment";
import "./Booking.css";

const Booking = () => {
  const [selectedDates, setSelectedDates] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);
  // console.log(selectedDates);

  const handleDateSelect = (ranges) => {
    setSelectedDates([ranges.selection]);
  };
  // const [checkIn, setCheckIn] = useState("");
  // const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [roomType, setRoomType] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    let data = localStorage.getItem("Log");
    if (data === null) {
      window.location.href = "/login";
    }
  }, []);

  useEffect(() => {
    const room = localStorage.getItem("room");
    if (room === "Luxury Suite") {
      setRoomType("Luxury Suite");
    } else if (room === "Deluxe Suite") {
      setRoomType("Deluxe Suite");
    }
    // else if (room === "Executive") {
    //   setRoomType("Executive");
    // }
  }, []);
  const { startDate, endDate } = selectedDates[0];
  const duration = differenceInDays(endDate, startDate);

   console.log(duration);

  const handleSubmit = async (e) => {
    const { startDate, endDate } = selectedDates[0];
    const checkIn = format(startDate, "dd/MM/yyyy");
    const checkOut = format(endDate, "dd/MM/yyyy");
    const host = process.env.REACT_APP_HOST;
    const cred = localStorage.getItem("Log");
    let data = JSON.parse(localStorage.getItem("user"));

    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD hh:mm:ss a");
    // console.log(date);
    e.preventDefault();
    await fetch(`${host}/api`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        checkIn: checkIn,
        checkOut: checkOut,
        guests: guests,
        roomType: roomType,
        phone: phone,
        cred: cred,
        date: date,
      }),
    })
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then(
        setTimeout(() => {
          window.location.href = "/final";
        }, 2000)
      );

    // Clear the form
    // setCheckIn("");
    // setCheckOut("");
    setGuests("");
    setRoomType("");
    setPhone("");
    // window.location.href = "/booking";
  };

  return (
    <>
      <div className="king-con">
        <div className="booking-container">
          <form className="form1" onSubmit={handleSubmit}>
            <div className="date-range-container">
              <DateRangePicker
                ranges={selectedDates}
                onChange={handleDateSelect}
                minDate={new Date()}
                showSelectionPreview={true}
                months={2}
                direction="vertical"
              />
            </div>
            <div className="colum-2">
            <div className="input-group">
              <label htmlFor="guests">Number of guests:</label>
              <input
                className="input"
                type="number"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min="1"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="roomType">Room type:</label>
              <select
                id="roomType"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                required
              >
                <option value="">Select a room type</option>
                <option value="Luxury Suite">Luxury Suite</option>
                <option value="Deluxe Suite">Deluxe Suite</option>
                {/* <option value="Executive">Executive</option> */}
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="phone">Your Phone No. :</label>
              <input
                className="input"
                type="phone"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="total">{/* (checkIn) */}</label>
            </div>
            <button className="button2" type="submit">
              Book Now
            </button>
           </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;
