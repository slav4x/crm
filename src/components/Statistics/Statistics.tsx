import React from 'react';

import styles from './Statistics.module.sass';

const Statistics: React.FC = () => {
  return (
    <div className={styles['statistics']}>
      <div className={styles['statistics-item']}>
        <p>Всего</p>
        <b>1000</b>
      </div>
      <div className={styles['statistics-item']}>
        <p>За сегодня</p>
        <b>
          200 <i>500</i>
        </b>
        <span className={styles['up']}>4.05%</span>
      </div>
      <div className={styles['statistics-item']}>
        <p>За неделю</p>
        <b>
          300 <i>500</i>
        </b>
        <span className={styles['up']}>4.05%</span>
      </div>
      <div className={styles['statistics-item']}>
        <p>За месяц</p>
        <b>
          700 <i>500</i>
        </b>
        <span className={styles['down']}>4.05%</span>
      </div>
    </div>
  );
};

export default Statistics;
