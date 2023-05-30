import React from 'react';

import OpenPosition from '../../../components/home/openposition/OpenPosition';

const featureLinkList = [
  {
    id: 0,
    title: 'Senior UX Designer',
    list: ['Technology •', ' Full-Time •', ' Remote • '],
  },
  {
    id: 1,
    title: 'Web 3 Engineer',
    list: ['Technology •', ' Full-Time •', ' Remote • '],
  },
  {
    id: 2,
    title: 'Rust CATENA Protocol Developer',
    list: ['Technology •', ' Full-Time •', ' Remote • '],
  },
  {
    id: 3,
    title: 'Junior Game Designer',
    list: ['Technology •', ' Full-Time •', ' Remote • '],
  },
  {
    id: 4,
    title: 'iOS Developer (Mid to Senior)',
    list: ['Technology •', ' Full-Time •', ' Remote • '],
  },
  {
    id: 5,
    title: 'Full Stack Web 3.0 Developer',
    list: ['Technology •', ' Full-Time •', ' Remote • '],
  },
  {
    id: 6,
    title: 'Director of Communications - English',
    list: ['Sales & Support •', ' Remote • '],
  },
  {
    id: 7,
    title: 'Crypto Research Analyst',
    list: ['Operations •', ' Full-Time •', ' Remote • '],
  },
  {
    id: 8,
    title: 'Creative Director',
    list: ['Technology •', ' Full-Time •', ' Remote • '],
  },
  {
    id: 9,
    title: 'Backend Architect - Risk Management',
    list: ['Technology •', ' Full-Time •', ' Remote • '],
  },
  {
    id: 10,
    title: 'API Solution Engineer (Python + Node.JS Developer / Client Support)',
    list: ['Technology •', ' Full-Time •', ' Remote • '],
  },
  {
    id: 11,
    title: 'Affiliate/Influencer Marketing Coordinator - LATAM',
    list: ['Marketing •', ' Full-Time •', ' Remote • '],
  },
];

const index = () => {
  return (
    <div style={{ paddingTop: '300px' }}>
      <OpenPosition featureLinkList={featureLinkList} />
    </div>
  );
};

export default index;
