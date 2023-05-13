import React from 'react';
import Benefits from './components/Benefits';
import Recruitment from './components/Recruitment';
import HowWeWork from './components/HowWeWork';
// import CoreTeam from './components/CoreTeam';

const howWork = [
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

const Careers = () => {
  return (
    <div>
      <HowWeWork howWork={howWork} title="how we work" />
      {/* <CoreTeam team={team} title="Qualities of a CORE Team:" /> */}
      <Recruitment data={data} title="Recruitment Process:"/>
      <Benefits benefitsArr={benefitsArr} title="Benefits"/>
    </div>
  );
};

export default Careers;
