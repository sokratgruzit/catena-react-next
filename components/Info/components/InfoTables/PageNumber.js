import React from 'react';

const PageNumber = props => {
  return (
    <div
      className={`${props.mainStyle} ${
        props.state === props.title ? props.activeStyle : ''
      }`}
      onClick={() => props.setState(props.title)}
    >
      {props.title}
    </div>
  );
};

export default PageNumber;
