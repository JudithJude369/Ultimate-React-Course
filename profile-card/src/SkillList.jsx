import Skill from './Skill';

const skills = [
  {
    id:    0,
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    id:    1,
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    id:    2,
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    id:    3,
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    id:    4,
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    id:    5,
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

const SkillList = () => {
  return (
    <div>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p> 
      <ul className="skill-list">{skills.map((skill)=>
         <Skill skillObj={skill} key={skill.id} />)}</ul>
    </div>
  );
};

{/* <Skill skills="HTML+CSS" emoji="💪" color="blue" />
  <Skill skills="Javascript" emoji=" 👍" color="orangered" />
  <Skill skills="Git and Github" emoji="💪" color="lightblue" />
  <Skill skills="Web Design" emoji="💪" color="red" />
  <Skill skills="React" emoji="💪" color="yellow" />
  <Skill skills="Svelte" emoji="👶" color="#123456" /> */}
export default SkillList;
