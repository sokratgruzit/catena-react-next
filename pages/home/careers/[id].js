import { useRouter } from 'next/router';

import CareersIneer from '../../../components/home/careers-inner/CareersIneer';

const careersData = [
  {
    id: 0,
    title: 'Senior UX Designer',
    senorUx: [
      {
        title:
          'CATENA Network is a blockchain ecosystem that will enable all blockchain projects and the blockchain space as a whole to thrive by addressing all of the most considerable limitations of blockchain technology, such as scalability and interoperability. ',
      },
      {
        title:
          "Are you looking to be a part of a revolutionary blockchain ecosystem that will unlock blockchain technology's unexplored potential and contribute to the cryptocurrency revolution that is busy changing the world? ",
      },
    ],

    jobInfo: [
      {
        title: 'Reference',
        value: 'TE000054',
      },
      {
        title: 'Job Type',
        value: 'Full-Time',
      },
      {
        title: 'Remote',
        value: 'Yes',
      },
    ],

    designPresentations: [
      {
        title: 'Responsible and accountable for the UX/UI design for the ecosystem.',
      },
      {
        title: 'Will have to present your designs to team members, stakeholders, and engineers.',
      },
      {
        title:
          'Create high-quality UX design solutions through sketches, wireframes, designs, flow diagrams, storyboards, and site maps by analyzing product requirements.',
      },
      {
        title: 'Knowing how to prototype is a plus.',
      },
      {
        title: 'Participate in user research as well as competitive product and data analysis.',
      },
      {
        title:
          'Ensure smooth implementation of discovered design optimization points and any identified methods to improve design systems.',
      },
      {
        title: 'Share your work within the design team and participate in design reviews.',
      },
    ],
    requirements: [
      {
        title: '5+ years experience in UX design at a product-driven company.',
      },
      {
        title: 'Have experience designing for large customer-facing platforms.',
      },
      {
        title: 'Experience in UI design is a plus.',
      },
      {
        title: 'A good logical thinker that is straight to the point with analytics and problem-solving skills.',
      },
      {
        title: 'Attention to detail.',
      },
      {
        title: 'Understand how both the frontend and backend of the system works.',
      },
      {
        title: 'Familiarity with related design methodologies, guidelines, and processes.',
      },
      {
        title: 'Expertise in Figma and its capabilities.',
      },
      {
        title: 'Understand agile workflow.',
      },
      {
        title: 'Be teamwork-oriented and enjoy working with other designers to help each other grow and learn.',
      },
      {
        title: "At least a Bachelor's degree in a design-related field.",
      },
      {
        title: 'Good English writing, reading, and communication skills',
      },
      {
        title: 'Preferably a background in the finance industry or related fields.',
      },
      {
        title: 'Experience in the digital asset industry is a plus.',
      },
    ],
    benefitsList: [
      {
        title: "We'll make you an offer you can't refuse",
      },
      {
        title: 'Freedom to choose when and where you work',
      },
      {
        title: '24 days of paid time off a year, plus your local holidays',
      },
      {
        title: 'Between 2 and 8 in-person meetups per year for team-building (expenses covered)',
      },
      {
        title: 'Laptop and a €2,000 budget to set up your home office',
      },
      {
        title: 'Reimbursement for co-working space membership or internet service at home',
      },
      {
        title: 'Opportunities to attend training, workshops, and conferences',
      },
      {
        title: 'Monthly reimbursement for a gym membership, massage, and other wellness services',
      },
      {
        title: 'Support for buying a phone, eyeglasses, or tools you need for doing your best work',
      },
    ],
    coreMultichain: [
      {
        title: 'Be a part of a revolutionary blockchain ecosystem.',
      },
      {
        title: 'Fast-paced work environment with daily business challenges.',
      },
      {
        title: 'International work environment and flat organization.',
      },
      {
        title: 'Amazing opportunity for career growth in a rapidly expanding company.',
      },
      {
        title: 'Possibility of relocation and international transfers mid-career.',
      },
      {
        title: 'Flexible working hours.',
      },
      {
        title: 'Casual work attire.',
      },
    ],
    teamCountries: [
      {
        title:
          'At CATENA Network, our team comprises remote teams from all over the world working together to accomplish a common objective. We believe that having a global team enables our technology to impact every part of the world positively. We can build our technology around the feedback and experiences of all of our remote teams.',
      },
      {
        title:
          'Our team is made up of people from over 40 different countries. We recruit internationally, and you work locally - in the middle of Shenzhen, a Miami beach, or a Greek island, the choice is yours.',
      },
    ],

    txt: [
      {
        title:
          'A 3rd generation Proof of Stake blockchain ecosystem that enables true cross-chain communication for any cryptocurrency asset and will solve the blockchain trilemma of scalability, interoperability, and throughput. The CATENA is easily accessible, allowing users to interact with the ecosystem through exchanges, wallets, games, and DeFi apps.',
      },
    ],

    jobType: [
      {
        title: 'Job Level',
        value: 'Senior',
      },
      {
        title: 'Languages',
        list: ['Englis', 'Georgian', 'Germany'],
      },
      {
        title: 'Featured',
        value: 'Yes',
      },
    ],
  },
  {
    id: 1,
    title: 'Web 3 Engineer',
    senorUx: [
      {
        title:
          'CATENA Network is a blockchain ecosystem that will enable all blockchain projects and the blockchain space as a whole to thrive by addressing all of the most considerable limitations of blockchain technology, such as scalability and interoperability. ',
      },
      {
        title:
          "Are you looking to be a part of a revolutionary blockchain ecosystem that will unlock blockchain technology's unexplored potential and contribute to the cryptocurrency revolution that is busy changing the world? ",
      },
    ],

    jobInfo: [
      {
        title: 'Reference',
        value: 'TE000054',
      },
      {
        title: 'Job Type',
        value: 'Full-Time',
      },
      {
        title: 'Remote',
        value: 'Yes',
      },
    ],
    designPresentations: [
      {
        title: 'Responsible and accountable for the UX/UI design for the ecosystem.',
      },
      {
        title: 'Will have to present your designs to team members, stakeholders, and engineers.',
      },
      {
        title:
          'Create high-quality UX design solutions through sketches, wireframes, designs, flow diagrams, storyboards, and site maps by analyzing product requirements.',
      },
      {
        title: 'Knowing how to prototype is a plus.',
      },
      {
        title: 'Participate in user research as well as competitive product and data analysis.',
      },
      {
        title:
          'Ensure smooth implementation of discovered design optimization points and any identified methods to improve design systems.',
      },
      {
        title: 'Share your work within the design team and participate in design reviews.',
      },
    ],
    requirements: [
      {
        title: '5+ years experience in UX design at a product-driven company.',
      },
      {
        title: 'Have experience designing for large customer-facing platforms.',
      },
      {
        title: 'Experience in UI design is a plus.',
      },
      {
        title: 'A good logical thinker that is straight to the point with analytics and problem-solving skills.',
      },
      {
        title: 'Attention to detail.',
      },
      {
        title: 'Understand how both the frontend and backend of the system works.',
      },
      {
        title: 'Familiarity with related design methodologies, guidelines, and processes.',
      },
      {
        title: 'Expertise in Figma and its capabilities.',
      },
      {
        title: 'Understand agile workflow.',
      },
      {
        title: 'Be teamwork-oriented and enjoy working with other designers to help each other grow and learn.',
      },
      {
        title: "At least a Bachelor's degree in a design-related field.",
      },
      {
        title: 'Good English writing, reading, and communication skills',
      },
      {
        title: 'Preferably a background in the finance industry or related fields.',
      },
      {
        title: 'Experience in the digital asset industry is a plus.',
      },
    ],
    benefitsList: [
      {
        title: "We'll make you an offer you can't refuse",
      },
      {
        title: 'Freedom to choose when and where you work',
      },
      {
        title: '24 days of paid time off a year, plus your local holidays',
      },
      {
        title: 'Between 2 and 8 in-person meetups per year for team-building (expenses covered)',
      },
      {
        title: 'Laptop and a €2,000 budget to set up your home office',
      },
      {
        title: 'Reimbursement for co-working space membership or internet service at home',
      },
      {
        title: 'Opportunities to attend training, workshops, and conferences',
      },
      {
        title: 'Monthly reimbursement for a gym membership, massage, and other wellness services',
      },
      {
        title: 'Support for buying a phone, eyeglasses, or tools you need for doing your best work',
      },
    ],
    coreMultichain: [
      {
        title: 'Be a part of a revolutionary blockchain ecosystem.',
      },
      {
        title: 'Fast-paced work environment with daily business challenges.',
      },
      {
        title: 'International work environment and flat organization.',
      },
      {
        title: 'Amazing opportunity for career growth in a rapidly expanding company.',
      },
      {
        title: 'Possibility of relocation and international transfers mid-career.',
      },
      {
        title: 'Flexible working hours.',
      },
      {
        title: 'Casual work attire.',
      },
    ],
    teamCountries: [
      {
        title:
          'At CATENA Network, our team comprises remote teams from all over the world working together to accomplish a common objective. We believe that having a global team enables our technology to impact every part of the world positively. We can build our technology around the feedback and experiences of all of our remote teams.',
      },
      {
        title:
          'Our team is made up of people from over 40 different countries. We recruit internationally, and you work locally - in the middle of Shenzhen, a Miami beach, or a Greek island, the choice is yours.',
      },
    ],

    txt: [
      {
        title:
          'A 3rd generation Proof of Stake blockchain ecosystem that enables true cross-chain communication for any cryptocurrency asset and will solve the blockchain trilemma of scalability, interoperability, and throughput. The CATENA is easily accessible, allowing users to interact with the ecosystem through exchanges, wallets, games, and DeFi apps.',
      },
    ],

    jobType: [
      {
        title: 'Job Level',
        value: 'Senior',
      },
      {
        title: 'Languages',
        list: ['Englis', 'Georgian', 'Germany'],
      },
      {
        title: 'Featured',
        value: 'Yes',
      },
    ],
  },
  {
    id: 2,
    title: 'Rust Core Protocol Developer',
    senorUx: [
      {
        title:
          'CATENA Network is a blockchain ecosystem that will enable all blockchain projects and the blockchain space as a whole to thrive by addressing all of the most considerable limitations of blockchain technology, such as scalability and interoperability. ',
      },
      {
        title:
          "Are you looking to be a part of a revolutionary blockchain ecosystem that will unlock blockchain technology's unexplored potential and contribute to the cryptocurrency revolution that is busy changing the world? ",
      },
    ],

    jobInfo: [
      {
        title: 'Reference',
        value: 'TE000054',
      },
      {
        title: 'Job Type',
        value: 'Full-Time',
      },
      {
        title: 'Remote',
        value: 'Yes',
      },
    ],
    designPresentations: [
      {
        title: 'Responsible and accountable for the UX/UI design for the ecosystem.',
      },
      {
        title: 'Will have to present your designs to team members, stakeholders, and engineers.',
      },
      {
        title:
          'Create high-quality UX design solutions through sketches, wireframes, designs, flow diagrams, storyboards, and site maps by analyzing product requirements.',
      },
      {
        title: 'Knowing how to prototype is a plus.',
      },
      {
        title: 'Participate in user research as well as competitive product and data analysis.',
      },
      {
        title:
          'Ensure smooth implementation of discovered design optimization points and any identified methods to improve design systems.',
      },
      {
        title: 'Share your work within the design team and participate in design reviews.',
      },
    ],
    requirements: [
      {
        title: '5+ years experience in UX design at a product-driven company.',
      },
      {
        title: 'Have experience designing for large customer-facing platforms.',
      },
      {
        title: 'Experience in UI design is a plus.',
      },
      {
        title: 'A good logical thinker that is straight to the point with analytics and problem-solving skills.',
      },
      {
        title: 'Attention to detail.',
      },
      {
        title: 'Understand how both the frontend and backend of the system works.',
      },
      {
        title: 'Familiarity with related design methodologies, guidelines, and processes.',
      },
      {
        title: 'Expertise in Figma and its capabilities.',
      },
      {
        title: 'Understand agile workflow.',
      },
      {
        title: 'Be teamwork-oriented and enjoy working with other designers to help each other grow and learn.',
      },
      {
        title: "At least a Bachelor's degree in a design-related field.",
      },
      {
        title: 'Good English writing, reading, and communication skills',
      },
      {
        title: 'Preferably a background in the finance industry or related fields.',
      },
      {
        title: 'Experience in the digital asset industry is a plus.',
      },
    ],
    benefitsList: [
      {
        title: "We'll make you an offer you can't refuse",
      },
      {
        title: 'Freedom to choose when and where you work',
      },
      {
        title: '24 days of paid time off a year, plus your local holidays',
      },
      {
        title: 'Between 2 and 8 in-person meetups per year for team-building (expenses covered)',
      },
      {
        title: 'Laptop and a €2,000 budget to set up your home office',
      },
      {
        title: 'Reimbursement for co-working space membership or internet service at home',
      },
      {
        title: 'Opportunities to attend training, workshops, and conferences',
      },
      {
        title: 'Monthly reimbursement for a gym membership, massage, and other wellness services',
      },
      {
        title: 'Support for buying a phone, eyeglasses, or tools you need for doing your best work',
      },
    ],
    coreMultichain: [
      {
        title: 'Be a part of a revolutionary blockchain ecosystem.',
      },
      {
        title: 'Fast-paced work environment with daily business challenges.',
      },
      {
        title: 'International work environment and flat organization.',
      },
      {
        title: 'Amazing opportunity for career growth in a rapidly expanding company.',
      },
      {
        title: 'Possibility of relocation and international transfers mid-career.',
      },
      {
        title: 'Flexible working hours.',
      },
      {
        title: 'Casual work attire.',
      },
    ],
    teamCountries: [
      {
        title:
          'At CATENA Network, our team comprises remote teams from all over the world working together to accomplish a common objective. We believe that having a global team enables our technology to impact every part of the world positively. We can build our technology around the feedback and experiences of all of our remote teams.',
      },
      {
        title:
          'Our team is made up of people from over 40 different countries. We recruit internationally, and you work locally - in the middle of Shenzhen, a Miami beach, or a Greek island, the choice is yours.',
      },
    ],

    txt: [
      {
        title:
          'A 3rd generation Proof of Stake blockchain ecosystem that enables true cross-chain communication for any cryptocurrency asset and will solve the blockchain trilemma of scalability, interoperability, and throughput. The CATENA is easily accessible, allowing users to interact with the ecosystem through exchanges, wallets, games, and DeFi apps.',
      },
    ],

    jobType: [
      {
        title: 'Job Level',
        value: 'Senior',
      },
      {
        title: 'Languages',
        list: ['Englis', 'Georgian', 'Germany'],
      },
      {
        title: 'Featured',
        value: 'Yes',
      },
    ],
  },
  {
    id: 3,
    title: 'Junior Game Designer',
    senorUx: [
      {
        title:
          'CATENA Network is a blockchain ecosystem that will enable all blockchain projects and the blockchain space as a whole to thrive by addressing all of the most considerable limitations of blockchain technology, such as scalability and interoperability. ',
      },
      {
        title:
          "Are you looking to be a part of a revolutionary blockchain ecosystem that will unlock blockchain technology's unexplored potential and contribute to the cryptocurrency revolution that is busy changing the world? ",
      },
    ],

    jobInfo: [
      {
        title: 'Reference',
        value: 'TE000054',
      },
      {
        title: 'Job Type',
        value: 'Full-Time',
      },
      {
        title: 'Remote',
        value: 'Yes',
      },
    ],
    designPresentations: [
      {
        title: 'Responsible and accountable for the UX/UI design for the ecosystem.',
      },
      {
        title: 'Will have to present your designs to team members, stakeholders, and engineers.',
      },
      {
        title:
          'Create high-quality UX design solutions through sketches, wireframes, designs, flow diagrams, storyboards, and site maps by analyzing product requirements.',
      },
      {
        title: 'Knowing how to prototype is a plus.',
      },
      {
        title: 'Participate in user research as well as competitive product and data analysis.',
      },
      {
        title:
          'Ensure smooth implementation of discovered design optimization points and any identified methods to improve design systems.',
      },
      {
        title: 'Share your work within the design team and participate in design reviews.',
      },
    ],
    requirements: [
      {
        title: '5+ years experience in UX design at a product-driven company.',
      },
      {
        title: 'Have experience designing for large customer-facing platforms.',
      },
      {
        title: 'Experience in UI design is a plus.',
      },
      {
        title: 'A good logical thinker that is straight to the point with analytics and problem-solving skills.',
      },
      {
        title: 'Attention to detail.',
      },
      {
        title: 'Understand how both the frontend and backend of the system works.',
      },
      {
        title: 'Familiarity with related design methodologies, guidelines, and processes.',
      },
      {
        title: 'Expertise in Figma and its capabilities.',
      },
      {
        title: 'Understand agile workflow.',
      },
      {
        title: 'Be teamwork-oriented and enjoy working with other designers to help each other grow and learn.',
      },
      {
        title: "At least a Bachelor's degree in a design-related field.",
      },
      {
        title: 'Good English writing, reading, and communication skills',
      },
      {
        title: 'Preferably a background in the finance industry or related fields.',
      },
      {
        title: 'Experience in the digital asset industry is a plus.',
      },
    ],
    benefitsList: [
      {
        title: "We'll make you an offer you can't refuse",
      },
      {
        title: 'Freedom to choose when and where you work',
      },
      {
        title: '24 days of paid time off a year, plus your local holidays',
      },
      {
        title: 'Between 2 and 8 in-person meetups per year for team-building (expenses covered)',
      },
      {
        title: 'Laptop and a €2,000 budget to set up your home office',
      },
      {
        title: 'Reimbursement for co-working space membership or internet service at home',
      },
      {
        title: 'Opportunities to attend training, workshops, and conferences',
      },
      {
        title: 'Monthly reimbursement for a gym membership, massage, and other wellness services',
      },
      {
        title: 'Support for buying a phone, eyeglasses, or tools you need for doing your best work',
      },
    ],
    coreMultichain: [
      {
        title: 'Be a part of a revolutionary blockchain ecosystem.',
      },
      {
        title: 'Fast-paced work environment with daily business challenges.',
      },
      {
        title: 'International work environment and flat organization.',
      },
      {
        title: 'Amazing opportunity for career growth in a rapidly expanding company.',
      },
      {
        title: 'Possibility of relocation and international transfers mid-career.',
      },
      {
        title: 'Flexible working hours.',
      },
      {
        title: 'Casual work attire.',
      },
    ],
    teamCountries: [
      {
        title:
          'At CATENA Network, our team comprises remote teams from all over the world working together to accomplish a common objective. We believe that having a global team enables our technology to impact every part of the world positively. We can build our technology around the feedback and experiences of all of our remote teams.',
      },
      {
        title:
          'Our team is made up of people from over 40 different countries. We recruit internationally, and you work locally - in the middle of Shenzhen, a Miami beach, or a Greek island, the choice is yours.',
      },
    ],

    txt: [
      {
        title:
          'A 3rd generation Proof of Stake blockchain ecosystem that enables true cross-chain communication for any cryptocurrency asset and will solve the blockchain trilemma of scalability, interoperability, and throughput. The CATENA is easily accessible, allowing users to interact with the ecosystem through exchanges, wallets, games, and DeFi apps.',
      },
    ],

    jobType: [
      {
        title: 'Job Level',
        value: 'Senior',
      },
      {
        title: 'Languages',
        list: ['Englis', 'Georgian', 'Germany'],
      },
      {
        title: 'Featured',
        value: 'Yes',
      },
    ],
  },
  {
    id: 4,
    title: 'iOS Developer (Mid to Senior)',
    senorUx: [
      {
        title:
          'CATENA Network is a blockchain ecosystem that will enable all blockchain projects and the blockchain space as a whole to thrive by addressing all of the most considerable limitations of blockchain technology, such as scalability and interoperability. ',
      },
      {
        title:
          "Are you looking to be a part of a revolutionary blockchain ecosystem that will unlock blockchain technology's unexplored potential and contribute to the cryptocurrency revolution that is busy changing the world? ",
      },
    ],

    jobInfo: [
      {
        title: 'Reference',
        value: 'TE000054',
      },
      {
        title: 'Job Type',
        value: 'Full-Time',
      },
      {
        title: 'Remote',
        value: 'Yes',
      },
    ],
    designPresentations: [
      {
        title: 'Responsible and accountable for the UX/UI design for the ecosystem.',
      },
      {
        title: 'Will have to present your designs to team members, stakeholders, and engineers.',
      },
      {
        title:
          'Create high-quality UX design solutions through sketches, wireframes, designs, flow diagrams, storyboards, and site maps by analyzing product requirements.',
      },
      {
        title: 'Knowing how to prototype is a plus.',
      },
      {
        title: 'Participate in user research as well as competitive product and data analysis.',
      },
      {
        title:
          'Ensure smooth implementation of discovered design optimization points and any identified methods to improve design systems.',
      },
      {
        title: 'Share your work within the design team and participate in design reviews.',
      },
    ],
    requirements: [
      {
        title: '5+ years experience in UX design at a product-driven company.',
      },
      {
        title: 'Have experience designing for large customer-facing platforms.',
      },
      {
        title: 'Experience in UI design is a plus.',
      },
      {
        title: 'A good logical thinker that is straight to the point with analytics and problem-solving skills.',
      },
      {
        title: 'Attention to detail.',
      },
      {
        title: 'Understand how both the frontend and backend of the system works.',
      },
      {
        title: 'Familiarity with related design methodologies, guidelines, and processes.',
      },
      {
        title: 'Expertise in Figma and its capabilities.',
      },
      {
        title: 'Understand agile workflow.',
      },
      {
        title: 'Be teamwork-oriented and enjoy working with other designers to help each other grow and learn.',
      },
      {
        title: "At least a Bachelor's degree in a design-related field.",
      },
      {
        title: 'Good English writing, reading, and communication skills',
      },
      {
        title: 'Preferably a background in the finance industry or related fields.',
      },
      {
        title: 'Experience in the digital asset industry is a plus.',
      },
    ],
    benefitsList: [
      {
        title: "We'll make you an offer you can't refuse",
      },
      {
        title: 'Freedom to choose when and where you work',
      },
      {
        title: '24 days of paid time off a year, plus your local holidays',
      },
      {
        title: 'Between 2 and 8 in-person meetups per year for team-building (expenses covered)',
      },
      {
        title: 'Laptop and a €2,000 budget to set up your home office',
      },
      {
        title: 'Reimbursement for co-working space membership or internet service at home',
      },
      {
        title: 'Opportunities to attend training, workshops, and conferences',
      },
      {
        title: 'Monthly reimbursement for a gym membership, massage, and other wellness services',
      },
      {
        title: 'Support for buying a phone, eyeglasses, or tools you need for doing your best work',
      },
    ],
    coreMultichain: [
      {
        title: 'Be a part of a revolutionary blockchain ecosystem.',
      },
      {
        title: 'Fast-paced work environment with daily business challenges.',
      },
      {
        title: 'International work environment and flat organization.',
      },
      {
        title: 'Amazing opportunity for career growth in a rapidly expanding company.',
      },
      {
        title: 'Possibility of relocation and international transfers mid-career.',
      },
      {
        title: 'Flexible working hours.',
      },
      {
        title: 'Casual work attire.',
      },
    ],
    teamCountries: [
      {
        title:
          'At CATENA Network, our team comprises remote teams from all over the world working together to accomplish a common objective. We believe that having a global team enables our technology to impact every part of the world positively. We can build our technology around the feedback and experiences of all of our remote teams.',
      },
      {
        title:
          'Our team is made up of people from over 40 different countries. We recruit internationally, and you work locally - in the middle of Shenzhen, a Miami beach, or a Greek island, the choice is yours.',
      },
    ],

    txt: [
      {
        title:
          'A 3rd generation Proof of Stake blockchain ecosystem that enables true cross-chain communication for any cryptocurrency asset and will solve the blockchain trilemma of scalability, interoperability, and throughput. The CATENA is easily accessible, allowing users to interact with the ecosystem through exchanges, wallets, games, and DeFi apps.',
      },
    ],

    jobType: [
      {
        title: 'Job Level',
        value: 'Senior',
      },
      {
        title: 'Languages',
        list: ['Englis', 'Georgian', 'Germany'],
      },
      {
        title: 'Featured',
        value: 'Yes',
      },
    ],
  },
  {
    id: 5,
    title: 'Full Stack Web 3.0 Developer',
    senorUx: [
      {
        title:
          'CATENA Network is a blockchain ecosystem that will enable all blockchain projects and the blockchain space as a whole to thrive by addressing all of the most considerable limitations of blockchain technology, such as scalability and interoperability. ',
      },
      {
        title:
          "Are you looking to be a part of a revolutionary blockchain ecosystem that will unlock blockchain technology's unexplored potential and contribute to the cryptocurrency revolution that is busy changing the world? ",
      },
    ],

    jobInfo: [
      {
        title: 'Reference',
        value: 'TE000054',
      },
      {
        title: 'Job Type',
        value: 'Full-Time',
      },
      {
        title: 'Remote',
        value: 'Yes',
      },
    ],
    designPresentations: [
      {
        title: 'Responsible and accountable for the UX/UI design for the ecosystem.',
      },
      {
        title: 'Will have to present your designs to team members, stakeholders, and engineers.',
      },
      {
        title:
          'Create high-quality UX design solutions through sketches, wireframes, designs, flow diagrams, storyboards, and site maps by analyzing product requirements.',
      },
      {
        title: 'Knowing how to prototype is a plus.',
      },
      {
        title: 'Participate in user research as well as competitive product and data analysis.',
      },
      {
        title:
          'Ensure smooth implementation of discovered design optimization points and any identified methods to improve design systems.',
      },
      {
        title: 'Share your work within the design team and participate in design reviews.',
      },
    ],
    requirements: [
      {
        title: '5+ years experience in UX design at a product-driven company.',
      },
      {
        title: 'Have experience designing for large customer-facing platforms.',
      },
      {
        title: 'Experience in UI design is a plus.',
      },
      {
        title: 'A good logical thinker that is straight to the point with analytics and problem-solving skills.',
      },
      {
        title: 'Attention to detail.',
      },
      {
        title: 'Understand how both the frontend and backend of the system works.',
      },
      {
        title: 'Familiarity with related design methodologies, guidelines, and processes.',
      },
      {
        title: 'Expertise in Figma and its capabilities.',
      },
      {
        title: 'Understand agile workflow.',
      },
      {
        title: 'Be teamwork-oriented and enjoy working with other designers to help each other grow and learn.',
      },
      {
        title: "At least a Bachelor's degree in a design-related field.",
      },
      {
        title: 'Good English writing, reading, and communication skills',
      },
      {
        title: 'Preferably a background in the finance industry or related fields.',
      },
      {
        title: 'Experience in the digital asset industry is a plus.',
      },
    ],
    benefitsList: [
      {
        title: "We'll make you an offer you can't refuse",
      },
      {
        title: 'Freedom to choose when and where you work',
      },
      {
        title: '24 days of paid time off a year, plus your local holidays',
      },
      {
        title: 'Between 2 and 8 in-person meetups per year for team-building (expenses covered)',
      },
      {
        title: 'Laptop and a €2,000 budget to set up your home office',
      },
      {
        title: 'Reimbursement for co-working space membership or internet service at home',
      },
      {
        title: 'Opportunities to attend training, workshops, and conferences',
      },
      {
        title: 'Monthly reimbursement for a gym membership, massage, and other wellness services',
      },
      {
        title: 'Support for buying a phone, eyeglasses, or tools you need for doing your best work',
      },
    ],
    coreMultichain: [
      {
        title: 'Be a part of a revolutionary blockchain ecosystem.',
      },
      {
        title: 'Fast-paced work environment with daily business challenges.',
      },
      {
        title: 'International work environment and flat organization.',
      },
      {
        title: 'Amazing opportunity for career growth in a rapidly expanding company.',
      },
      {
        title: 'Possibility of relocation and international transfers mid-career.',
      },
      {
        title: 'Flexible working hours.',
      },
      {
        title: 'Casual work attire.',
      },
    ],
    teamCountries: [
      {
        title:
          'At CATENA Network, our team comprises remote teams from all over the world working together to accomplish a common objective. We believe that having a global team enables our technology to impact every part of the world positively. We can build our technology around the feedback and experiences of all of our remote teams.',
      },
      {
        title:
          'Our team is made up of people from over 40 different countries. We recruit internationally, and you work locally - in the middle of Shenzhen, a Miami beach, or a Greek island, the choice is yours.',
      },
    ],

    txt: [
      {
        title:
          'A 3rd generation Proof of Stake blockchain ecosystem that enables true cross-chain communication for any cryptocurrency asset and will solve the blockchain trilemma of scalability, interoperability, and throughput. The CATENA is easily accessible, allowing users to interact with the ecosystem through exchanges, wallets, games, and DeFi apps.',
      },
    ],

    jobType: [
      {
        title: 'Job Level',
        value: 'Senior',
      },
      {
        title: 'Languages',
        list: ['Englis', 'Georgian', 'Germany'],
      },
      {
        title: 'Featured',
        value: 'Yes',
      },
    ],
  },
  {
    id: 6,
    title: 'Director of Communications - English',
    senorUx: [
      {
        title:
          'CATENA Network is a blockchain ecosystem that will enable all blockchain projects and the blockchain space as a whole to thrive by addressing all of the most considerable limitations of blockchain technology, such as scalability and interoperability. ',
      },
      {
        title:
          "Are you looking to be a part of a revolutionary blockchain ecosystem that will unlock blockchain technology's unexplored potential and contribute to the cryptocurrency revolution that is busy changing the world? ",
      },
    ],

    jobInfo: [
      {
        title: 'Reference',
        value: 'TE000054',
      },
      {
        title: 'Job Type',
        value: 'Full-Time',
      },
      {
        title: 'Remote',
        value: 'Yes',
      },
    ],
    designPresentations: [
      {
        title: 'Responsible and accountable for the UX/UI design for the ecosystem.',
      },
      {
        title: 'Will have to present your designs to team members, stakeholders, and engineers.',
      },
      {
        title:
          'Create high-quality UX design solutions through sketches, wireframes, designs, flow diagrams, storyboards, and site maps by analyzing product requirements.',
      },
      {
        title: 'Knowing how to prototype is a plus.',
      },
      {
        title: 'Participate in user research as well as competitive product and data analysis.',
      },
      {
        title:
          'Ensure smooth implementation of discovered design optimization points and any identified methods to improve design systems.',
      },
      {
        title: 'Share your work within the design team and participate in design reviews.',
      },
    ],
    requirements: [
      {
        title: '5+ years experience in UX design at a product-driven company.',
      },
      {
        title: 'Have experience designing for large customer-facing platforms.',
      },
      {
        title: 'Experience in UI design is a plus.',
      },
      {
        title: 'A good logical thinker that is straight to the point with analytics and problem-solving skills.',
      },
      {
        title: 'Attention to detail.',
      },
      {
        title: 'Understand how both the frontend and backend of the system works.',
      },
      {
        title: 'Familiarity with related design methodologies, guidelines, and processes.',
      },
      {
        title: 'Expertise in Figma and its capabilities.',
      },
      {
        title: 'Understand agile workflow.',
      },
      {
        title: 'Be teamwork-oriented and enjoy working with other designers to help each other grow and learn.',
      },
      {
        title: "At least a Bachelor's degree in a design-related field.",
      },
      {
        title: 'Good English writing, reading, and communication skills',
      },
      {
        title: 'Preferably a background in the finance industry or related fields.',
      },
      {
        title: 'Experience in the digital asset industry is a plus.',
      },
    ],
    benefitsList: [
      {
        title: "We'll make you an offer you can't refuse",
      },
      {
        title: 'Freedom to choose when and where you work',
      },
      {
        title: '24 days of paid time off a year, plus your local holidays',
      },
      {
        title: 'Between 2 and 8 in-person meetups per year for team-building (expenses covered)',
      },
      {
        title: 'Laptop and a €2,000 budget to set up your home office',
      },
      {
        title: 'Reimbursement for co-working space membership or internet service at home',
      },
      {
        title: 'Opportunities to attend training, workshops, and conferences',
      },
      {
        title: 'Monthly reimbursement for a gym membership, massage, and other wellness services',
      },
      {
        title: 'Support for buying a phone, eyeglasses, or tools you need for doing your best work',
      },
    ],
    coreMultichain: [
      {
        title: 'Be a part of a revolutionary blockchain ecosystem.',
      },
      {
        title: 'Fast-paced work environment with daily business challenges.',
      },
      {
        title: 'International work environment and flat organization.',
      },
      {
        title: 'Amazing opportunity for career growth in a rapidly expanding company.',
      },
      {
        title: 'Possibility of relocation and international transfers mid-career.',
      },
      {
        title: 'Flexible working hours.',
      },
      {
        title: 'Casual work attire.',
      },
    ],
    teamCountries: [
      {
        title:
          'At CATENA Network, our team comprises remote teams from all over the world working together to accomplish a common objective. We believe that having a global team enables our technology to impact every part of the world positively. We can build our technology around the feedback and experiences of all of our remote teams.',
      },
      {
        title:
          'Our team is made up of people from over 40 different countries. We recruit internationally, and you work locally - in the middle of Shenzhen, a Miami beach, or a Greek island, the choice is yours.',
      },
    ],

    txt: [
      {
        title:
          'A 3rd generation Proof of Stake blockchain ecosystem that enables true cross-chain communication for any cryptocurrency asset and will solve the blockchain trilemma of scalability, interoperability, and throughput. The CATENA is easily accessible, allowing users to interact with the ecosystem through exchanges, wallets, games, and DeFi apps.',
      },
    ],

    jobType: [
      {
        title: 'Job Level',
        value: 'Senior',
      },
      {
        title: 'Languages',
        list: ['Englis', 'Georgian', 'Germany'],
      },
      {
        title: 'Featured',
        value: 'Yes',
      },
    ],
  },
  {
    id: 7,
    title: 'Crypto Research Analyst',
    senorUx: [
      {
        title:
          'CATENA Network is a blockchain ecosystem that will enable all blockchain projects and the blockchain space as a whole to thrive by addressing all of the most considerable limitations of blockchain technology, such as scalability and interoperability. ',
      },
      {
        title:
          "Are you looking to be a part of a revolutionary blockchain ecosystem that will unlock blockchain technology's unexplored potential and contribute to the cryptocurrency revolution that is busy changing the world? ",
      },
    ],

    jobInfo: [
      {
        title: 'Reference',
        value: 'TE000054',
      },
      {
        title: 'Job Type',
        value: 'Full-Time',
      },
      {
        title: 'Remote',
        value: 'Yes',
      },
    ],
    designPresentations: [
      {
        title: 'Responsible and accountable for the UX/UI design for the ecosystem.',
      },
      {
        title: 'Will have to present your designs to team members, stakeholders, and engineers.',
      },
      {
        title:
          'Create high-quality UX design solutions through sketches, wireframes, designs, flow diagrams, storyboards, and site maps by analyzing product requirements.',
      },
      {
        title: 'Knowing how to prototype is a plus.',
      },
      {
        title: 'Participate in user research as well as competitive product and data analysis.',
      },
      {
        title:
          'Ensure smooth implementation of discovered design optimization points and any identified methods to improve design systems.',
      },
      {
        title: 'Share your work within the design team and participate in design reviews.',
      },
    ],
    requirements: [
      {
        title: '5+ years experience in UX design at a product-driven company.',
      },
      {
        title: 'Have experience designing for large customer-facing platforms.',
      },
      {
        title: 'Experience in UI design is a plus.',
      },
      {
        title: 'A good logical thinker that is straight to the point with analytics and problem-solving skills.',
      },
      {
        title: 'Attention to detail.',
      },
      {
        title: 'Understand how both the frontend and backend of the system works.',
      },
      {
        title: 'Familiarity with related design methodologies, guidelines, and processes.',
      },
      {
        title: 'Expertise in Figma and its capabilities.',
      },
      {
        title: 'Understand agile workflow.',
      },
      {
        title: 'Be teamwork-oriented and enjoy working with other designers to help each other grow and learn.',
      },
      {
        title: "At least a Bachelor's degree in a design-related field.",
      },
      {
        title: 'Good English writing, reading, and communication skills',
      },
      {
        title: 'Preferably a background in the finance industry or related fields.',
      },
      {
        title: 'Experience in the digital asset industry is a plus.',
      },
    ],
    benefitsList: [
      {
        title: "We'll make you an offer you can't refuse",
      },
      {
        title: 'Freedom to choose when and where you work',
      },
      {
        title: '24 days of paid time off a year, plus your local holidays',
      },
      {
        title: 'Between 2 and 8 in-person meetups per year for team-building (expenses covered)',
      },
      {
        title: 'Laptop and a €2,000 budget to set up your home office',
      },
      {
        title: 'Reimbursement for co-working space membership or internet service at home',
      },
      {
        title: 'Opportunities to attend training, workshops, and conferences',
      },
      {
        title: 'Monthly reimbursement for a gym membership, massage, and other wellness services',
      },
      {
        title: 'Support for buying a phone, eyeglasses, or tools you need for doing your best work',
      },
    ],
    coreMultichain: [
      {
        title: 'Be a part of a revolutionary blockchain ecosystem.',
      },
      {
        title: 'Fast-paced work environment with daily business challenges.',
      },
      {
        title: 'International work environment and flat organization.',
      },
      {
        title: 'Amazing opportunity for career growth in a rapidly expanding company.',
      },
      {
        title: 'Possibility of relocation and international transfers mid-career.',
      },
      {
        title: 'Flexible working hours.',
      },
      {
        title: 'Casual work attire.',
      },
    ],
    teamCountries: [
      {
        title:
          'At CATENA Network, our team comprises remote teams from all over the world working together to accomplish a common objective. We believe that having a global team enables our technology to impact every part of the world positively. We can build our technology around the feedback and experiences of all of our remote teams.',
      },
      {
        title:
          'Our team is made up of people from over 40 different countries. We recruit internationally, and you work locally - in the middle of Shenzhen, a Miami beach, or a Greek island, the choice is yours.',
      },
    ],

    txt: [
      {
        title:
          'A 3rd generation Proof of Stake blockchain ecosystem that enables true cross-chain communication for any cryptocurrency asset and will solve the blockchain trilemma of scalability, interoperability, and throughput. The CATENA is easily accessible, allowing users to interact with the ecosystem through exchanges, wallets, games, and DeFi apps.',
      },
    ],

    jobType: [
      {
        title: 'Job Level',
        value: 'Senior',
      },
      {
        title: 'Languages',
        list: ['Englis', 'Georgian', 'Germany'],
      },
      {
        title: 'Featured',
        value: 'Yes',
      },
    ],
  },
  {
    id: 8,
    title: 'Creative Director',
    senorUx: [
      {
        title:
          'CATENA Network is a blockchain ecosystem that will enable all blockchain projects and the blockchain space as a whole to thrive by addressing all of the most considerable limitations of blockchain technology, such as scalability and interoperability. ',
      },
      {
        title:
          "Are you looking to be a part of a revolutionary blockchain ecosystem that will unlock blockchain technology's unexplored potential and contribute to the cryptocurrency revolution that is busy changing the world? ",
      },
    ],

    jobInfo: [
      {
        title: 'Reference',
        value: 'TE000054',
      },
      {
        title: 'Job Type',
        value: 'Full-Time',
      },
      {
        title: 'Remote',
        value: 'Yes',
      },
    ],
    designPresentations: [
      {
        title: 'Responsible and accountable for the UX/UI design for the ecosystem.',
      },
      {
        title: 'Will have to present your designs to team members, stakeholders, and engineers.',
      },
      {
        title:
          'Create high-quality UX design solutions through sketches, wireframes, designs, flow diagrams, storyboards, and site maps by analyzing product requirements.',
      },
      {
        title: 'Knowing how to prototype is a plus.',
      },
      {
        title: 'Participate in user research as well as competitive product and data analysis.',
      },
      {
        title:
          'Ensure smooth implementation of discovered design optimization points and any identified methods to improve design systems.',
      },
      {
        title: 'Share your work within the design team and participate in design reviews.',
      },
    ],
    requirements: [
      {
        title: '5+ years experience in UX design at a product-driven company.',
      },
      {
        title: 'Have experience designing for large customer-facing platforms.',
      },
      {
        title: 'Experience in UI design is a plus.',
      },
      {
        title: 'A good logical thinker that is straight to the point with analytics and problem-solving skills.',
      },
      {
        title: 'Attention to detail.',
      },
      {
        title: 'Understand how both the frontend and backend of the system works.',
      },
      {
        title: 'Familiarity with related design methodologies, guidelines, and processes.',
      },
      {
        title: 'Expertise in Figma and its capabilities.',
      },
      {
        title: 'Understand agile workflow.',
      },
      {
        title: 'Be teamwork-oriented and enjoy working with other designers to help each other grow and learn.',
      },
      {
        title: "At least a Bachelor's degree in a design-related field.",
      },
      {
        title: 'Good English writing, reading, and communication skills',
      },
      {
        title: 'Preferably a background in the finance industry or related fields.',
      },
      {
        title: 'Experience in the digital asset industry is a plus.',
      },
    ],
    benefitsList: [
      {
        title: "We'll make you an offer you can't refuse",
      },
      {
        title: 'Freedom to choose when and where you work',
      },
      {
        title: '24 days of paid time off a year, plus your local holidays',
      },
      {
        title: 'Between 2 and 8 in-person meetups per year for team-building (expenses covered)',
      },
      {
        title: 'Laptop and a €2,000 budget to set up your home office',
      },
      {
        title: 'Reimbursement for co-working space membership or internet service at home',
      },
      {
        title: 'Opportunities to attend training, workshops, and conferences',
      },
      {
        title: 'Monthly reimbursement for a gym membership, massage, and other wellness services',
      },
      {
        title: 'Support for buying a phone, eyeglasses, or tools you need for doing your best work',
      },
    ],
    coreMultichain: [
      {
        title: 'Be a part of a revolutionary blockchain ecosystem.',
      },
      {
        title: 'Fast-paced work environment with daily business challenges.',
      },
      {
        title: 'International work environment and flat organization.',
      },
      {
        title: 'Amazing opportunity for career growth in a rapidly expanding company.',
      },
      {
        title: 'Possibility of relocation and international transfers mid-career.',
      },
      {
        title: 'Flexible working hours.',
      },
      {
        title: 'Casual work attire.',
      },
    ],
    teamCountries: [
      {
        title:
          'At CATENA Network, our team comprises remote teams from all over the world working together to accomplish a common objective. We believe that having a global team enables our technology to impact every part of the world positively. We can build our technology around the feedback and experiences of all of our remote teams.',
      },
      {
        title:
          'Our team is made up of people from over 40 different countries. We recruit internationally, and you work locally - in the middle of Shenzhen, a Miami beach, or a Greek island, the choice is yours.',
      },
    ],

    txt: [
      {
        title:
          'A 3rd generation Proof of Stake blockchain ecosystem that enables true cross-chain communication for any cryptocurrency asset and will solve the blockchain trilemma of scalability, interoperability, and throughput. The CATENA is easily accessible, allowing users to interact with the ecosystem through exchanges, wallets, games, and DeFi apps.',
      },
    ],

    jobType: [
      {
        title: 'Job Level',
        value: 'Senior',
      },
      {
        title: 'Languages',
        list: ['Englis', 'Georgian', 'Germany'],
      },
      {
        title: 'Featured',
        value: 'Yes',
      },
    ],
  },
  {
    id: 9,
    title: 'Backend Architect - Risk Management',
    senorUx: [
      {
        title:
          'CATENA Network is a blockchain ecosystem that will enable all blockchain projects and the blockchain space as a whole to thrive by addressing all of the most considerable limitations of blockchain technology, such as scalability and interoperability. ',
      },
      {
        title:
          "Are you looking to be a part of a revolutionary blockchain ecosystem that will unlock blockchain technology's unexplored potential and contribute to the cryptocurrency revolution that is busy changing the world? ",
      },
    ],

    jobInfo: [
      {
        title: 'Reference',
        value: 'TE000054',
      },
      {
        title: 'Job Type',
        value: 'Full-Time',
      },
      {
        title: 'Remote',
        value: 'Yes',
      },
    ],
    designPresentations: [
      {
        title: 'Responsible and accountable for the UX/UI design for the ecosystem.',
      },
      {
        title: 'Will have to present your designs to team members, stakeholders, and engineers.',
      },
      {
        title:
          'Create high-quality UX design solutions through sketches, wireframes, designs, flow diagrams, storyboards, and site maps by analyzing product requirements.',
      },
      {
        title: 'Knowing how to prototype is a plus.',
      },
      {
        title: 'Participate in user research as well as competitive product and data analysis.',
      },
      {
        title:
          'Ensure smooth implementation of discovered design optimization points and any identified methods to improve design systems.',
      },
      {
        title: 'Share your work within the design team and participate in design reviews.',
      },
    ],
    requirements: [
      {
        title: '5+ years experience in UX design at a product-driven company.',
      },
      {
        title: 'Have experience designing for large customer-facing platforms.',
      },
      {
        title: 'Experience in UI design is a plus.',
      },
      {
        title: 'A good logical thinker that is straight to the point with analytics and problem-solving skills.',
      },
      {
        title: 'Attention to detail.',
      },
      {
        title: 'Understand how both the frontend and backend of the system works.',
      },
      {
        title: 'Familiarity with related design methodologies, guidelines, and processes.',
      },
      {
        title: 'Expertise in Figma and its capabilities.',
      },
      {
        title: 'Understand agile workflow.',
      },
      {
        title: 'Be teamwork-oriented and enjoy working with other designers to help each other grow and learn.',
      },
      {
        title: "At least a Bachelor's degree in a design-related field.",
      },
      {
        title: 'Good English writing, reading, and communication skills',
      },
      {
        title: 'Preferably a background in the finance industry or related fields.',
      },
      {
        title: 'Experience in the digital asset industry is a plus.',
      },
    ],
    benefitsList: [
      {
        title: "We'll make you an offer you can't refuse",
      },
      {
        title: 'Freedom to choose when and where you work',
      },
      {
        title: '24 days of paid time off a year, plus your local holidays',
      },
      {
        title: 'Between 2 and 8 in-person meetups per year for team-building (expenses covered)',
      },
      {
        title: 'Laptop and a €2,000 budget to set up your home office',
      },
      {
        title: 'Reimbursement for co-working space membership or internet service at home',
      },
      {
        title: 'Opportunities to attend training, workshops, and conferences',
      },
      {
        title: 'Monthly reimbursement for a gym membership, massage, and other wellness services',
      },
      {
        title: 'Support for buying a phone, eyeglasses, or tools you need for doing your best work',
      },
    ],
    coreMultichain: [
      {
        title: 'Be a part of a revolutionary blockchain ecosystem.',
      },
      {
        title: 'Fast-paced work environment with daily business challenges.',
      },
      {
        title: 'International work environment and flat organization.',
      },
      {
        title: 'Amazing opportunity for career growth in a rapidly expanding company.',
      },
      {
        title: 'Possibility of relocation and international transfers mid-career.',
      },
      {
        title: 'Flexible working hours.',
      },
      {
        title: 'Casual work attire.',
      },
    ],
    teamCountries: [
      {
        title:
          'At CATENA Network, our team comprises remote teams from all over the world working together to accomplish a common objective. We believe that having a global team enables our technology to impact every part of the world positively. We can build our technology around the feedback and experiences of all of our remote teams.',
      },
      {
        title:
          'Our team is made up of people from over 40 different countries. We recruit internationally, and you work locally - in the middle of Shenzhen, a Miami beach, or a Greek island, the choice is yours.',
      },
    ],

    txt: [
      {
        title:
          'A 3rd generation Proof of Stake blockchain ecosystem that enables true cross-chain communication for any cryptocurrency asset and will solve the blockchain trilemma of scalability, interoperability, and throughput. The CATENA is easily accessible, allowing users to interact with the ecosystem through exchanges, wallets, games, and DeFi apps.',
      },
    ],

    jobType: [
      {
        title: 'Job Level',
        value: 'Senior',
      },
      {
        title: 'Languages',
        list: ['Englis', 'Georgian', 'Germany'],
      },
      {
        title: 'Featured',
        value: 'Yes',
      },
    ],
  },
  {
    id: 10,
    title: 'API Solution Engineer (Python + Node.JS Developer / Client Support)',
    senorUx: [
      {
        title:
          'CATENA Network is a blockchain ecosystem that will enable all blockchain projects and the blockchain space as a whole to thrive by addressing all of the most considerable limitations of blockchain technology, such as scalability and interoperability. ',
      },
      {
        title:
          "Are you looking to be a part of a revolutionary blockchain ecosystem that will unlock blockchain technology's unexplored potential and contribute to the cryptocurrency revolution that is busy changing the world? ",
      },
    ],

    jobInfo: [
      {
        title: 'Reference',
        value: 'TE000054',
      },
      {
        title: 'Job Type',
        value: 'Full-Time',
      },
      {
        title: 'Remote',
        value: 'Yes',
      },
    ],
    designPresentations: [
      {
        title: 'Responsible and accountable for the UX/UI design for the ecosystem.',
      },
      {
        title: 'Will have to present your designs to team members, stakeholders, and engineers.',
      },
      {
        title:
          'Create high-quality UX design solutions through sketches, wireframes, designs, flow diagrams, storyboards, and site maps by analyzing product requirements.',
      },
      {
        title: 'Knowing how to prototype is a plus.',
      },
      {
        title: 'Participate in user research as well as competitive product and data analysis.',
      },
      {
        title:
          'Ensure smooth implementation of discovered design optimization points and any identified methods to improve design systems.',
      },
      {
        title: 'Share your work within the design team and participate in design reviews.',
      },
    ],
    requirements: [
      {
        title: '5+ years experience in UX design at a product-driven company.',
      },
      {
        title: 'Have experience designing for large customer-facing platforms.',
      },
      {
        title: 'Experience in UI design is a plus.',
      },
      {
        title: 'A good logical thinker that is straight to the point with analytics and problem-solving skills.',
      },
      {
        title: 'Attention to detail.',
      },
      {
        title: 'Understand how both the frontend and backend of the system works.',
      },
      {
        title: 'Familiarity with related design methodologies, guidelines, and processes.',
      },
      {
        title: 'Expertise in Figma and its capabilities.',
      },
      {
        title: 'Understand agile workflow.',
      },
      {
        title: 'Be teamwork-oriented and enjoy working with other designers to help each other grow and learn.',
      },
      {
        title: "At least a Bachelor's degree in a design-related field.",
      },
      {
        title: 'Good English writing, reading, and communication skills',
      },
      {
        title: 'Preferably a background in the finance industry or related fields.',
      },
      {
        title: 'Experience in the digital asset industry is a plus.',
      },
    ],
    benefitsList: [
      {
        title: "We'll make you an offer you can't refuse",
      },
      {
        title: 'Freedom to choose when and where you work',
      },
      {
        title: '24 days of paid time off a year, plus your local holidays',
      },
      {
        title: 'Between 2 and 8 in-person meetups per year for team-building (expenses covered)',
      },
      {
        title: 'Laptop and a €2,000 budget to set up your home office',
      },
      {
        title: 'Reimbursement for co-working space membership or internet service at home',
      },
      {
        title: 'Opportunities to attend training, workshops, and conferences',
      },
      {
        title: 'Monthly reimbursement for a gym membership, massage, and other wellness services',
      },
      {
        title: 'Support for buying a phone, eyeglasses, or tools you need for doing your best work',
      },
    ],
    coreMultichain: [
      {
        title: 'Be a part of a revolutionary blockchain ecosystem.',
      },
      {
        title: 'Fast-paced work environment with daily business challenges.',
      },
      {
        title: 'International work environment and flat organization.',
      },
      {
        title: 'Amazing opportunity for career growth in a rapidly expanding company.',
      },
      {
        title: 'Possibility of relocation and international transfers mid-career.',
      },
      {
        title: 'Flexible working hours.',
      },
      {
        title: 'Casual work attire.',
      },
    ],
    teamCountries: [
      {
        title:
          'At CATENA Network, our team comprises remote teams from all over the world working together to accomplish a common objective. We believe that having a global team enables our technology to impact every part of the world positively. We can build our technology around the feedback and experiences of all of our remote teams.',
      },
      {
        title:
          'Our team is made up of people from over 40 different countries. We recruit internationally, and you work locally - in the middle of Shenzhen, a Miami beach, or a Greek island, the choice is yours.',
      },
    ],

    txt: [
      {
        title:
          'A 3rd generation Proof of Stake blockchain ecosystem that enables true cross-chain communication for any cryptocurrency asset and will solve the blockchain trilemma of scalability, interoperability, and throughput. The CATENA is easily accessible, allowing users to interact with the ecosystem through exchanges, wallets, games, and DeFi apps.',
      },
    ],

    jobType: [
      {
        title: 'Job Level',
        value: 'Senior',
      },
      {
        title: 'Languages',
        list: ['Englis', 'Georgian', 'Germany'],
      },
      {
        title: 'Featured',
        value: 'Yes',
      },
    ],
  },
  {
    id: 11,
    title: 'Affiliate/Influencer Marketing Coordinator - LATAM',
    senorUx: [
      {
        title:
          'CATENA Network is a blockchain ecosystem that will enable all blockchain projects and the blockchain space as a whole to thrive by addressing all of the most considerable limitations of blockchain technology, such as scalability and interoperability. ',
      },
      {
        title:
          "Are you looking to be a part of a revolutionary blockchain ecosystem that will unlock blockchain technology's unexplored potential and contribute to the cryptocurrency revolution that is busy changing the world? ",
      },
    ],

    jobInfo: [
      {
        title: 'Reference',
        value: 'TE000054',
      },
      {
        title: 'Job Type',
        value: 'Full-Time',
      },
      {
        title: 'Remote',
        value: 'Yes',
      },
    ],
    designPresentations: [
      {
        title: 'Responsible and accountable for the UX/UI design for the ecosystem.',
      },
      {
        title: 'Will have to present your designs to team members, stakeholders, and engineers.',
      },
      {
        title:
          'Create high-quality UX design solutions through sketches, wireframes, designs, flow diagrams, storyboards, and site maps by analyzing product requirements.',
      },
      {
        title: 'Knowing how to prototype is a plus.',
      },
      {
        title: 'Participate in user research as well as competitive product and data analysis.',
      },
      {
        title:
          'Ensure smooth implementation of discovered design optimization points and any identified methods to improve design systems.',
      },
      {
        title: 'Share your work within the design team and participate in design reviews.',
      },
    ],
    requirements: [
      {
        title: '5+ years experience in UX design at a product-driven company.',
      },
      {
        title: 'Have experience designing for large customer-facing platforms.',
      },
      {
        title: 'Experience in UI design is a plus.',
      },
      {
        title: 'A good logical thinker that is straight to the point with analytics and problem-solving skills.',
      },
      {
        title: 'Attention to detail.',
      },
      {
        title: 'Understand how both the frontend and backend of the system works.',
      },
      {
        title: 'Familiarity with related design methodologies, guidelines, and processes.',
      },
      {
        title: 'Expertise in Figma and its capabilities.',
      },
      {
        title: 'Understand agile workflow.',
      },
      {
        title: 'Be teamwork-oriented and enjoy working with other designers to help each other grow and learn.',
      },
      {
        title: "At least a Bachelor's degree in a design-related field.",
      },
      {
        title: 'Good English writing, reading, and communication skills',
      },
      {
        title: 'Preferably a background in the finance industry or related fields.',
      },
      {
        title: 'Experience in the digital asset industry is a plus.',
      },
    ],
    benefitsList: [
      {
        title: "We'll make you an offer you can't refuse",
      },
      {
        title: 'Freedom to choose when and where you work',
      },
      {
        title: '24 days of paid time off a year, plus your local holidays',
      },
      {
        title: 'Between 2 and 8 in-person meetups per year for team-building (expenses covered)',
      },
      {
        title: 'Laptop and a €2,000 budget to set up your home office',
      },
      {
        title: 'Reimbursement for co-working space membership or internet service at home',
      },
      {
        title: 'Opportunities to attend training, workshops, and conferences',
      },
      {
        title: 'Monthly reimbursement for a gym membership, massage, and other wellness services',
      },
      {
        title: 'Support for buying a phone, eyeglasses, or tools you need for doing your best work',
      },
    ],
    coreMultichain: [
      {
        title: 'Be a part of a revolutionary blockchain ecosystem.',
      },
      {
        title: 'Fast-paced work environment with daily business challenges.',
      },
      {
        title: 'International work environment and flat organization.',
      },
      {
        title: 'Amazing opportunity for career growth in a rapidly expanding company.',
      },
      {
        title: 'Possibility of relocation and international transfers mid-career.',
      },
      {
        title: 'Flexible working hours.',
      },
      {
        title: 'Casual work attire.',
      },
    ],
    teamCountries: [
      {
        title:
          'At CATENA Network, our team comprises remote teams from all over the world working together to accomplish a common objective. We believe that having a global team enables our technology to impact every part of the world positively. We can build our technology around the feedback and experiences of all of our remote teams.',
      },
      {
        title:
          'Our team is made up of people from over 40 different countries. We recruit internationally, and you work locally - in the middle of Shenzhen, a Miami beach, or a Greek island, the choice is yours.',
      },
    ],

    txt: [
      {
        title:
          'A 3rd generation Proof of Stake blockchain ecosystem that enables true cross-chain communication for any cryptocurrency asset and will solve the blockchain trilemma of scalability, interoperability, and throughput. The CATENA is easily accessible, allowing users to interact with the ecosystem through exchanges, wallets, games, and DeFi apps.',
      },
    ],

    jobType: [
      {
        title: 'Job Level',
        value: 'Senior',
      },
      {
        title: 'Languages',
        list: ['Englis', 'Georgian', 'Germany'],
      },
      {
        title: 'Featured',
        value: 'Yes',
      },
    ],
  },
];

export const getStaticPaths = async () => {
  const paths = careersData.map(item => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = parseInt(params.id);
  const object = careersData.find(item => item.id === id);

  return {
    props: {
      object,
    },
  };
};

const CareersId = ({ object }) => {
  const router = useRouter();

  return <CareersIneer data={object} />;
};

export default CareersId;
