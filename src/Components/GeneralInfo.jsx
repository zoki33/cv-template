import { useState } from "react";

const GeneralInfo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const containerStyle = {
    display: "flex",
    flexDirection: "column", // or 'column' based on your layout needs
    alignItems: "flex-end", // or other alignment properties
    justifyContent: "space-between", // or other justification properties
    gap: 20,
    textAlign: "left",
    border: "2px black solid",
    padding: "20px",
  };

  const paraStyles = {
    display: "flex",
    flexDirection: "column", // or 'column' based on your layout needs
    alignItems: "center", // or other alignment properties
    justifyContent: "space-between", // or other justification properties
    gap: 20,
    textAlign: "left",
    padding: "20px",
  };

  return (
    <>
      <div style={containerStyle}>
        <h2>General Information</h2>
        {submitted ? (
          <div style={paraStyles}>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Phone Number: {number}</p>
          </div>
        ) : (
          <>
            <form>
              <label>First Name: </label>
              <input
                value={firstName}
                placeholder="Enter your first name"
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
              ></input>
            </form>
            <form>
              <label>Last Name: </label>
              <input
                value={lastName}
                placeholder="Enter your last name"
                onChange={(e) => setLastName(e.target.value)}
                type="text"
              ></input>
            </form>
            <form>
              <label>Email: </label>
              <input
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              ></input>
            </form>
            <form>
              <label>Phone Number: </label>
              <input
                value={number}
                placeholder="Enter your phone number"
                onChange={(e) => setNumber(e.target.value)}
                type="tel"
              ></input>
            </form>
          </>
        )}
        <div style={{ alignSelf: "center" }}>
          {submitted ? (
            <button onClick={(e) => setSubmitted(false)}>Edit</button>
          ) : (
            <button onClick={(e) => setSubmitted(true)}>Submit</button>
          )}
        </div>
      </div>
    </>
  );
};

export default GeneralInfo;
