import React from 'react';

import css from './Statistics.module.sass';

const Statistics: React.FC = () => {
  return (
    <div className={css['statistics']}>
      <div className={css['statistics-item']}>
        <p>Всего</p>
        <b>1000</b>
      </div>
      <div className={css['statistics-item']}>
        <p>За сегодня</p>
        <b>
          200 <i>500</i>
        </b>
        <span className={css['up']}>4.05%</span>
      </div>
      <div className={css['statistics-item']}>
        <p>За неделю</p>
        <b>
          300 <i>500</i>
        </b>
        <span className={css['up']}>4.05%</span>
      </div>
      <div className={css['statistics-item']}>
        <p>За месяц</p>
        <b>
          700 <i>500</i>
        </b>
        <span className={css['down']}>4.05%</span>
      </div>
    </div>
  );
};

export { Statistics };
