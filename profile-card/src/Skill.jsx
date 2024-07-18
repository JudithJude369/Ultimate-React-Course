const Skill = ({skillObj}) => {
  return (
    <li className="skill" style={{backgroundColor: skillObj.color}}>
      <span>{skillObj.skill}</span>
      <span>{skillObj.level === "beginner" ? "👶" 
      : skillObj.level === "intermediate" ? "👍" 
      : "💪" }</span>
    </li>
  );
};

export default Skill;
