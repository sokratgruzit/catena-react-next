import { Button } from "@catena-network/catena-ui-module";

import styles from "./GetSuggestion.module.css";

const GetSuggestion = ({ setActive }) => {
  return (
    <div className={`container ${styles.getSuggestContainer}`}>
      <div className={styles.getSuggestInner}>
        <h1 className={styles.title}>Got a Suggetion?</h1>
        <p>
          Community proposals are a great way to see how the community feels
          about your ideas.
        </p>
        <p>
          They won&#39;t necessarily be implemented if the community votes
          successful, but suggestions with a lot of community support may be
          made into Core proposals.
        </p>
        <Button
          label={"Make a Proposal"}
          size={"btn-lg"}
          type={"btn-primary"}
          arrow={"arrow-right"}
          element={"button"}
          disabled={false}
          onClick={() => setActive()}
        />
      </div>
    </div>
  );
};

export default GetSuggestion;
