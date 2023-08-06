import styles from './Terms.module.css';

function TermsItem() {
  return (
    <div className={styles.terms}>
      <h1 className={`${styles.title} font-90`}>Terms of Use</h1>
      <div className={styles.content}>
        <p>
          These Terms of Use apply to www.catenamultichain.com.com as well as any other affiliated sites, digital
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
          The materials appearing on catenamultichain.com.com website could include technical, typographical,\n or
          photographic errors. catenamultichain.com.com does not warrant that any of the materials on its website are
          accurate, complete or current. catenamultichain.com.com may make changes to the materials contained on its
          website at any time without notice. However catenamultichain.com.com does not make any commitment to update
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
          www.catenamultichain.com.com does not provide investment, legal or tax advice through the Website and nothing
          herein should be construed as being financial, legal, tax or other advice.
        </p>
        <p>
          Your use of the Website is at your own risk. The Website, together with all content, information and materials
          contained therein, is provided \"as is\" and \"as available\", without any representations or warranties of
          any kind. Any materials, information or content accessed, downloaded or otherwise obtained through the use of
          the Website is done at your own risk and catenamultichain.com.com is not responsible for any damage to your
          computer systems or loss of data that results from the download of such material.
        </p>
        <p>
          In no event shall catenamultichain.com.com or its subcontractors be liable for any damages (including, without
          limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or
          inability to use the materials on this website, even if catenamultichain.com.com or a catenamultichain.com.com
          authorized representative has been notified orally or in writing of the possibility of such damage. Because
          some jurisdictions do not allow limitations on implied warranties, or limitations of liability for
          consequential or incidental damages, these limitations may not apply to you.
        </p>
        <p className={styles.boldText}>
          www.catenamultichain.com.com shall not be liable to you or anybody else for any damages incurred in connection
          with any messages sent to www.catenamultichain.com.com using ordinary E-mail or any other electronic messaging
          system.
        </p>
      </div>
    </div>
  );
}
export default TermsItem;
