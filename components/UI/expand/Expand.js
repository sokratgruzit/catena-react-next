import React from 'react';
// import { useSpring, animated as a } from "react-spring";
import styles from '../../faq/FAQ.module.css';

const Expand = props => {
  // const faqAnimation = useSpring({
  //     from: {
  //         transform: "translate(" + Math.floor(Math.random() * 30) + "px, " + Math.floor(Math.random() * 30) + "px)",
  //     },
  //     to: [{
  //         transform: "translate(" + Math.floor(Math.random() * 30) + "px, " + Math.floor(Math.random() * 30) + "px)",
  //     }, {
  //         transform: "translate(" + Math.floor(Math.random() * 30) + "px, " + Math.floor(Math.random() * 30) + "px)",
  //     }],
  //     config: { duration: "3000" },
  //     loop: true,
  //     reset: true,
  // })

  return (
    <div onClick={props.onClick} className={styles.expandWrap}>
      {props.children}
    </div>
  );
};

export default Expand;
