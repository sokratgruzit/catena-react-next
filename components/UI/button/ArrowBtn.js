import Link from 'next/link';

import styles from './ArrowBtn.module.css';

const ArrowBtn = props => {
  let title = '';
  let route = '';
  let btn = '';

  if (props.route === 'nfts') {
    route = '/overview/nfts';
    title = 'Back Overview';
  }

  if (props.route === 'back__collections') {
    route = '/overview/nfts/collections';
    title = 'Back';
  }

  if (props.route === 'activity') {
    route = `/overview/nfts/activity`;
    title = `See Activities`;
  }

  if (props.route === 'activity' && props.direction === 'forward' && props.title === 'viewAll') {
    route = '/overview/nfts/activity';
    title = 'View All';
  }

  if (props.route === 'collections' && props.direction === 'forward' && props.title === 'viewAll') {
    route = '/overview/nfts/collections';
    title = 'View All';
  }

  if (props.direction === 'back') {
    btn = (
      <Link href={route}>
        <div className={styles.backBtn}>
          <svg width='14' height='11' viewBox='0 0 14 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M-2.18557e-07 5.5C-2.28619e-07 5.26981 0.0914429 5.04905 0.254213 4.88628L4.38628 0.754214C4.72523 0.415263 5.27477 0.415263 5.61372 0.754214C5.95267 1.09316 5.95267 1.64271 5.61372 1.98166L2.09539 5.5L5.61372 9.01834C5.95268 9.35729 5.95268 9.90684 5.61372 10.2458C5.27477 10.5847 4.72523 10.5847 4.38628 10.2458L0.254213 6.11372C0.091443 5.95095 -2.08495e-07 5.73019 -2.18557e-07 5.5Z'
              fill='#FF7152'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0.113281 5.49925C0.113281 5.0199 0.50187 4.63131 0.981219 4.63131L12.438 4.63131C12.9173 4.63131 13.3059 5.0199 13.3059 5.49925C13.3059 5.9786 12.9173 6.36719 12.438 6.36719L0.981219 6.36719C0.50187 6.36719 0.113281 5.9786 0.113281 5.49925Z'
              fill='#FF7152'
            />
          </svg>
          <p>{title}</p>
        </div>
      </Link>
    );
  }

  if (props.direction === 'forward') {
    btn = (
      <Link href={route}>
        <div className={styles.forwardBtn}>
          {title}
          <svg width='14' height='11' viewBox='0 0 14 11' fill='FF7152' xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M13.6602 5.94727C13.6602 5.71707 13.5687 5.49631 13.4059 5.33354L9.27388 1.20148C8.93493 0.862529 8.38538 0.862529 8.04643 1.20148C7.70748 1.54043 7.70748 2.08998 8.04643 2.42893L11.5648 5.94727L8.04643 9.4656C7.70748 9.80455 7.70748 10.3541 8.04643 10.6931C8.38538 11.032 8.93493 11.032 9.27388 10.6931L13.4059 6.56099C13.5687 6.39822 13.6602 6.17746 13.6602 5.94727Z'
              fill='#FF7152'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M13.5469 5.94652C13.5469 5.46717 13.1583 5.07858 12.679 5.07858L1.22317 5.07858C0.743857 5.07858 0.3553 5.46717 0.3553 5.94652C0.3553 6.42586 0.743857 6.81445 1.22317 6.81445L12.679 6.81445C13.1583 6.81445 13.5469 6.42586 13.5469 5.94652Z'
              fill='#FF7152'
            />
          </svg>
        </div>
      </Link>
    );
  }

  return btn;
};

export default ArrowBtn;
