import ProfessorCard from "./ProfessorCard";

function ProfessorList(props) {
  let arr = [];
  for (var i in props.professors) {
      arr.push(i);
      
  }
    var renderedOutput = arr.map((item,index) =>
        <ProfessorCard key={index} name={item} mmr={props.professors[item]['mmr']} comparisons={props.professors[item]['comparisons']} />);

      return (
        <div className = "profcontainer">
            
            {renderedOutput}
        </div>
        
      );
    } 
    
  
  
  
  export default ProfessorList;