
import ProfessorList from "./ProfessorList";
import { useState } from "react";

function meanAvg(professors) {
  let total = 0;
  for (var i = 0; i < professors.length; i++) {
    total += professors[i].mmr;
  }

  return Math.round(total / professors.length);
}

function CourseCard(props) {
  const difficulty = meanAvg(props.professors);

  

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
