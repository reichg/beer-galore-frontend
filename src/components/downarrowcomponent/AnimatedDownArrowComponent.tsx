import React from 'react';
import styles from "./animateddownarrow.module.css";

const AnimatedDownArrow: React.FC = () => {
  return (
    <div className={styles.arrowContainer}>
      <div className={styles.arrow}>&#x2193;</div>
    </div>
  );
};

export default AnimatedDownArrow;
