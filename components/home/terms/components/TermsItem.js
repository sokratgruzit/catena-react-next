import styles from './Terms.module.css';
import { InView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import {useEffect, useState} from "react";

function TermsItem() {
  const dispatch = useDispatch();
  const [pageReady, setPageReady] = useState(false);
  let microSchemes;
  if(window.innerWidth > 1240){
    microSchemes = [
      [1,2,11,12,13,14,15,16,22,23,24],
    ];
  };

  if(window.innerWidth < 1240){
    microSchemes = [
      [1,2,5,6,7,8,9,10,11,13,14,17,18,19,20,21,22,23,24],
    ];
  };

  const setScheme = (num) => {
    console.log(num);
    dispatch({
      type: "SET_MICHROSCHEME_ARRAY",
      microschemeArray: microSchemes[num]
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setPageReady(true);
      dispatch({
        type: "SET_MICHROSCHEME_ARRAY",
        microschemeArray: microSchemes[0]
      });
    }, 400);
  },[]);
  return (
    <div className={`${styles.terms} pT-180 tYAnimation ${pageReady ? 'animate' : ''}`}>
      <h1 className={`${styles.title} font-90 ttl`}>Terms of Use</h1>
      <div className={styles.content}>
        <p>
          These Terms of Use apply to www.catena.network as well as any other affiliated sites, digital
          services, or applications on which a link to these Terms of Use appears (collectively, the \" Website\") and
          apply to all visitors. These Terms of Use and any other terms that appear on the page from which you were
          directed to these Terms of Use govern your use of the Website. By visiting and using the Website you agree
          that you are bound by these terms. Please also ensure that you follow and obey all relevant legal information
          in your country.
        </p>
        <p>
          These Terms of Use as well as the information and materials contained in the Website are subject to change at
          any time and from time to time, without notice. Do not use the website if you are not comfortable to be bound
          by these Terms of Use.
        </p>
        <p>
          The materials appearing on www.catena.network website could include technical, typographical,\n or
          photographic errors. www.catena.network does not warrant that any of the materials on its website are
          accurate, complete or current. www.catena.network may make changes to the materials contained on its
          website at any time without notice. However www.catena.network does not make any commitment to update
          the materials.
        </p>
        <p>
          All information made available on the Website is provided for informational purposes, for your non-commercial,
          personal use only. The information refers to all information and materials distributed, published, and
          otherwise made available on the Website. None of the information published on the Website constitutes a
          solicitation, an offer, or investment advice relating to any instruments, to effect any transactions, or to
          conclude any legal act of any kind whatsoever.
        </p>
        <p>
          www.catena.network does not provide investment, legal or tax advice through the Website and nothing
          herein should be construed as being financial, legal, tax or other advice.
        </p>
        <p>
          Your use of the Website is at your own risk. The Website, together with all content, information and materials
          contained therein, is provided \"as is\" and \"as available\", without any representations or warranties of
          any kind. Any materials, information or content accessed, downloaded or otherwise obtained through the use of
          the Website is done at your own risk and www.catena.network is not responsible for any damage to your
          computer systems or loss of data that results from the download of such material.
        </p>
        <p>
          In no event shall www.catena.network or its subcontractors be liable for any damages (including, without
          limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or
          inability to use the materials on this website, even if www.catena.network or a www.catena.network
          authorized representative has been notified orally or in writing of the possibility of such damage. Because
          some jurisdictions do not allow limitations on implied warranties, or limitations of liability for
          consequential or incidental damages, these limitations may not apply to you.
        </p>
        <p className={styles.boldText}>
          www.catena.network shall not be liable to you or anybody else for any damages incurred in connection
          with any messages sent to www.catena.network using ordinary E-mail or any other electronic messaging
          system.
        </p>
      </div>
    </div>
  );
}
export default TermsItem;
