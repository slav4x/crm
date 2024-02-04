import React from 'react';

import css from './Table.module.sass';
import { TableItem } from './TableItem';
import { TablePagination } from './TablePagination';

const Table: React.FC = () => {
  return (
    <div className={css['table']}>
      <div className={css['table-head']}>
        <div className={css['table-col']}>ID</div>
        <div className={css['table-col']}>Имя</div>
        <div className={css['table-col']}>Телефон</div>
        <div className={css['table-col']}>Форма</div>
        <div className={css['table-col']}>Время</div>
        <div className={css['table-col']}></div>
      </div>
      <TableItem />
      <TableItem />
      <TableItem />
      <TableItem />
      <TableItem />
      <div className={css['table-bottom']}>
        <div className={css['table-total']}>
          Всего <b>586</b> заявок
        </div>
        <TablePagination />
      </div>
    </div>
  );
};

export { Table };
