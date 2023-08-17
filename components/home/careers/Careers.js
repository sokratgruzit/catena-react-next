import Benefits from './components/benefits/Benefits';
import CareersCatena from './components/careerscatena/CareersCatena';
import CompanyInfo from './components/companyinfo/CompanyInfo';
import CoreTeam from './components/coreteam/CoreTeam';
import CurrentOpenings from './components/currentopenings/CurrentOpenings';
import Feature from './components/feature/Feature';
import HowWeHire from './components/howwehire/HowWeHire';
import OurValues from './components/ourvalues/OurValues';
import Recruitment from './components/recruitment/Recruitment';
import Destroy from '../../svg/careers/Destroy';
import Quality from '../../svg/careers/Quality';
import Original from '../../svg/careers/Original';
import Unified from '../../svg/careers/Unified';
import Driven from '../../svg/careers/Driven';
import { InView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import {useEffect,useState} from "react";

const workflow = [
  {
    title:
      'At CATENA, our remote global team works together to accomplish a common objective. Our worldwide team enables the positive impact of our technology to infiltrate every corner of the world as we utilize the experience and feedback of our remote teams to improve and spread CATENA.',
  },
  {
    title:
      'With team members located in over 40 different countries, CATENA recruits internationally but allows team members to work locally. Whether you live in the middle of Shenzhen or on a Miami beach, work location is limited only by imagination.',
  },
  {
    title:
      'On our relentless pursuit to revolutionise the blockchain and distributed ledger industry, CATENA aims to transcend the current limitations of blockchain technology and enable it to reach its true, unrealised potential. CATENA intends to drastically improve blockchain interoperability, transaction processing, sustainability, and more! To achieve this, we will destroy the boundaries of innovation and stand at the forefront of blockchain and distributed ledger technology. Our purpose is to create a better decentralised future to benefit all, without boundaries.',
  },
];

const team = [
  {
    title: '',
    value:
      'Communication while working remotely is as vital as oxygen. Continuous communication ensures project goals our met and teams remain on track. Weekly meetings are held to discuss updates and monitor performance to keep our teams connected and moving forward as one global unit.',
  },
  {
    title: 'Team Players',
    value:
      "From developers to the leadership team, all CATENA team members share the CATENA Values and the common goal of benefiting mankind through our technology. Our team is a unit that builds together, shares ideas, and helps where needed. CATENA believes in knowing the person behind the avatar. Whether it involves travelling, a phone call, or an online meeting, we don't want faceless players on our team.",
  },
  {
    title: 'Strong Team Member Relationships',
    value:
      'A strong team leads to accelerated performance and efficiency. CATENA instils a sense of unity by building strong working relationships between remote teams and every team member. Team members need dynamic agility as needs will evolve requiring a step beyond comfort zones. CATENA equips all team members with the skills and experience needed to fill any organisation role providing intense and fast paced skills acquisition in this rapidly growing blockchain industry.',
  },
  {
    title: 'Always Learning',
    value:
      "Joining the CATENA team will result in dramatic development on both a personal and professional level. CATENA believes in building an empowered team that will stay for the long term. We work together and learn from each other's unique experience and knowledge base.",
  },
];

const data = [
  {
    title: 'Short Skills Test',
    value:
      'Resumes and certificates are nice, but we prefer to see you prove your skills. The skills test involves a short 15-20 minute test. Validating your skills provides almost immediate feedback! Upon receiving successful feedback, you will be shortlisted for the next step in the recruitment process.',
  },
  {
    title: 'Take-Home Task',
    value:
      'Once shortlisted, the next step is to complete a take-home assignment. This will either be a coding task or an assignment that demonstrates the skills needed for your specific role. This process also involves an interview to assess your experience and expectations.',
  },
  {
    title: 'Test Week and Leadership Interview',
    value:
      "If you've smashed the assignment and interview, the next step is 3-5 days of paid work to see if synergy exists between you and the other team members.If all goes well, we'll have a second interview to discuss any questions before officially incorporating you into our team. The recruitment process differs depending on the position. The common goal for each candidate is to ensure you have the necessary remote working and role-specific skills for your position.",
  },
];

const iconImages = [
  {
    svg: (
      <Destroy />
    ),
    title: 'Destroy Boundaries',
  },
  {
    svg: (
     <Quality />
    ),
    title: 'Quality Performance',
  },
  {
    svg: (
     <Original />
    ),
    title: 'Original Output',
  },
  {
    svg: (
      <Unified />
    ),
    title: 'Unified Team',
  },
  {
    svg: (
     <Driven />
    ),
    title: 'Community Driven',
  },
];

const currentOpeningsList = [
  {
    title: 'Technology',
    list: [
      'Planning',
      'Research',
      'Development',
      'Design & User Experience',
      'Testing & Quality Assurance',
      'DevOps',
      'Security',
    ],
  },
  {
    title: 'Marketing:',
    list: ['Editorial', 'Media & Productions', 'Social Media', 'PR', 'Community'],
  },
  {
    title: 'Business Development and Partnerships:',
    list: ['Market Research & Strategy', 'Reporting', 'Events'],
  },
  {
    title: 'Sales & Support:',
    list: ['Direct Sales', 'Channel Sales', 'Customer Support'],
  },
  {
    title: 'Operations:',
    list: ['Admin & Secretarial'],
  },
  {
    title: 'Human Resources:',
    list: ['Recruitment','Training','Payroll'],
  },
  {
    title: 'Finance',
    list: [],
  },
  {
    title: 'Legal',
    list: [],
  },
];

const benefitsArr = [
  {
    title: "An offer you can't refuse",
  },
  {
    title: 'Freedom to choose when and where you work',
  },
  {
    title: '24 days of paid time off a year, plus local holidays',
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
    title: 'Opportunities to attend trainings, workshops, and conferences',
  },
  {
    title: 'Monthly reimbursement for gym membership, massage, and other wellness services',
  },
  {
    title: 'Support for buying a phone, eyeglasses, or tools you need for doing your best work',
  },
];

const hiringProcess = [
  {
    number: '01',
    title: 'Application Review',
  },
  {
    number: '02',
    title: 'Interviews',
  },
  {
    number: '03',
    title: 'Offer',
  },
  {
    number: '04',
    title: 'Onboarding',
  },
];

const Careers = ({careers}) => {
  const dispatch = useDispatch();
  const [pageReady, setPageReady] = useState(false);
  let microSchemes;
  if(window.innerWidth > 1240){
      microSchemes = [
          [1,2,8,9,10,11,12,13,14,21,22,23,24],
          [1,2,10,11,12,13,14,20,21,22,23,24]
      ];
  }

  if(window.innerWidth < 1240){
      microSchemes = [
        [1,2,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,23,24],
        [1,2,10,11,12,13,14,20,21,22,23,24]
      ];
  }

  const setScheme = (num) => {
      console.log(num);
      dispatch({
          type: "SET_MICHROSCHEME_ARRAY",
          microschemeArray: microSchemes[num]
      });
  }

  useEffect(() => {
      setTimeout(() => {
          setPageReady(true);
          dispatch({
              type: "SET_MICHROSCHEME_ARRAY",
              microschemeArray: microSchemes[0]
          });
      }, 400);
  },[]);
  return (
    <div>
      <InView as="div" onChange={(inView, entry) => (inView && setScheme(0))}>
        <CareersCatena animate={pageReady}/>
        <CompanyInfo workflow={workflow} title='How we work' animate={pageReady}/>
        <Feature careers={careers} title='Featured Jobs' showButton={true} animate={pageReady}/>
      </InView>
      
      <InView as="div" onChange={(inView, entry) => (inView && setScheme(1))}>
        <OurValues
          iconImages={iconImages}
          title='Our Values'
          description='
          Our CATENA values establish the framework for our ability to create a lasting,
          positive impact for humanity:'
        />
        <CoreTeam team={team} title='Qualities of' title2='a Hypercube Team' />
        <Recruitment data={data} title='Recruitment Process:' />
        <CurrentOpenings currentOpeningsList={currentOpeningsList} title='Current Openings' />
        <Benefits benefitsArr={benefitsArr} title='Benefits Available Following Recruitment:' />
        <HowWeHire
          hiringProcess={hiringProcess}
          title='How We Hire'
          description='On average 2~4 week interview process with 4 interviews.'
        />
       </InView>
    </div>
  );
};

export default Careers;
