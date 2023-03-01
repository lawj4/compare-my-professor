
import ProfessorList from "./ProfessorList";
import { useState } from "react";

function meanAvg(props) {
  let total = 0;
  let count = 0;

  for (var i in props.professors) {
    total += props.professors[i]['mmr'];
    count ++;
  }

  return Math.round(total / count);
}

function CourseCard(props) {

  const difficulty = meanAvg(props);

  

  const [appear, setAppear] = useState(false);
  let renderedOutput;
  if (appear) {
    renderedOutput = 
      <ProfessorList professors={props.professors} />
  } else {
    renderedOutput = <div></div>
  }
  
  return (
    <div>
      <div className="CourseCard article column" onClick={() => setAppear(!appear)}>
        <div className="article__score bgdred">{difficulty}</div>
        <div className="article__title">{props.course}</div>
      </div>
      <div>
        {renderedOutput}
      </div>
    </div>
  );
}

export default CourseCard;
