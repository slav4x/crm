import React from 'react';

import styles from './Table.module.sass';

const TablePagination: React.FC = () => {
  return (
    <ul className={styles['table-pagination']}>
      <li className={styles['prev']}>
        <a href="!#"></a>
      </li>
      <li className={styles['current']}>
        <a href="!#">1</a>
      </li>
      <li>
        <a href="!#">2</a>
      </li>
      <li className={styles['next']}>
        <a href="!#"></a>
      </li>
    </ul>
  );
};

export { TablePagination };
