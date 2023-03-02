import ProfessorCard from "./ProfessorCard";

function ProfessorList(props) {
  let sorted = Object.keys(props.professors).sort(function (a, b) {
    return -(props.professors[a]['mmr']- props.professors[b]['mmr']);
  });

    var renderedOutput = sorted.map((item,index) =>
        <ProfessorCard key={index} name={item} mmr={props.professors[item]['mmr']} comparisons={props.professors[item]['comparisons']} />);

      return (
        <div className = "profcontainer">
            
            {renderedOutput}
        </div>
        
      );
    } 
    
  
  
  
  export default ProfessorList;