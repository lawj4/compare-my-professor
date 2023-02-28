import ProfessorCard from "./ProfessorCard";

function ProfessorList(props) {
    var renderedOutput = props.professors.map(item =>
        <ProfessorCard professors={item} />);

      return (
        <div className = "profcontainer">
            
            {renderedOutput}
        </div>
        
      );
    } 
    
  
  
  
  export default ProfessorList;