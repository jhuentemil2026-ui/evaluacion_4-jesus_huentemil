import { skills } from '../data/portfolioData';
import './SkillsPage.css';

export function SkillsPage() {
  return (
    <main className="skills">
      <h1 className="skills__title">Habilidades</h1>
      <ul className="skills__list">
        {skills.map((skill) => (
          <li key={skill} className="skills__item">
            {skill}
          </li>
        ))}
      </ul>
    </main>
  );
}