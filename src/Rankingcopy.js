import CourseCard from "./CourseCard";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import { useNavigate, redirect } from "react-router";
import React, { useEffect, useState } from "react";
import { render } from "@testing-library/react";

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

function meanAvg(props) {
  let total = 0;
  let count = 0;

  for (var i in props) {
    total += props[i]["mmr"];
    count++;
  }

  return Math.round(total / count);
}

let renderedOutput = <h1>click on rankings again</h1>;
let badOutput = renderedOutput;
function readCourseData() {
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const dbRef = ref(db);
  get(child(dbRef, "uci/ics/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        let data = {};
        for (var i in snapshot.val()) {
          data[i] = snapshot.val()[i];
        }

        let sorted = Object.keys(data).sort(function (a, b) {
          return meanAvg(data[a]) - meanAvg(data[b]);
        });

        renderedOutput = sorted.map((item) => (
          <CourseCard key={item} course={item} professors={data[item]} />
        ));
        return renderedOutput;
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export default function Rankings() {

  const navigate = useNavigate();
  
  
  readCourseData();

  return (
    <div>
      <div className="App container">{renderedOutput}</div>
    </div>
  );
}
