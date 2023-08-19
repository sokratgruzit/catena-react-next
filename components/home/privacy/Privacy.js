import PrivacyList from './components/PrivacyList';

import styles from './styles/Privacy.module.css';
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";

export default function privacy() {
  const dispatch = useDispatch();
  const [pageReady, setPageReady] = useState(false);
  let microSchemes;
  if(window.innerWidth > 1240){
    microSchemes = [
      [1,2,12,13,14,15,16,17,23,24],
    ];
  }

  if(window.innerWidth < 1240){
    microSchemes = [
      [1,2,5,6,7,8,9,10,11,12,13,22,23,24],
    ];
  }

  const setScheme = (num) => {
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
  const privacyList = [
    {
      title: 'Your Data',
      text: [
        'CATENA strives to provide you with the best possible service. In order to provide this service we may need to collect information from you from time to time. At all times we try to only collect the information we need for the particular function or activity we are carrying out and use it in accordance with this privacy policy.',
        'We collect two basic types of information from You from Your use of the Website: Personal Data and Non-Personal Data.',
      ],
    },
    {
      title: 'Personal Data',
      text: [
        '"Personal Data" means any information relating to an identified or identifiable natural person; an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.',
        'As a general matter, You can browse the Website without submitting Your Personal Data to Us. However, there are a number of circumstances in which You may supply Us with Your Personal Data.',
      ],
      children: [
        {
          title: 'Data We Collect',
          text: 'We collect the following Personal Data from You:',
          bullets: ['Full Name;', 'E-mail;', 'Phone Number;', 'Date of Birth'],
        },
        {
          title: ' How We Collect Data',
          text: 'The following are the most common ways in which You give Your Personal Data:',
          bullets: [
            'Participating in communities, chat rooms and comment threads, other fora, and other interactive services in the Website;',

            'Submission of User Content on any part of the Website that permit it;',

            'Any other place in the Website where You knowingly volunteer to give Personal Data.',
          ],
        },
      ],
    },
    {
      title: 'Personal Data On Or From Social Media',
      text: [
        'When You interact with the Website or Your Account through a social media platform, such as Facebook, Twitter, Tumblr, LinkedIn, YouTube, or Pinterest, We may collect the Personal Data that You make available to Us on that page including Your account ID or handle. We will comply with the privacy policies of the corresponding social media platform and We will only collect and store such Personal Data that We are permitted to collect by these social media platforms.',
        "Please do NOT supply any other person's Personal Data to Us, unless We prompt You to do so.",
      ],
    },
    {
      title: 'Use of Personal Data',
      text: [
        'We do NOT sell or license Your Personal Data to any third party.',
        'We may process any of Your Personal Data identified in this Privacy Policy where necessary for the establishment, exercise or defence of legal claims, whether in court proceedings or in an administrative or out-of-court procedure. The legal basis for this processing is Our legitimate interests, namely the protection and assertion of Our legal rights, Your legal rights and the legal rights of others.',
        'In addition to the specific purposes for which We may process Your Personal Data set out in this clause, We may also process any of Your Personal Data where such processing is necessary for compliance with a legal obligation to which We are subject, or in order to protect Your vital interests or the vital interests of another natural person.',
        'Specifically, We use Your Personal Data for the following',
      ],
      bullets: [
        'responding to Your queries and requests;',
        'investigating complaints;',
        'enforcing Our Terms and Conditions;',
        'as otherwise required or authorized by law or government agency.',
      ],
    },
    {
      title: 'Sharing Of Personal Data',
      text: [
        'We may share your Personal Data with the following:',
        "Third-Party Suppliers. We may disclose Your Enquiry Data to one or more of those selected third-party suppliers of Goods and Services identified on Our Website for the purpose of enabling them to contact You so that they can offer, market and sell relevant Goods and/or Services to You. Each such third party will act as a data controller in relation to thea Enquiry Data that We supply to it; and upon contacting You, each such third party will supply to You a copy of its own privacy policy, which will govern that third party's use of Your Personal Data. The suppliers and providers with whom We may share Your information include:",
      ],
      bullets: [
        'Social networking sites',
        'Analytics services',
        'IT service providers and web hosting companies',
        'Legal, auditing and other professional advisors or consultants',
        'Billing or data storage services',
      ],
      textTwo: [
        'Other Purposes. In addition to the specific disclosures of Personal Data set out in this Section, We may disclose Your Personal Data where such disclosure is necessary for compliance with a legal obligation to which We are subject, or in order to protect Our vital interests, Your vital interests, or the vital interests of another natural person. We may also disclose Your Personal Data where such disclosure is necessary for the establishment, exercise or defence of legal claims, whether in court proceedings or in an administrative or out-of-court procedure.',
      ],
    },

    {
      title: 'Data Security',
      text: [
        'We follow generally accepted industry standards to protect the information submitted to Us, both during transmission and once We receive it. We maintain appropriate administrative, technical and physical safeguards to protect Personal Data against accidental or unlawful destruction, accidental loss, unauthorised alteration, unauthorised disclosure or access, misuse, and any other unlawful form of processing of the Personal Data in Our possession. This includes, for example, firewalls, password protection and other access and authentication controls.',
        'We use HTTPS',
        'HTTPS (Hypertext Transfer Protocol Secure) is an internet communication protocol that protects the integrity and confidentiality of data between your computer and www.catena.network. The use of HTTPS makes sure your communication with us is:',
        'Encrypted — The data you exchange with us is secure from eavesdroppers. That means that when you are browsing www.catena.network, nobody can track your activities across multiple pages, or steal the data exchange between your computer and www.catena.network.',
        'Integral — The use of HTTPS preserves the integrity of data. Your data cannot be modified or corrupted during transfer.',
        'Authenticated — HTTPS protocol authenticates your communication with us. This ensures that you are always communicating with our servers.',
        'However, no method of transmission over the Internet, or method of electronic storage, is 100% secure. We cannot ensure or warrant the security of any information You transmit to Us or store on the Website, and You do so at Your own risk. We also cannot guarantee that such information may not be accessed, disclosed, altered, or destroyed by breach of any of Our physical, technical, or managerial safeguards. If You believe Your Personal Data has been compromised, please contact Us at info@catena.network.',
        'If We learn of a security systems breach, then We attempt to notify You electronically so that You can take appropriate protective steps. We may post a notice through the Website if a security breach occurs.',
      ],
    },
    {
      title: 'Non-Personal Data',
      text: [
        'Non-Personal Data includes information that does not personally identify You, but may include tracking and usage information about Your location, demographics, use of the Website and the internet.',
        'When You interact with the Website, We may collect Non-Personal Data and Our servers may automatically keep an activity log of Your use of the Website.',
      ],
      children: [
        {
          title: 'Generally, We collect and store the following Non-Personal Data:',
          bullets: [
            'Demographic information such as age, gender, and five-digit zip code as part of collecting Personal Data;',
            'Device information about Your computer, mobile device, or other device that You use to access the Website. This information may include IP address, geolocation information, unique device identifiers, browser type, browser language, and other transactional information;',
            'Usage information about Your use of the Website. This information includes a reading history of the pages You view.',
            'Additional “traffic information” such as time of access, date of access, software crash reports, application errors, session identification number, access times, and referring site addresses.',
            'Your search terms and search results',
            'Other information regarding Your use of the Website.',
          ],
        },
      ],
    },
    {
      title: 'Use of Non-Personal Data',
      text: [
        'We may disclose or share Non-Personal Data (or other information, other than Personal Data) in any other manner that We deem appropriate or necessary.',
        'Among other things, We will disclose Non-Personal Data to third parties to help Us determine how users use parts of the Website and who Our users are so We can improve the Website.',
        'We will also disclose Non-Personal Data to Our partners and other third parties about how Our users collectively use the Website.',
      ],
    },
    {
      title: 'Personal & Non-Personal Data From Other Sources',
      text: [
        'We may also collect and store information about You that We receive from other sources to, among other things, enable Us to update and correct the information contained in Our database and to better customise Your experience on the Website.',
      ],
    },
    {
      title: 'Your Choices',
      text: [
        'In general, if You register on the Website, You may update the information You have provided to Us.',
        'When You register on the Website, You may be able to indicate Your preferences regarding marketing communications. You may be able to change those preferences and select the categories of communications that interest You.',
        'You will not be able to opt-out of receiving certain service-related or transactional communications relating to the Website unless You cancel Your registration or subscription.',
        'Even after Your account is cancelled, We may retain Your information for the purposes set forth in this Privacy Policy.',
      ],
    },
    {
      title: 'Your Right to Access',
      text: ['We provide You with reasonable access to the Personal Data that You may provide through the Website.'],
    },
    {
      title: 'Your Right to Withdraw Consent',
      text: [
        'At any time, You may legitimately object to the processing of Your Personal Data, except if otherwise provided by applicable law. You may decline to share certain Personal Data with Us, in which case We may not be able to provide to You some of the features and functionality of the Website.',
      ],
    },
    {
      title: 'Your Right to Update, Correct or Delete',
      text: [
        'You may update, correct, or delete Your Account Data and preferences at any time by accessing Your Account settings page on the Website. If You wish to access or amend any other Personal Data We hold about You, or to request that We delete any information about You that We have obtained from an Integrated Service, You may contact Us. Please note that while any changes You make will be reflected in active user databases instantly or within a reasonable period of time, We may retain all information You submit for backups, archiving, prevention of fraud and abuse, analytics, satisfaction of legal obligations, or where We otherwise reasonably believe that We have a legitimate reason to do so.',
        'We will however retain Your information needed for administrative and transactional communications.',
      ],
    },
    {
      title: 'California Privacy Rights',
      text: [
        'If You are a California resident, California Civil Code Section 1798.83 permits You to request and obtain from We, information regarding the disclosure of Your Personal Data to the third parties for direct marketing purposes in the preceding calendar year, free of charge, once a year.',
        "We do not share Your Personal Data with third parties for those parties' direct marketing use. For more information about Our privacy and data collection policies, You may wish to review Our Privacy Policy.",
        'California residents, who are under 18 and are registered users of We, are allowed to request and have removed, any content or information that they have posted publicly. However, in cases where the law does not require or allow the removal of information, this may not be applicable. This is under California Business and Professions Code Section 22581.',
        'California Do Not Track Disclosure: We do not track the personally identifying information of Our users and visitors over time and across third party websites to provide targeted advertising. We respond to Do Not Track (DNT) signals. However, some other third-party websites do keep track of Your browsing activities so that they can tailor the information or advertising they present to You. If You wish to opt out of this tracking, You can enable privacy settings in Your browser.',
      ],
    },
    {
      title: 'No Personal Data From Children',
      text: [
        'We do not knowingly collect Personal Data from children under 13 years of age in the USA or 16 years of age in the European Union. The Website is not directed to children under the age of 13 in the USA or 16 in the European Union. We will not knowingly allow children under 13 in the USA or 16 in the European Union to register for or become users of the Website.',
        'If You are under 13 in the USA or 16 in the European Union years of age, You should not provide Personal Data to Us.',
        'If We discover that a child under the age of 13 in the USA or 16 in the European Union has provided Us with Personal Data and We do not have parental consent, We will immediately delete that child’s information.',
      ],
    },
    {
      title: 'Cookie Policy',
      text: [
        'A cookie is a file containing an identifier (a string of letters and numbers) that is sent by a web server to a web browser and is stored by the browser. The identifier is then sent back to the server each time the browser requests a page from the server.',
        'Cookies may be either "persistent" cookies or "session" cookies: a persistent cookie will be stored by a web browser and will remain valid until its set expiry date, unless deleted by the user before the expiry date; a session cookie, on the other hand, will expire at the end of the user session, when the web browser is closed.',
        'Cookies do not typically contain any information that personally identifies a user, but Personal Data that We store about You may be linked to the information stored in and obtained from cookies.',
      ],
      children: [
        {
          title: ' Cookie We Use',
          text: [
            'Session Cookies',
            'These are temporary cookies that contain no expiration date and are deleted after the users browser is closed. You will be required to log in again at the next session, where you will be treated as a new user',
            'Session cookies examples: Shopping cart, remembering previous actions, managing and passing security tokens, multimedia content player session cookies, load balancing session cookies and third party social content plug in sharing cookies',
            'Persistent Cookies',
            'These are cookies which are saved in your browser until they are deleted by the you or are deleted by your browser after they reach their expiration date.',
            'Persistent cookies examples: Authentication, language selection, theme selection, favorites, internal site bookmarks, menu preferences, address and payment information.',
            'Functionality Cookies',
            'Functionality cookies allow us to remember choices that have been made by you in order to create an experience that’s made to fit. These cookies safely store authentication and identification information, for example your language selection or region.',
            'Performance Cookies',
            'Performance cookies allow us to collect information, such as the most used pages or error messages, in order to understand how you use our website and enable us to create a better user experience. All information collected by performance cookies in anonymous.',
          ],
        },
        {
          title: 'Purpose Of Using Cookies',
          text: [
            'Authentication - We use cookies to identify You when You visit Our Website and as You navigate Our Website;',
            'Status - We use cookies to help Us determine if You are logged into Our Website;',
            'Personalization - We use cookies to store information about Your preferences and to personalize the Website for You;',
            'Security - We use cookies as an element of the security measures used to protect user accounts, including preventing fraudulent use of login credentials, and to protect Our Website and Services generally;',
            'Analysis - We use cookies to help Us to analyze the use and performance of Our Website and Services;',
            'Cookie Consent - We use cookies to store Your preferences in relation to the use of cookies more generally.',
          ],
        },
        {
          title: 'Cookies Used by Our Service Providers',
          text: [
            'Our service providers use cookies and those cookies may be stored on Your computer when You visit Our Website.',
            "Google Analytics. We use Google Analytics to analyse the use of Our Website. Google Analytics gathers information about Website use by means of cookies. The information gathered relating to Our Website is used to create reports about the use of Our Website. Google's privacy policy is available at: https://www.google.com/policies/privacy/",
          ],
        },
      ],
    },
    {
      title: 'Links To Or From Another Website',
      text: [
        'The Website may contain links to other sites operated by Our affiliates or third parties. Please be advised that the practices described in this Privacy Policy do not apply to information gathered through these other sites. We are not responsible for the actions and privacy policies of third parties and other sites.',
      ],
    },
    {
      title: 'Public Areas',
      text: [
        'Please remember that any information You share in public areas, such as message boards or feedback sections, becomes public and anyone may take and use that information. Please be careful about what You disclose and do not post any Personal Data that You expect to keep private. Please consult the applicable guidelines, if any, for use of Our chat rooms and other community areas for more information.',
      ],
    },
    {
      title: 'Interest Based Advertising',
      text: [
        'To help ensure that You receive ads that are relevant to Your interests on the Website, Our advertisers’ services, and elsewhere on the Internet, We and third parties (including service providers, advertisers, and advertising companies) may collect information about Your online activities over time and across different sites, apps, and devices. We and third parties may use that information to help understand audience segments. Advertisers may use the segments to determine the audience groups to which they wish to deliver particular ads. Through this process, We do not use information that directly identifies You.',
        'Opt Out. You can opt out of receiving interest-based advertising on Your computer or laptop from some companies, including Us and Our service providers.',
        'If You wish to opt out of receiving interest-based advertising on Your mobile device, please see the advertising preferences information on support.apple.com for iOS devices or support.google.com for Android devices.',
        'Opting out does not mean You will no longer receive advertising. It means that the company or companies from which You opted out will no longer deliver ads tailored to Your web preferences and usage patterns.',
      ],
    },
    {
      title: 'Changes And Updates',
      text: [
        'Please revisit this page periodically to stay aware of any changes to this Privacy Policy, which We may update from time to time. If We modify the Privacy Policy, We will make it available through the Website, and indicate the date of the latest revision. Any material changes will be posted on this Website and will come into effect 30 Days after their posting.',
        'In the event that the modifications materially alter Your rights or obligations hereunder, We will make reasonable efforts to notify You of the change. For example, We may send a message to Your email address, if We have one on file, or generate a pop-up or similar notification when You access the Website for the first time after such material changes are made. If You do not refuse the changes in writing before they become effective, this shall mean that You have consented to the Privacy Policy as changed. Your continued use of the Website after the revised Privacy Policy has become effective indicates that You have read, understood and agreed to the current version of the Privacy Policy.',
      ],
    },
    {
      title: 'Assignment',
      text: [
        'We may change Our ownership or corporate organisation while providing the Website and Services. We may also sell certain assets associated with the Website. As a result, please be aware that in such event, We may transfer some or all of Your information to a company acquiring all or part of Our assets or to another company with which We have merged. Under such circumstances We would, to the extent possible, require the acquiring party to follow the practices described in this Privacy Policy, as it may be amended from time to time. Nevertheless, We cannot promise that an acquiring company or the merged company will have the same privacy practices or treat Your information the same as described in this Privacy Policy.',
      ],
    },
    {
      title: 'Our Details',
      text: [
        'If you have questions or concerns regarding this policy or if you need to make a request please contact us at:',
      ],
      link: 'info@catena.network',
    },
  ];
  return (
    <div className='pT-180'>
      <div className={`container ${styles.wrapper} tYAnimation ${pageReady ? 'animate' : ''}`}>
        <h1 className={`${styles.title}`}>
          <span className='font-90 ttl'>Privacy</span>
          <span className='font-90 ttl'>Policy</span>
        </h1>
        <div className={styles.content}>
          <PrivacyList privacyList={privacyList} />
        </div>
      </div>
    </div>
  );
}
