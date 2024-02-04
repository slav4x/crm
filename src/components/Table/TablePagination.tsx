import React from 'react';

import css from './Table.module.sass';

const TablePagination: React.FC = () => {
  return (
    <ul className={css['table-pagination']}>
      <li className={css['prev']}>
        <a href="!#"></a>
      </li>
      <li className={css['current']}>
        <a href="!#">1</a>
      </li>
      <li>
        <a href="!#">2</a>
      </li>
      <li className={css['next']}>
        <a href="!#"></a>
      </li>
    </ul>
  );
};

export { TablePagination };
