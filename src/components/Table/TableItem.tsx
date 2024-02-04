import React from 'react';

import styles from './Table.module.sass';

const TableItem: React.FC = () => {
  return (
    <div className={styles['table-row']}>
      <div className={styles['table-col']}>7</div>
      <div className={styles['table-col']}>123213</div>
      <div className={styles['table-col']}>+7 (123) 213-21-32</div>
      <div className={styles['table-col']}>Название формы 2</div>
      <div className={styles['table-col']}>18.10.2023 15:40:40</div>
      <div className={styles['table-col']}>
        <a href="!#">Подробнее</a>
      </div>
    </div>
  );
};

export { TableItem };
