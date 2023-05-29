
import { useRouter } from "next/router";

const CareersId = () => {
  const router = useRouter();

  const careersData = [
    {
      id: 0,
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
      ]
    },
  ];

  const item = careersData[router.query.CareersId];

  if (!item) {
    return <div>Invalid Career ID</div>; // Display an error message for invalid CareersId
  }

  return (
    <div style={{ paddingTop: '300px' }}>
      <div>
        <h1>{item.title}</h1>
        <h2>Design Presentations:</h2>
        <ul>
          {item.designPresentations.map((presentation, index) => (
            <li key={index}>{presentation.title}</li>
          ))}
        </ul>

        <h2>Requirements:</h2>
        <ul>
          {item.requirements.map((requirement, index) => (
            <li key={index}>{requirement.title}</li>
          ))}
        </ul>

        <h2>Benefits:</h2>
        <ul>
          {item.benefitsList.map((benefit, index) => (
            <li key={index}>{benefit.title}</li>
          ))}
        </ul>

        <h2>Core Multichain:</h2>
        <ul>
          {item.coreMultichain.map((core, index) => (
            <li key={index}>{core.title}</li>
          ))}
        </ul>

        <h2>Team Countries:</h2>
        <ul>
          {item.teamCountries.map((country, index) => (
            <li key={index}>{country.title}</li>
          ))}
        </ul>

        <h2>Text:</h2>
        <ul>
          {item.txt.map((text, index) => (
            <li key={index}>{text.title}</li>
          ))}
        </ul>

        <h2>Job Type:</h2>
        <ul>
          {item.jobType.map((type, index) => (
            <li key={index}>
              {type.title}: {type.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CareersId;
