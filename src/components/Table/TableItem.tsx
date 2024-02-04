import React from 'react';

import css from './Table.module.sass';

const TableItem: React.FC = () => {
  return (
    <div className={css['table-row']}>
      <div className={css['table-col']}>7</div>
      <div className={css['table-col']}>123213</div>
      <div className={css['table-col']}>+7 (123) 213-21-32</div>
      <div className={css['table-col']}>Название формы 2</div>
      <div className={css['table-col']}>18.10.2023 15:40:40</div>
      <div className={css['table-col']}>
        <a href="!#">Подробнее</a>
      </div>
    </div>
  );
};

export { TableItem };
