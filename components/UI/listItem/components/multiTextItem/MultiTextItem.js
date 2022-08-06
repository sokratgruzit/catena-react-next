import styles from './MultiTextItem.module.css';
import listStyles from '../../ListItemRow.module.css';

const MultiTextItem = (props) => {
    let item = (
      <div className={`${listStyles.td} ${listStyles.multTextItem} ${listStyles.InfoTransactionsRowItem__flex}`}>
        <p>{props.data.text}</p>
        <p>{props.data.text2}</p>
      </div>
    );

    return item;
};

export default MultiTextItem;