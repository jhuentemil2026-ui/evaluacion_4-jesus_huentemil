import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../../data/portfolioData';
import { useTheme } from '../../hooks/useTheme';
import './Navbar.css';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <NavLink to="/" className="navbar__logo" onClick={closeMenu}>
        JH
      </NavLink>

      <button
        type="button"
        className="navbar__button navbar__menu-btn"
        aria-expanded={menuOpen}
        aria-controls="main-nav"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        Menú
      </button>

      <nav
        id="main-nav"
        className={menuOpen ? 'navbar__nav navbar__nav--open' : 'navbar__nav'}
        aria-label="Principal"
      >
        <ul className="navbar__list">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
                }
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        className="navbar__button"
        aria-pressed={theme === 'dark'}
        onClick={toggleTheme}
      >
        {theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
      </button>
    </header>
  );
}