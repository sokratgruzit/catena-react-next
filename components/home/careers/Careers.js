import React from 'react';
import Benefits from './components/benefits/Benefits';
import Recruitment from './components/recruitment/Recruitment';
import HowWeWork from './components/howwework/HowWeWork';
import CurrentOpenings from './components/currentopenings/CurrentOpenings';
import CoreTeam from './components/coreteam/CoreTeam';
import OurValues from './components/ourvalues/OurValues'
import Feature from './components/feature/Feature'
import HowWeHire from './components/howwehire/HowWeHire';

const workflow = [
  {
    title: "At CORE, our remote global team works together to accomplish a common objective. Our worldwide team enables the positive impact of our technology to infiltrate every corner of the world as we utilize the experience and feedback of our remote teams to improve and spread CORE."
  },
  {
    title: "With team members located in over 40 different countries, CORE recruits internationally but allows team members to work locally. Whether you live in the middle of Shenzhen or on a Miami beach, work location is limited only by imagination."
  },
  {
    title: "On our relentless pursuit to revolutionise the blockchain and distributed ledger industry, CORE aims to transcend the current limitations of blockchain technology and enable it to reach its true, unrealised potential. CORE intends to drastically improve blockchain interoperability, transaction processing, sustainability, and more! To achieve this, we will destroy the boundaries of innovation and stand at the forefront of blockchain and distributed ledger technology. Our purpose is to create a better decentralised future to benefit all, without boundaries."
  }
]

const featureLinkList =[
  {
    link: "senioruxdesigner_te000054",
    title: "Senior UX Designer",
    list: [
      "Technology •",
      " Full-Time •",
      " Remote • "
    ]
  },
  {
    link: "web3engineer_te000047",
    title: "Web 3 Engineer",
    list: [
      "Technology •",
      " Full-Time •",
      " Remote • "
    ]
  },
  {
    link:"rustcoreprotocoldeveloper_te000040",
    title: "Rust Core Protocol Developer",
    list: [
      "Technology •",
      " Full-Time •",
      " Remote • "
    ]
  },
  {
    link: "juniorgamedesigner_te000033",
    title: "Junior Game Designer",
    list: [
      "Technology •",
      " Full-Time •",
      " Remote • "
    ]
  },
  {
    link: "iosdevelopermidtosenior_te000032",
    title: "iOS Developer (Mid to Senior)",
    list: [
      "Technology •",
      " Full-Time •",
      " Remote • "
    ]
  },
  {
    link: "fullstackweb30developer_te000028",
    title: "Full Stack Web 3.0 Developer",
    list: [
      "Technology •",
      " Full-Time •",
      " Remote • "
    ]
  },
  {
    link: "directorofcommunications-english_sa000024",
    title: "Director of Communications - English",
    list: [
      "Sales & Support •",
      " Remote • "
    ]
  },
  {
    link: "cryptoresearchanalyst_op000019",
    title: "Crypto Research Analyst",
    list: [
      "Operations •",
      " Full-Time •",
      " Remote • "
    ]
  },
  {
    link: "creativedirector_te000018",
    title: "Creative Director",
    list: [
      "Technology •",
      " Full-Time •",
      " Remote • "
    ]
  },
  {
    link: "backendarchitect-riskmanagement_te000011",
    title: "Backend Architect - Risk Management",
    list: [
      "Technology •",
      " Full-Time •",
      " Remote • "
    ]
  },
  {
    link: "apisolutionengineerpythonnodejsdeveloperclientsupport_te000010",
    title: "API Solution Engineer (Python + Node.JS Developer / Client Support)",
    list: [
      "Technology •",
      " Full-Time •",
      " Remote • "
    ]
  },
  {
    link: "affiliateinfluencermarketingcoordinator-latam_ma000008",
    title: "Affiliate/Influencer Marketing Coordinator - LATAM",
    list: [
      "Marketing •",
      " Full-Time •",
      " Remote • "
    ]
  }
]

const team = [
  {
    title: "",
    value: "Communication while working remotely is as vital as oxygen. Continuous communication ensures project goals our met and teams remain on track. Weekly meetings are held to discuss updates and monitor performance to keep our teams connected and moving forward as one global unit."
  },
  {
    title: "Team Players",
    value: "From developers to the leadership team, all CORE team members share the CORE Values and the common goal of benefiting mankind through our technology. Our team is a unit that builds together, shares ideas, and helps where needed. CORE believes in knowing the person behind the avatar. Whether it involves travelling, a phone call, or an online meeting, we don't want faceless players on our team."
  },  {
    title: "Strong Team Member Relationships",
    value: "A strong team leads to accelerated performance and efficiency. CORE instils a sense of unity by building strong working relationships between remote teams and every team member. Team members need dynamic agility as needs will evolve requiring a step beyond comfort zones. CORE equips all team members with the skills and experience needed to fill any organisation role providing intense and fast paced skills acquisition in this rapidly growing blockchain industry."
  }, {
    title: "Always Learning",
    value: "Joining the CORE team will result in dramatic development on both a personal and professional level. CORE believes in building an empowered team that will stay for the long term. We work together and learn from each other's unique experience and knowledge base."
  },
]

const data = [
  {
      title: "Short Skills Test",
      value: "Resumes and certificates are nice, but we prefer to see you prove your skills. The skills test involves a short 15-20 minute test. Validating your skills provides almost immediate feedback! Upon receiving successful feedback, you will be shortlisted for the next step in the recruitment process."
  },
  {
      title: "Take-Home Task",
      value: "Once shortlisted, the next step is to complete a take-home assignment. This will either be a coding task or an assignment that demonstrates the skills needed for your specific role. This process also involves an interview to assess your experience and expectations."
  },
  {
      title: "Test Week and Leadership Interview",
      value: "If you've smashed the assignment and interview, the next step is 3-5 days of paid work to see if synergy exists between you and the other team members.If all goes well, we'll have a second interview to discuss any questions before officially incorporating you into our team. The recruitment process differs depending on the position. The common goal for each candidate is to ensure you have the necessary remote working and role-specific skills for your position."
  }
]

const iconImages = [
  {
    title: "Destroy Boundaries"
  },
  {
    title: "Quality Performance"
  },
  {
    title: "Original Output"
  },
  {
    title: "Unified Team"
  },
  {
    title: "Community Driven"
  }
]

const currentOpeningsList = [
  {
    title: "Technology",
    list: [
      "Planning",
      "Research",
      "Development",
      "Design & User Experience",
      "Testing & Quality Assurance",
      "DevOps",
      "Security"
    ]
  },
  {
    title: "Marketing:",
    list: [
      "Editorial",
      "Media & Productions",
      "Social Media",
      "PR",
      "Community"
    ]
  },
  {
    title: "Business Development and Partnerships:",
    list: [
      "Market Research & Strategy",
      "Reporting",
      "Events"
    ]
  },
  {
    title: "Sales & Support:",
    list: [
      "Direct Sales",
      "Channel Sales",
      "Customer Support"
    ]
  },
  {
    title: "Operations:",
    list: [
      "Admin & Secretarial"
    ]
  },
  {
    title: "Finance",
  },
  {
    title: "Legal"
  }
]

const benefitsArr = [
  {
      title: "An offer you can't refuse"
  },
  {
      title: "Freedom to choose when and where you work"
  },
  {
      title: "24 days of paid time off a year, plus local holidays"
  },
  {
      title: "Between 2 and 8 in-person meetups per year for team-building (expenses covered)"
  },
  {
      title: "Laptop and a €2,000 budget to set up your home office"
  },
  {
      title: "Reimbursement for co-working space membership or internet service at home"
  },
  {
      title: "Opportunities to attend trainings, workshops, and conferences"
  },
  {
      title: "Monthly reimbursement for gym membership, massage, and other wellness services"
  },
  {
      title: "Support for buying a phone, eyeglasses, or tools you need for doing your best work"
  },
];

const hiringProcess = [
  {
    number: "01",
    title: "Application Review"
  },
  {
    number: "02",
    title: "Interviews"
  },
  {
    number: "03",
    title: "Offer"
  },
  {
    number: "04",
    title: "Onboarding"
  }
]

const Careers = () => {
  return (
    <div>
      <HowWeWork workflow={workflow} title="how we work" />
      <Feature featureLinkList={featureLinkList} title="Featured Jobs" />
      <CoreTeam team={team} title="Qualities of a CORE Team:" />
      <Recruitment data={data} title="Recruitment Process:" />
      <OurValues iconImages={iconImages} title="Our Values" description ="
        Our core values establish the framework for our ability to create a lasting,
        positive impact for humanity:"
      />
      <CurrentOpenings currentOpeningsList={currentOpeningsList} title="Current Openings" />
      <Benefits benefitsArr={benefitsArr} title="Benefits" />
      <HowWeHire hiringProcess={hiringProcess} title="How We Hire" description="On average 2~4 week interview process with 4 interviews." />
    </div>
  );
};

export default Careers;
