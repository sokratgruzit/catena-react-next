import { Button } from '@catena-network/catena-ui-module';
import Link from 'next/link';

import styles from './Feature.module.css';

const Feature = props => {
  const { featureLinkList, title, link } = props;

  return (
    <div className={`${styles.openPositionsContainer}`}>
      <h2 className='font-51'>{title}</h2>
      <div className={`${styles.openPositionsList}`}>
        {featureLinkList.map((item, index) => {
          return (
            <Link key={index} href={item.link}>
              <div className='open-positions__list-item'>
                <span>{item.title}</span>
                {item.list.map((subitem, index) => {
                  return <span key={index}>{subitem}</span>;
                })}
              </div>
            </Link>
          );
        })}
      </div>
      <Button
        label={'Button'}
        size={'btn-lg'}
        type={'btn-primary'}
        arrow={'arrow-right'}
        element={'button'}
        disabled={true}
        onClick={() => console.log(prevState => !prevState)}
      />
    </div>
  );
};

export default Feature;
