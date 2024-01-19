import { useState } from "react";
import "./App.css";
import GeneralInfo from "./Components/GeneralInfo";
import EducationalExperience from "./Components/EducationalExperience";

function App() {
  return (
    <div>
      <GeneralInfo />
      <EducationalExperience />
    </div>
  );
}

export default App;
