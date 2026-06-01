import { skills } from "../data/skill";

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>

        {skills.map((skill) => (
          <div key={skill.id}>
            {skill.name} - {skill.level}%
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;