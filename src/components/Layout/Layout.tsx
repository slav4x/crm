import React from 'react';

import { Header } from '../';
import css from './Layout.module.sass';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className={css['main']}>
        <div className={css['container']}>{children}</div>
      </main>
    </>
  );
};

export { Layout };
