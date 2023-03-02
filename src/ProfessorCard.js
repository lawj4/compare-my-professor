
  function ProfessorCard(props) {
      return (
        <div className="sidearticle">
          <div className="sidearticle__score bgdyellow">{props.mmr}</div>
          <div className="sidearticle__title">{props.name}</div>
          <div className="sidearticle__excerpt">{props.comparisons} comparisons</div>
        </div>
      );
    } 
    
  
  
  
  export default ProfessorCard;