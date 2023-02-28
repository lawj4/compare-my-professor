
  function ProfessorCard(props) {
      return (
        <div className="sidearticle">
          <div className="sidearticle__score bgdyellow">{props.professors.mmr}</div>
          <div className="sidearticle__title">{props.professors.name}</div>
        </div>
      );
    } 
    
  
  
  
  export default ProfessorCard;