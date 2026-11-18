import type { ProjectCardProps } from '../../types';
import './ProjectCard.css';

export function ProjectCard({ title, description, tags, href }: ProjectCardProps) {
  return (
    <article className="project-card">
      <h2 className="project-card__title">{title}</h2>
      <p className="project-card__description">{description}</p>
      <p className="project-card__tags">{tags.join(' · ')}</p>
      {href && (
        <a
          className="project-card__link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver código
        </a>
      )}
    </article>
  );
}