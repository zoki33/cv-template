import { useState } from "react";
import Select from "react-select";

const DegreeOptions = [
  { value: "highschool", label: "High School Diploma" },
  { value: "bachelor", label: "Bachelors Degree" },
  { value: "masterdegree", label: "Master Degree" },
];

const EducationalExperience = () => {
  const [degree, setDegree] = useState(null);
  const [school, setSchool] = useState("");
  const [yearStart, setYearStart] = useState("");
  const [yearFinish, setYearFinish] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const containerStyle = {
    display: "flex",
    flexDirection: "column", // or 'column' based on your layout needs
    alignItems: "flex-start", // or other alignment properties
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

  const handleDegreeChange = (selectedOption) => {
    setDegree(selectedOption);
  };

  return (
    <>
      <div style={containerStyle}>
        <h2>Education Information</h2>
        {submitted ? (
          <div style={paraStyles}>
            <p>Degree: {degree.label}</p>
            <p>University/School: {school}</p>
            <p>From: {yearStart}</p>
            <p>To: {yearFinish}</p>
          </div>
        ) : (
          <>
            <form>
              <Select
                options={DegreeOptions}
                value={degree}
                onChange={handleDegreeChange}
              />
            </form>
            <form>
              <label>University/School: </label>
              <input
                value={school}
                placeholder="Enter the name of your school/uni"
                onChange={(e) => setSchool(e.target.value)}
                type="text"
              ></input>
            </form>
            <form>
              <label>From: </label>
              <input
                value={yearStart}
                placeholder="Starting date"
                onChange={(e) => setYearStart(e.target.value)}
                type="date"
              ></input>
            </form>
            <form>
              <label>To: </label>
              <input
                value={yearFinish}
                placeholder="Graduating date"
                onChange={(e) => setYearFinish(e.target.value)}
                type="date"
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

export default EducationalExperience;
