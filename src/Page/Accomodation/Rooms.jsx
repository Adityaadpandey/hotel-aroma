import React, { useState, useEffect } from 'react'
import './Rooms.css'

import room11 from "../../Assets/room-1.jpg";
import room12 from "../../Assets/room-7.jpg";
import room13 from "../../Assets/room.jpg";
// images for the second room
import room21 from "../../Assets/room-4.jpg";
import room22 from "../../Assets/room-7.jpg";
import room23 from "../../Assets/room-6.jpg";
// images for the third room
import room31 from "../../Assets/room-5.jpg";
import room32 from "../../Assets/room-4.jpg";
import room33 from "../../Assets/room-1.jpg";


const Rooms = () => {
    const [Room1, setRoom1] = useState(room11);
    const [Room2, setRoom2] = useState(room22);
    const [Room3, setRoom3] = useState(room31);
    // for the room 1 image
    useEffect(() => {
        const timer = setTimeout(() => {
            switch (Room1) {
                case room11:
                    setRoom1(room12);
                    break;
                case room12:
                    setRoom1(room13);
                    break;
                case room13:
                    setRoom1(room11);
                    break;
                default:
                    setRoom1(room11);
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [Room1]);

    // for the room 2 image
    useEffect(() => {
        const timer = setTimeout(() => {
            switch (Room2) {
                case room21:
                    setRoom2(room22);
                    break;
                case room22:
                    setRoom2(room23);
                    break;
                case room23:
                    setRoom2(room21);
                    break;
                default:
                    setRoom2(room21);
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [Room2]);

    // for the room 1 image
    useEffect(() => {
        const timer = setTimeout(() => {
            switch (Room3) {
                case room31:
                    setRoom3(room32);
                    break;
                case room32:
                    setRoom3(room33);
                    break;
                case room33:
                    setRoom3(room31);
                    break;
                default:
                    setRoom3(room31);
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [Room3]);



    const dlx = () => {
        localStorage.removeItem("room");
        localStorage.setItem("room", "Deluxe");
        // console.log(localStorage.getItem("room"));
        window.location.href = "/booking";

    };
    const spr = () => {
        localStorage.removeItem("room");
        localStorage.setItem("room", "Superior");
        // console.log(localStorage.getItem("room"));
        window.location.href = "/booking";


    };
    const exs = (e) => {
        e.preventDefault()
        localStorage.removeItem("room");
        localStorage.setItem("room", "Executive");
        // console.log(localStorage.getItem("room"));
        window.location.href = "/booking";
    }
    return (
        <>
            <main>
                <h1>Our Rooms</h1>
                <div className="room-container">
                    <div className="room">
                        <img src={Room1} alt="Room 1" />
                        <h2>Deluxe Room</h2>
                        <p>₹1000 per night</p>
                        <a href="/booking" onClick={dlx}>Book Now</a>
                    </div>
                    <div className="room">
                        <img src={Room2} alt="Room 2" />
                        <h2>Superior Room</h2>
                        <p>₹2000 per night</p>
                        <a href="/booking" onClick={spr}>Book Now</a>
                    </div>
                    <div className="room">
                        <img src={Room3} alt="Room 3" />
                        <h2>Executive Suite</h2>
                        <p>₹3000 per night</p>
                        <a href="/booking" onClick={exs}>Book Now</a>
                    </div>
                    <div className="room">
                        <img src={Room3} alt="Room 3" />
                        <h2>Executive Suite</h2>
                        <p>₹3000 per night</p>
                        <a href="/booking" onClick={exs}>Book Now</a>
                    </div>
                    <div className="room">
                        <img src={Room3} alt="Room 3" />
                        <h2>Executive Suite</h2>
                        <p>₹3000 per night</p>
                        <a href="/booking" onClick={exs}>Book Now</a>
                    </div>
                    <div className="room">
                        <img src={Room3} alt="Room 3" />
                        <h2>Executive Suite</h2>
                        <p>₹3000 per night</p>
                        <a href="/booking" onClick={exs}>Book Now</a>
                    </div>
                    <div className="room">
                        <img src={Room3} alt="Room 3" />
                        <h2>Executive Suite</h2>
                        <p>₹3000 per night</p>
                        <a href="/booking" onClick={exs}>Book Now</a>
                    </div>
                    <div className="room">
                        <img src={Room3} alt="Room 3" />
                        <h2>Executive Suite</h2>
                        <p>₹3000 per night</p>
                        <a href="/booking" onClick={exs}>Book Now</a>
                    </div>
                    <div className="room">
                        <img src={Room3} alt="Room 3" />
                        <h2>Executive Suite</h2>
                        <p>₹3000 per night</p>
                        <a href="/booking" onClick={exs}>Book Now</a>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Rooms