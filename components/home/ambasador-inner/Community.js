import CommunityEvents from "./components/CommunityEvents";
import JoinCatenaCommunity from "./components/JoinCatenaCommunity";
import AmbassadorExpectations from "../ambassador/components/AmbassadorExpectations";

const devCommunity = [
  {
    title: "Strong knowledge of the basics of Blockchain development, i.e. its characteristics and popular platforms",
  },
  {
    title: "Awareness of the points of failure in the overall system",
  },
  {
    title: "Expertise at top Blockchain programming languag",
  },
  {
    title: "Familiarity with the popular cryptocurrencies",
  },
  {
    title: "A background in web development, networking, security, cryptography and mathematics",
  },
];

const grantProgramme = [
  {
    title: "Tools for development and deployment (e.g. IDEs, SDKs for side chains)",
  },
  {
    title: "Runtime Modules related to interoperability, governance and consensus",
  },
  {
    title: "Ecosystem developers like wallets and exchanges.",
  },
  {
    title: "Monitoring, such as block explorers and off-chain data services",
  },
  {
    title: "Distributed file system developers",
  },
  {
    title: "Bridge integrators",
  },
];

const Community = () => {
  return (
    <div style={{ paddingTop: "300px" }}>
      <CommunityEvents
        title="community"
        info="Our goal is to make a lasting contribution to the blockchain ecosystem by not only addressing the current limitations of blockchain technology through our hybrid software solution, but by also growing the global blockchain community. We here at CATENA Project believe in a truly peer-to-peer community and are actively involved in our community through our hosted events, our grant programme, and our collaborations."
        infoCont="We aim to build a truly community-centric platform by instilling a community-first behaviour within the CATENA beliefs of our team."
        description="vision"
      />
      <CommunityEvents
        info="CATENA project is centred around our community — our management and developer teams are also chosen by our community through voting done using our native token on our platform, and funding for the project comes from contributions made by our community."
        infoCont="Apart from that, any changes proposed to our blockchain or platform will be voted for or against by our community, creating a truly community-driven blockchain."
        description="A truly community-driven blockchain"
      />
      <CommunityEvents
        info="We are actively involved in our community through outreach and hosted events. We host several events throughout the year: most notably our Hackathon event that we run annually to attract the programming talent that our growing community has to offer."
        infoCont="We also take it upon ourselves to educate the public on the benefits, risks, and uses of blockchain technology"
        description="events"
      />
      <CommunityEvents
        info="Our team also shares our passion for blockchain technology and is open to collaborate with other blockchain projects, where aside from sharing our technical knowledge, we will sponsor and organize webinars and conferences for these other projects, building a larger developer community."
        infoCont="By integrating and collaborating with different Blockchain platforms and DeFI projects, Teams can tap into the support of the broader community of followers that we are looking to build."
        description="teams"
      />
      <AmbassadorExpectations
        ambassadorApplication={devCommunity}
        description="To be involved in CATENA developer community, a person or team must have the following qualifications:"
        name="Developer Community"
      />
      <AmbassadorExpectations
        ambassadorApplication={grantProgramme}
        description="We offer a grant programme which users can use to get funding for their projects. The funding for the grant comes from the contributions made by our community. We provide grant funding for the following:"
        title="Grant Programme"
        proposals="Please submit your proposal on or before Monday 10 May 2021 at 18:00h GMT to"
      />
      <JoinCatenaCommunity />
    </div>
  );
};

export default Community;
