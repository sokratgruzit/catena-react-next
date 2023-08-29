import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ImgTextItem from './components/ImgTextItem/ImgTextItem';
import MiniImgTextItem from './components/miniImageTextItem/MiniImgTextItem';
import MultiTextItem from './components/multiTextItem/MultiTextItem';
import MultiTextSvg from './components/multiTextSvg/MultiTextSvg';
import PriceChange from './components/priceChange/PriceChange';
import PriceItem from './components/PriceItem/PriceItem';
import TextItem from './components/TextItem/TextItem';
import TextSvg from './components/TextSvg/TextSvg';
import { VectorSvg } from '../../svg';

import styles from './ListItemRow.module.css';

const ListItemRow = props => {
  let data = props.data;
  let type = props.type;
  let obj = null;

  const [activeList, setActiveList] = useState(null);
  const router = useRouter();

  const mobileListOpener = hash => {
    if (activeList === hash) {
      setActiveList(null);
    } else {
      setActiveList(hash);
    }
  };
  let cs = styles.nft_activity_table;

  if (type === 'dashboard') {
    cs = styles.dashboardRowItem;
  }

  if (type === 'nft_activity') {
    cs = styles.nft_activity_table;
  }

  if (type === 'nft_collections') {
    cs = styles.Collections__item;
  }

  if (type === 'info_table_tokens') {
    cs = styles.InfoTokensRowItem;
  }

  if (type === 'info_table_pools') {
    cs = styles.InfoPoolsRowItem;
  }

  if (type === 'info_table_transactions') {
    cs = styles.InfoTransactionsRowItem;
  }

  if (type === 'nft_buy') {
    cs = styles.buy__outer;
  }

  if (type === 'earn_pools') {
    cs = styles.earn_poolsRow;
  }
  if (type === 'earn_farms') {
    cs = styles.earn_farmsRow;
  }
  if (type === 'voting') {
    cs = styles.voting_row;
  }
  if (type === 'proposal_votes') {
    cs = styles.proposal_votes_row;
  }
  obj = (
    <div className={`${cs} ${styles.rowItem}`} onClick={props?.toggleExpand}>
      {data.data.map((item, index) => {
        if (item.type === 'img_text') {
          return <ImgTextItem key={'img_text' + type + index} data={item} onClick={item.onClick} />;
        }

        if (item.type === 'mini-img_text') {
          return <MiniImgTextItem key={'mini-img_text' + type + index} data={item} onClick={item.onClick} />;
        }

        if (item.type === 'text') {
          return <TextItem key={'text' + type + index} data={item} />;
        }

        if (item.type === 'multi_text') {
          return <MultiTextItem key={'multi_text' + type + index} data={item} />;
        }

        if (item.type === 'price') {
          return <PriceItem key={'price' + type + index} data={item} />;
        }

        if (item.type === 'svg') {
          return <TextSvg key={'svg' + type + index} data={item} />;
        }

        if (item.type === 'price_change') {
          return <PriceChange key={'price_change' + type + index} data={item} />;
        }
        if (item.type === 'multi_svg') {
          return <MultiTextSvg key={'multi_svg' + type + index} data={item} />;
        }
        if (item.type === 'expand_custom') {
          return (
            <div className={styles.vectorDiv}>
              <VectorSvg key={index} className={`${styles.vectorSvg} ${props.expandRow && styles.vectorActive}`} />
            </div>
          );
        }
      })}
    </div>
  );

  return obj;
};

export default ListItemRow;
