import React from 'react';

import OpenPosition from '../../../../components/home/careers/openpositions/OpenPosition';

const featureLinkList = [
  {
    id: 'senioruxdesigner_te000054',
    title: 'Senior UX Designer',
    list: ['Technology •', ' Full-Time •', ' Remote • '],
  },
  {
    id: 1,
    title: 'Senior UX Designer',
    list: ['Technology •', ' Full-Time •', ' Remote • '],
  },
  {
    id: 2,
    title: 'Senior UX Designer',
    list: ['Technology •', ' Full-Time •', ' Remote • '],
  },
  {
    id: 3,
    title: 'Senior UX Designer',
    list: ['Technology •', ' Full-Time •', ' Remote • '],
  },
  {
    id: 4,
    title: 'Senior UX Designer',
    list: ['Technology •', ' Full-Time •', ' Remote • '],
  },
  {
    id: 5,
    title: 'Senior UX Designer',
    list: ['Technology •', ' Full-Time •', ' Remote • '],
  },
  {
    id: 6,
    title: 'Senior UX Designer',
    list: ['Sales & Support •', ' Remote • '],
  },
  {
    id: 7,
    title: 'Senior UX Designer',
    list: ['Operations •', ' Full-Time •', ' Remote • '],
  },
  {
    id: 8,
    title: 'Senior UX Designer',
    list: ['Technology •', ' Full-Time •', ' Remote • '],
  },
  {
    id: 9,
    title: 'Senior UX Designer',
    list: ['Technology •', ' Full-Time •', ' Remote • '],
  },
  // {
  //   id: 10,
  //   title: 'Senior UX Designer',
  //   list: ['Technology •', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 11,
  //   title: 'Senior UX Designer',
  //   list: ['Marketing •', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 12,
  //   title: 'React.JS Developer',
  //   list: ['Technology •', 'Part-Time •', ' Remote • '],
  // },
  // {
  //   id: 13,
  //   title: 'UI/UX Designer',
  //   list: ['Technology •', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 14,
  //   title: 'UI Designer',
  //   list: ['Technology •', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 15,
  //   title: 'Senior Full Stack Developer - Technical Runtime + UI',
  //   list: ['Technology •', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 16,
  //   title: 'JavaScript Engineer -Tools',
  //   list: ['Technology •', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 17,
  //   title: 'Graphic Designer',
  //   list: ['Technology •', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 18,
  //   title: 'Frontend Team Lead',
  //   list: ['Technology •', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 19,
  //   title: 'Creative Designer',
  //   list: ['Technology •', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 20,
  //   title: 'Talent Sourcer (Leadership Hiring)',
  //   list: ['Human Resources  •', '  Singapore • ', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 21,
  //   title: 'Social Media Manager (Global) ',
  //   list: ['Marketing •', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 22,
  //   title: 'Smart Contract Developer (Solidity)',
  //   list: ['Technology •', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 23,
  //   title: 'Senior Regulatory Advisor - Futures Business',
  //   list: ['Business Development and Partnerships  •', '  London • ', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 24,
  //   title: 'Senior DevOps Engineer',
  //   list: ['Technology •', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 25,
  //   title: 'Security Engineer',
  //   list: ['Technology •', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 26,
  //   title: 'Rust Blockchain Consensus Developer',
  //   list: ['Technology •', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 27,
  //   title: 'QA Engineer',
  //   list: ['Technology •', ' Full-Time •', ' Remote • '],
  // }, {
  //   id: 28,
  //   title: 'Protocol Specialist',
  //   list: ['Technology •', ' Full-Time •', ' Remote • '],
  // },

  // {
  //   id: 29,
  //   title: 'PR Director - APAC',
  //   list: ['Marketing  •', ' Full-Time •', ' Remote • '],
  // }, {
  //   id: 30,
  //   title: 'NFT/Metaverse/Gaming Marketing Manager',
  //   list: ['Marketing •', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 31,
  //   title: 'Motion/3D Designer',
  //   list: ['Technology •', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 32,
  //   title: 'In-house Translator',
  //   list: ['Sales & Support •', ' Remote • '],
  // },
  // {
  //   id: 33,
  //   title: 'Growth Product Manager & User Growth',
  //   list: ['Sales & Support •', ' Full-Time •', ' Remote • '],
  // }, {
  //   id: 34,
  //   title: 'Growth Marketing Specialist - P2P',
  //   list: ['Marketing •', ' Full-Time •', ' Remote • '],
  // },

  // {
  //   id: 35,
  //   title: 'Event Manager',
  //   list: ['Marketing •', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 36,
  //   title: 'Director of Human Resources ',
  //   list: ['Human Resources •', ' Full-Time •', ' Remote • '],
  // }, {
  //   id: 37,
  //   title: 'Director of Communications - Russian',
  //   list: ['Sales & Support •', '  Moscow • ', ' Full-Time •', ' Remote • '],
  // },

  // {
  //   id: 38,
  //   title: 'Director of Communication - Chinese',
  //   list: ['Sales & Support •', ' Full-Time •', ' Remote • '],
  // },

  // {
  //   id: 39,
  //   title: 'DevOps Engineer',
  //   list: ['Technology •', ' Full-Time •', ' Remote • '],
  // },

  // {
  //   id: 40,
  //   title: 'Data Scientist - Deep Learning',
  //   list: ['Technology •', ' Full-Time •', ' Remote • '],
  // },

  // {
  //   id: 41,
  //   title: 'Customer Support Representative - English Speaker ',
  //   list: ['Sales & Support •', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 42,
  //   title: 'Community Manager',
  //   list: ['Sales & Support •', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 43,
  //   title: 'Business Development Manager',
  //   list: ['Business Development and Partnerships •', 'Zürich •', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 44,
  //   title: 'Business Development Intern',
  //   list: ['Business Development and Partnerships •', ' Tallinn •', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 45,
  //   title: 'Blockchain Security Engineer',
  //   list: ['Technology •', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 46,
  //   title: 'Rust/Core Protocol Developer',
  //   list: ['Technology •', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 47,
  //   title: 'Blockchain Infra Developer',
  //   list: ['Technology •', ' Full-Time •', ' Remote • '],
  // },
  // {
  //   id: 48,
  //   title: 'Android Developer (Senior)',
  //   list: ['Technology •', ' Full-Time •', ' Remote • '],
  // }
];

const index = () => {
  return <OpenPosition featureLinkList={featureLinkList} />;
};

export default index;
