import React from 'react';

import { Header } from '../';
import styles from './Layout.module.sass';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles['main']}>
        <div className={styles['container']}>{children}</div>
      </main>
    </>
  );
};

export { Layout };
