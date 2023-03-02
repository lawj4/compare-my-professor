import React, { useEffect, useState } from "react";
import { addProfessor } from "./Firebase";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDoxepJlqYXT4e9Q_xstE0tifmdb26F4Ak",
  authDomain: "compare-my-professor.firebaseapp.com",
  projectId: "compare-my-professor",
  storageBucket: "compare-my-professor.appspot.com",
  messagingSenderId: "452712035711",
  appId: "1:452712035711:web:c48fe3a97b52148b68964a",
  measurementId: "G-WL4J74MJV9",
  databaseURL: "https://compare-my-professor-default-rtdb.firebaseio.com/",
};

const BLANK = 3;

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

function handleSubmit(
  e,
  leftSchool,
  leftId,
  leftProfessorName,
  rightSchool,
  rightId,
  rightProfessorName,
  leftPresent,
  rightPresent
) {
  e.preventDefault();

  if (leftPresent && rightPresent) {
    console.log('hi')
  } else {
    console.log('bye')
  }
}

function doesDataExist(query, callable) {
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const dbRef = ref(db);
  get(child(dbRef, "uci/ics/" + query))
    .then((snapshot) => {
      if (snapshot.exists()) {
        callable(true);
      } else {
        callable(false);
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export default function Compare() {
  const [leftSchool, setLeftSchool] = React.useState("");
  const [leftId, setLeftId] = React.useState("");
  const [leftProfessorName, setLeftProfessorName] = React.useState("");
  const [rightSchool, setRightSchool] = React.useState("");
  const [rightId, setRightId] = React.useState("");
  const [rightProfessorName, setRightProfessorName] = React.useState("");

  const handleLeftSchoolOption = (event) => {
    setLeftSchool(event.target.value);
  };
  const handleLeftIdOption = (event) => {
    setLeftId(event.target.value);
  };
  const handleLeftProfessorOption = (event) => {
    setLeftProfessorName(event.target.value);
  };
  const handleRightSchoolOption = (event) => {
    setRightSchool(event.target.value);
  };
  const handleRightIdOption = (event) => {
    setRightId(event.target.value);
  };
  const handleRightProfessorOption = (event) => {
    setRightProfessorName(event.target.value);
  };

  const [leftPresent, setLeftPresent] = useState(false);
  const [rightPresent, setRightPresent] = useState(false);

  if (
    leftSchool.trim().length > 0 &&
    leftId.trim().length > 0 &&
    leftProfessorName.trim().length > 0
  ) {
    let leftQuery = leftSchool + leftId + "/" + leftProfessorName;
    doesDataExist(leftQuery, setLeftPresent);
  }
  if (
    rightSchool.trim().length > 0 &&
    rightId.trim().length > 0 &&
    rightProfessorName.trim().length > 0
  ) {
    let rightQuery = rightSchool + rightId + "/" + rightProfessorName;
    doesDataExist(rightQuery, setRightPresent);
  }

  console.log(leftPresent, rightPresent);

  return (
    <div>
      <form
        onSubmit={(e) =>
          handleSubmit(
            e,
            leftSchool,
            leftId,
            leftProfessorName,
            rightSchool,
            rightId,
            rightProfessorName,
            leftPresent,
            rightPresent
          )
        }
      >
        <div className="comparecol">
          <div>
            <label>School</label>
            <br />
            {mapArrayToOption(
              ["ICS", "CS", "IN4MATX", "SWE", "STATS"],
              handleLeftSchoolOption
            )}
            <br />
            <label>Course ID</label>
            <br />
            <input
              type="text"
              placeholder="6D"
              value={leftId}
              onChange={handleLeftIdOption}
            />
            <br />
            <label>Professor Name</label>
            <br />
            <input
              type="text"
              placeholder="Doug Dimmadome"
              value={leftProfessorName}
              onChange={handleLeftProfessorOption}
            />
            <br />
          </div>
          <p>is harder than</p>
          <div>
            <label>School</label>
            <br />
            {mapArrayToOption(
              ["ICS", "CS", "IN4MATX", "SWE", "STATS"],
              handleRightSchoolOption
            )}
            <br />
            <label>Course ID</label>
            <br />
            <input
              type="text"
              placeholder="6D"
              value={rightId}
              onChange={handleRightIdOption}
            />
            <br />
            <label>Professor Name</label>
            <br />
            <input
              type="text"
              placeholder="Doug Dimmadome"
              value={rightProfessorName}
              onChange={handleRightProfessorOption}
            />
            <br />
          </div>
        </div>

        <button type="submit">enter</button>
      </form>
    </div>
  );
}
