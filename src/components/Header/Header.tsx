import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import styles from './Header.module.sass';

const Header: React.FC = () => {
  const location = useLocation();

  const links = [
    { path: '/dashboard', text: 'Главная' },
    { path: '/archive', text: 'Архив заявок' },
    { path: '/settings', text: 'Настройки' },
  ];

  return (
    <header className={styles['header']}>
      <div className={styles['header-container']}>
        <div className={styles['header-logo']}></div>
        <ul className={styles['header-nav']}>
          {links.map((link) => (
            <li
              key={link.path}
              className={location.pathname === link.path ? styles['active'] : ''}
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
