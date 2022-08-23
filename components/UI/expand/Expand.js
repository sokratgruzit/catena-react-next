import React, { useState } from 'react';

import styles from './Expand.module.css';

const Expand = props => {
  const [expandRow, setExpandRow] = useState(false);

  const toggleExpand = () => setExpandRow(prevState => !prevState);

  const childrenWithProps = React.Children.map(props.children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        expandRow,
        setExpandRow,
        toggleExpand,
      });
    }
    return child;
  });

  return (
    <div className={props.className}>
      {childrenWithProps}
      <div
        className={`${styles.expandContent} ${
          expandRow && styles.expandTableRow
        }`}
      >
        {props.expandContent}
      </div>
    </div>
  );
};

export default Expand;
