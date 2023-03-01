import CourseCard from "./CourseCard";

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


function Rankings() {
  var renderedOutput = Object.keys(courseData).map((item) => (
    <CourseCard course={item} professors={courseData[item]} />
  ));

  return (
    <div>
      <div className="App container">{renderedOutput}</div>
    </div>
  );
}

export default Rankings;
