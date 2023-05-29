import { Button } from '@catena-network/catena-ui-module';
import Link from 'next/link';

import styles from './Feature.module.css';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {
      featureLinkList: data,
      title: "Feature Title"
    }
  };
};

const Feature = ({ featureLinkList, title }) => {
  if (!featureLinkList) {
    return null;
  }

  return (
    <div className={`${styles.openPositionsContainer}`}>
      <h2 className='font-51'>{title}</h2>
      <div className={`${styles.openPositionsList}`}>
        {featureLinkList.map((item) => (
          <div className='open-positions__list-item' key={item.id}>
            <Link href={`/home/careers/${item.id}`} key={item.id}>
              <a>{item.title}</a>
            </Link>
          </div>
        ))}
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


