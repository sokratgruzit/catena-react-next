import React, { useEffect } from 'react';
import Quill from 'quill';

const CustomBoldBlot = () => {
  useEffect(() => {
    const Inline = Quill.import('blots/inline');

    class CustomBoldBlot extends Inline {
      static create(value) {
        const node = super.create();
        if (value === 'custom-bold') {
          node.innerHTML =
            '<svg width="8" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M3.83902 5.36585H0.365854C0.165854 5.36585 0 5.2 0 5V1.34146C0 0.6 0.6 0 1.34146 0H3.83902C5.31707 0 6.52195 1.20488 6.52195 2.68293C6.52195 4.16098 5.31707 5.36585 3.83902 5.36585ZM0.726829 4.63415H3.83902C4.91707 4.63415 5.79024 3.76098 5.79024 2.68293C5.79024 1.60488 4.91707 0.731707 3.83902 0.731707H1.34146C1.00488 0.731707 0.731707 1.00488 0.731707 1.34146V4.63415H0.726829Z" fill="#162029"/><path d="M5 10.0006H1.34146C0.6 10.0006 0 9.40062 0 8.65916V5.00062C0 4.80062 0.165854 4.63477 0.365854 4.63477H5C6.47805 4.63477 7.68293 5.83964 7.68293 7.31769C7.68293 8.79574 6.47805 10.0006 5 10.0006ZM0.726829 5.36647V8.65916C0.726829 8.99574 1 9.26891 1.33659 9.26891H4.99512C6.07317 9.26891 6.94634 8.39574 6.94634 7.31769C6.94634 6.23964 6.07317 5.36647 4.99512 5.36647H0.726829Z" fill="#162029"/></svg>';
        } else {
          node.innerHTML = '<strong>B</strong>';
        }
        return node;
      }
    }
    CustomBoldBlot.blotName = 'custom-bold';
    CustomBoldBlot.tagName = 'strong';

    Quill.register(CustomBoldBlot);
  }, []);

  return <div id='quill-container' />;
};

export default CustomBoldBlot;
