import { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';
import { StatusMessage } from '../components/StatusMessage/StatusMessage';
import { projects } from '../data/portfolioData';
import { useFetchApi } from '../hooks/useFetchApi';
import { getReposUrl } from '../services/apiService';
import type { GitHubRepo, ProjectFilter } from '../types';
import './ProjectsPage.css';

const filters: ProjectFilter[] = ['Todos', 'Backend', 'Juegos', 'Web'];

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('Todos');
  const { data: repos, loading, error } = useFetchApi<GitHubRepo[]>(getReposUrl());

  const visibleProjects =
    activeFilter === 'Todos'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <main className="projects">
      <h1 className="projects__title">Proyectos</h1>

      <div className="projects__filters" role="group" aria-label="Filtrar proyectos por categoría">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={
              filter === activeFilter
                ? 'projects__chip projects__chip--active'
                : 'projects__chip'
            }
            aria-pressed={filter === activeFilter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <section className="projects__grid" aria-label="Mis proyectos">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </section>

      <h2 className="projects__subtitle">Mis repositorios en GitHub</h2>

      {loading && <StatusMessage kind="loading" message="Cargando repositorios desde GitHub..." />}

      {error && (
        <StatusMessage
          kind="error"
          message={`No fue posible obtener los repositorios: ${error}`}
        />
      )}

      {!loading && !error && repos && repos.length === 0 && (
        <StatusMessage kind="loading" message="Todavía no hay repositorios públicos para mostrar." />
      )}

      {!loading && !error && repos && repos.length > 0 && (
        <section className="projects__grid" aria-label="Repositorios de GitHub">
          {repos.map((repo) => (
            <ProjectCard
              key={repo.id}
              title={repo.name}
              description={repo.description ?? 'Sin descripción en el repositorio.'}
              tags={[repo.language ?? 'Sin lenguaje', `★ ${repo.stargazers_count}`]}
              href={repo.html_url}
            />
          ))}
        </section>
      )}
    </main>
  );
}