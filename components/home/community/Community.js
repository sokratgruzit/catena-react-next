import RevercedTitle from './components/revercedTitle/RevercedTitle';
import Plain from './components/plain/Plain';
import Listed from './components/listed/Listed';
import JoinCommunity from '../events/components/JoinCommunity';

const devCommunity = [
  {
    title: 'Strong knowledge of the basics of Blockchain development, i.e. its characteristics and popular platforms',
  },
  {
    title: 'Awareness of the points of failure in the overall system',
  },
  {
    title: 'Expertise at top Blockchain programming languag',
  },
  {
    title: 'Familiarity with the popular cryptocurrencies',
  },
  {
    title: 'A background in web development, networking, security, cryptography and mathematics',
  },
];

const grantProgramme = [
  {
    title: 'Tools for development and deployment (e.g. IDEs, SDKs for side chains)',
  },
  {
    title: 'Runtime Modules related to interoperability, governance and consensus',
  },
  {
    title: 'Ecosystem developers like wallets and exchanges.',
  },
  {
    title: 'Monitoring, such as block explorers and off-chain data services',
  },
  {
    title: 'Distributed file system developers',
  },
  {
    title: 'Bridge integrators',
  },
];

const vision = {
  title: "Vision",
  text: "Our goal is to make a lasting contribution to the blockchain ecosystem by not only addressing the current limitations of blockchain technology through our hybrid software solution, but by also growing the global blockchain community. We here at CORE Project believe in a truly peer-to-peer community and are actively involved in our community through our hosted events, our grant programme, and our collaborations. We aim to build a truly community-centric platform by instilling a community-first behaviour within the core beliefs of our team."
}

const events = {
  title: "Events",
  text: "We are actively involved in our community through outreach and hosted events. We host several events throughout the year: most notably our Hackathon event that we run annually to attract the programming talent that our growing community has to offer. We also take it upon ourselves to educate the public on the benefits, risks, and uses of blockchain technology."
}

const teams = {
  title: "Teams",
  text: "Our team also shares our passion for blockchain technology and is open to collaborate with other blockchain projects, where aside from sharing our technical knowledge, we will sponsor and organize webinars and conferences for these other projects, building a larger developer community. By integrating and collaborating with different Blockchain platforms and DeFI projects, Teams can tap into the support of the broader community of followers that we are looking to build."
}

const blockchain = {
  title: "A truly community-driven blockchain",
  text: "CORE project is centred around our community — our management and developer teams are also chosen by our community through voting done using our native token on our platform, and funding for the project comes from contributions made by our community. Apart from that, any changes proposed to our blockchain or platform will be voted for or against by our community, creating a truly community-driven blockchain."
}

const community = {
  title: "Developer Community",
  text: "To be involved in CORE developer community, a person or team must have the following qualifications:."
}

const grant = {
  title: "Grant Programme",
  text: "We offer a grant programme which users can use to get funding for their projects. The funding for the grant comes from the contributions made by our community. We provide grant funding for the following:"
}

const Community = () => {
  return (
    <>
      <div className='container' style={{ paddingTop: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', gap: '32px' }}>
        <h1 className='font-90' style={{ marginRight: '50%' }} >Community</h1>
        <RevercedTitle data={vision} />
        <Plain data={blockchain} />
        <RevercedTitle data={events} />
        <RevercedTitle data={teams} />
        <Plain data={community} />
        <Listed titles={devCommunity} />
        <Plain data={grant} />
        <Listed titles={grantProgramme} />
        <JoinCommunity />
      </div>
    </>
  );
};

export default Community;
