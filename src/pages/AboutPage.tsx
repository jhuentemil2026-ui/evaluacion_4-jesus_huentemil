import { aboutParagraphs } from '../data/portfolioData';
import './AboutPage.css';

export function AboutPage() {
  return (
    <main className="about">
      <h1 className="about__title">Sobre mí</h1>
      <div className="about__content">
        <div className="about__avatar" aria-hidden="true">
          JH
        </div>
        <div className="about__text">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </main>
  );
}