import { Link } from 'react-router-dom';
import './HomePage.css';

export function HomePage() {
  return (
    <main className="hero">
      <p className="hero__kicker">Ingeniería Civil Informática</p>
      <h1 className="hero__title">Hola, soy Jesús Huentemil.</h1>
      <p className="hero__lead">
        Estudio y construyo software: APIs, juegos y sitios web. Este portafolio reúne lo que he
        programado hasta ahora.
      </p>
      <Link to="/proyectos" className="hero__button">
        Ver proyectos
      </Link>
    </main>
  );
}