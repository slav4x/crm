import React from 'react';

import styles from './Table.module.sass';
import TableItem from './TableItem';
import TablePagination from './TablePagination';

const Table: React.FC = () => {
  return (
    <div className={styles['table']}>
      <div className={styles['table-head']}>
        <div className={styles['table-col']}>ID</div>
        <div className={styles['table-col']}>Имя</div>
        <div className={styles['table-col']}>Телефон</div>
        <div className={styles['table-col']}>Форма</div>
        <div className={styles['table-col']}>Время</div>
        <div className={styles['table-col']}></div>
      </div>
      <TableItem />
      <TableItem />
      <TableItem />
      <TableItem />
      <TableItem />
      <div className={styles['table-bottom']}>
        <div className={styles['table-total']}>
          Всего <b>586</b> заявок
        </div>
        <TablePagination />
      </div>
    </div>
  );
};

export default Table;
