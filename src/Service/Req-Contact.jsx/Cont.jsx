import React, { useState, useEffect } from "react";
import "../Req-Room/Comp.css";

const Cont = () => {
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
  useEffect(() => {
    const url = `${host}/api/call`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        // console.log(json);
        setTable(json);
      } catch (error) {
        // console.log("error", error);
      }
    };

    fetchData();
  }, [host]);
  const code = (phone, room) => {
    window.location.href = `https://api.whatsapp.com/send?phone=91${phone}&text=We%are%20Happy%20that%20you%20booked%20${room}%20in%20your%20Hotel-Name%20Services%20for%20my%20website%20development%20and%20SEO%20services%20and%20I%20want%20to%20know%20more%20about%20it.%20Please%20contact%20me%20as%20soon%20as%20possible.%20Thank%20you%20for%20your%20time.https://advisions.in/`;
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
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th>Send</th>
                  </tr>
                </thead>
                <tbody>
                  {table.map((item) => (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.phone}</td>
                      <td>{item.msg}</td>
                      {/* <td>{item.cred}</td> */}
                      <td>
                        <button
                          onClick={() => code(item.phone, item.roomType)}
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

export default Cont;
