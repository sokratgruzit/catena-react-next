import Privacy from "../../components/privacy/Privacy";
import PrivacyList from "../../components/privacy/PrivacyList";

export default function privacy() {
  const privacyList = [
    {
      title: "Your Data",
      text: "CORE strives to provide you with the best possible service. In order to provide this service we may need to collect information from you from time to time. At all times we try to only collect the information we need for the particular function or activity we are carrying out and use it in accordance with this privacy policy.",
      text: "We collect two basic types of information from You from Your use of the Website: Personal Data and Non-Personal Data.",
    },
    {
      title: "Personal Data",
      text: '"Personal Data" means any information relating to an identified or identifiable natural person; an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.',
      text: "As a general matter, You can browse the Website without submitting Your Personal Data to Us. However, there are a number of circumstances in which You may supply Us with Your Personal Data.",
      children: [
        {
          title: "Data We Collect",
          text: "We collect the following Personal Data from You:",
          bullets: ["Full Name;", "E-mail;", "Phone Number;", "Date of Birth"],
        },
        {
          title: " How We Collect Data",
          text: "The following are the most common ways in which You give Your Personal Data:",
          bullets: [
            "Participating in communities, chat rooms and comment threads, other fora, and other interactive services in the Website;",

            "Submission of User Content on any part of the Website that permit it;",

            "Any other place in the Website where You knowingly volunteer to give Personal Data.",
          ],
        },
        {
          title: "Data We Collect ",
          text: "We collect the following Personal Data from You:",
          bullets: ["Full Name;", "E-mail;", "Phone Number;", "Date of Birth"],
        },
      ],
    },
    {
      title: "Personal Data On Or From Social Media",
      text: "When You interact with the Website or Your Account through a social media platform, such as Facebook, Twitter, Tumblr, LinkedIn, YouTube, or Pinterest, We may collect the Personal Data that You make available to Us on that page including Your account ID or handle. We will comply with the privacy policies of the corresponding social media platform and We will only collect and store such Personal Data that We are permitted to collect by these social media platforms.",
      text: "Please do NOT supply any other person's Personal Data to Us, unless We prompt You to do so.",
    },
    {
      title: "Use of Personal Data",
      text: "We do NOT sell or license Your Personal Data to any third party.",
      text: "We may process any of Your Personal Data identified in this Privacy Policy where necessary for the establishment, exercise or defence of legal claims, whether in court proceedings or in an administrative or out-of-court procedure. The legal basis for this processing is Our legitimate interests, namely the protection and assertion of Our legal rights, Your legal rights and the legal rights of others.",
      text: "In addition to the specific purposes for which We may process Your Personal Data set out in this clause, We may also process any of Your Personal Data where such processing is necessary for compliance with a legal obligation to which We are subject, or in order to protect Your vital interests or the vital interests of another natural person.",
      text: "Specifically, We use Your Personal Data for the following",
      bullets: [
        "responding to Your queries and requests;",
        "investigating complaints;",
        "enforcing Our Terms and Conditions;",
        "as otherwise required or authorized by law or government agency.",
      ],
    },
  ];
  return (
    <div className="container" style={{ paddingTop: "100px" }}>
      <Privacy />
      <PrivacyList privacyList={privacyList} />
    </div>
  );
}
