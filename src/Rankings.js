import CourseCard from "./CourseCard";

import { useNavigate, redirect } from "react-router";
import React, { useEffect, useState } from "react";
import { render } from "@testing-library/react";
import loadingImg from "./images/loading.gif";

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

function meanAvg(props) {
  let total = 0;
  let count = 0;

  for (var i in props) {
    total += props[i]["mmr"];
    count++;
  }

  return Math.round(total / count);
}

export default function Rankings() {
  let badOutput = (
    <div id="img-load">
      <img src={loadingImg} alt="loading..." width="100px" />
    </div>
  );
  const [renderedOutput, setRenderedOutput] = useState(badOutput);

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
        if (renderedOutput === badOutput) {
          setRenderedOutput(
            sorted.map((item) => (
              <CourseCard key={item} course={item} professors={data[item]} />
            ))
          );
        }
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  if (renderedOutput === badOutput) {
    console.log("bad");
  } else {
    console.log("good");
  }

  // console.log(renderedOutput)

  //   localStorage.setItem("names", JSON.stringify(renderedOutput));

  // var storedOutput = JSON.parse(localStorage.getItem("names"));
  // console.log(storedOutput);
  return (
    <div>
      <div className="App container">{renderedOutput}</div>
    </div>
  );
}
