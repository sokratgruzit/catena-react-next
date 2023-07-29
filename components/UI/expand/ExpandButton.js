import React from 'react';

import { VectorSvg } from '../../svg';
import Button from '../button/Button';

import styles from './Expand.module.css';

const ExpandButton = ({ expandRow, toggleExpand, className, vectorClassName, onlyVector }) => {
  return (
    <div className={`${styles.buttonWrapper} ${className}`} onClick={toggleExpand}>
      {!onlyVector && (
        <Button
          title={expandRow ? 'Hide' : 'Details'}
          className={`${styles.expandButton} ${expandRow && styles.buttonActive} `}
        />
      )}
      <VectorSvg className={`${styles.vectorSvg} ${expandRow && styles.rotate} ${vectorClassName} `} />
    </div>
  );
};

export default ExpandButton;
