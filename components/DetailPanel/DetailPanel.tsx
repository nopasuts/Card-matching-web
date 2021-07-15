import React from 'react';
import styles from './styles.module.scss';

interface IProps {
  click_count: number;
  personal_best: number;
  global_best: number;
}

const DetailPanel = ({ click_count, personal_best, global_best }: IProps) => {
  return (
    <div className={styles.detailPanel__container}>
      <div className={styles.detailPanel__data}>
        <h4>Click:</h4>
        <span>{click_count || '-'}</span>
      </div>
      <div className={styles.detailPanel__data}>
        <h4>My best:</h4>
        <span>{personal_best || '-'}</span>
      </div>
      <div className={styles.detailPanel__data}>
        <h4>Global best:</h4>
        <span>{global_best || '-'}</span>
      </div>
    </div>
  )
}

export default DetailPanel;
