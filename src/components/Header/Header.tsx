import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import css from './Header.module.sass';

const Header: React.FC = () => {
  const location = useLocation();

  const links = [
    { path: '/dashboard', text: 'Главная' },
    { path: '/archive', text: 'Архив заявок' },
    { path: '/settings', text: 'Настройки' },
  ];

  return (
    <header className={css['header']}>
      <div className={css['header-container']}>
        <div className={css['header-logo']}></div>
        <ul className={css['header-nav']}>
          {links.map((link) => (
            <li
              key={link.path}
              className={location.pathname === link.path ? css['active'] : ''}
            >
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export { Header };
