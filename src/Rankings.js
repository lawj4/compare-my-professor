import CourseCard from "./CourseCard";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get, push } from "firebase/database";
import { getAuth } from "firebase/auth";
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

var professor1 = {
  name: "Alberto Krone-Martins",
  mmr: 564,
};
var professor2 = {
  name: "Alex Thornton",
  mmr: 1000,
};
var professor3 = {
  name: "Richard Pattis",
  mmr: 750,
};
const professors = [professor1, professor2, professor3];

var professor4 = {
  name: "Bob Krone-Martins",
  mmr: 564,
};
var professor5 = {
  name: "Emily Thornton",
  mmr: 100,
};
const professors2 = [professor4, professor5];

var professor6 = {
  name: "Glendon Thai",
  mmr: 234,
};

const professors3 = [professor6];

var courseData = {
  ics31: professors,
  ics32: professors2,
  ics33: professors3,
};

let overallData;
let renderedOutput;


function readCourseData() {
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const dbRef = ref(db);
  get(child(dbRef, 'uci/ics/courses/'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        var data = {}
        for (var i in snapshot.val()) {
          data[i] = snapshot.val()[i];
        }
        overallData = data;
        renderedOutput = Object.keys(overallData).map((item) => (
          <CourseCard key = {item} course={item} professors={overallData[item]} />
        ));
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export default function Rankings() {
  readCourseData();
  return (
    <div>
      <div className="App container">{renderedOutput}</div>
    </div>
  );
}

