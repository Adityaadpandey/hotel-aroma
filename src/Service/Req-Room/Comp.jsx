import React, { useState } from "react";
import "./Comp.css";

const Comp = () => {
  const host = process.env.REACT_APP_HOST;
  const [table, setTable] = useState([]);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const correctUserId = "admin";
  const correctPassword = "admin";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userId === correctUserId && password === correctPassword) {
      setIsLoggedIn(true);
    } else {
      setErrorMessage("Invalid ID or password");
    }
  };
  // useEffect(() => {
  const url = `${host}/api/all`;

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      // console.log(json);
      // setTable(json);
      setTable(json);
    } catch (error) {
      // console.log("error", error);
    }
  };
  fetchData();

  // }, []);

  const code = (name, phone, room, checkIn, checkOut) => {
    window.location.href = `https://api.whatsapp.com/send?phone=91${phone}&text=${name},%20We%20are%20Happy%20that%20you%20booked%20our%20${room}%20room%20in%20your%20Hotel%20from%20${checkIn}%20to%20${checkOut}%20which%20is%20Total%20of%20Thank%20you%20for%20your%20time.https://for-aroma.vercel.app/`;
    // console.log(phone)
  };

  return (
    <div className="mmain">
      {/* <h1>Login</h1> */}
      {isLoggedIn ? (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    {/* <th>Id</th> */}

                    <th>Name</th>
                    <th>Email</th>
                    <th>checkIn</th>
                    <th>checkOut</th>
                    <th>date</th>
                    <th>guests</th>
                    <th>roomType</th>
                    <th>phone</th>
                    <th>Client</th>
                    <th>Total</th>
                    <th>Send</th>
                  </tr>
                </thead>
                <tbody>
                  {table.map((item) => (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.checkIn}</td>
                      <td>{item.checkOut}</td>
                      <td>{item.date}</td>
                      <td>{item.guests}</td>
                      <td>{item.roomType}</td>
                      <td>{item.phone}</td>
                      <td>{item.cred}</td>
                      <td>{item.total}</td>
                      <td>
                        <button
                          onClick={() =>
                            code(item.name, item.phone, item.roomType)
                          }
                          className="btn btn-primary"
                        >
                          Send
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            User ID:
            <input
              type="text"
              value={userId}
              onChange={(event) => setUserId(event.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
          <p>{errorMessage}</p>
        </form>
      )}
    </div>
  );
};

export default Comp;
