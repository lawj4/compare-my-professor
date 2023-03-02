import React from "react";
import { addProfessor } from "./Firebase";

function mapArrayToOption(arr, callable) {
  return (
    <select onChange={callable}>
      <option selected disabled>
        Choose here
      </option>
      {arr.map((e) => {
        return <option>{e}</option>;
      })}
    </select>
  );
}

function handleSubmit(e, school, id, professorName) {
  e.preventDefault();
  if (
    school.trim().length === 0 ||
    id.trim().length === 0 ||
    professorName.trim().length === 0
  ) {
    alert("ERROR: every entry must be filled in");
    return;
  }


  let courseName = school + id;

  addProfessor(courseName, professorName);
}

export default function Add() {
  const [school, setSchool] = React.useState("");
  const [id, setId] = React.useState("");
  const [professorName, setProfessorName] = React.useState("");

  const handleSchoolOption = (event) => {
    setSchool(event.target.value);
  };
  const handleIdOption = (event) => {
    setId(event.target.value);
  };
  const handleProfessorOption = (event) => {
    setProfessorName(event.target.value);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, school, id, professorName)}>
        <label>School</label>
        <br />
        {mapArrayToOption(["ICS", "CS","IN4MATX","SWE","STATS"], handleSchoolOption)}
        <br />
        <label>Course ID</label>
        <br />
        <input
          type="text"
          placeholder="6D"
          value={id}
          onChange={handleIdOption}
        />
        <br />
        <label>Professor Name</label>
        <br />
        <input
          type="text"
          placeholder="Doug Dimmadome"
          value={professorName}
          onChange={handleProfessorOption}
        />
        <br />
        <button type="submit">enter</button>
      </form>
    </div>
  );
}
