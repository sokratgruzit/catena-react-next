export default function Privacy() {
  const privacyHeader = [
    {
      text: 'We are committed to protecting Your privacy. This Privacy Policy describes how We collect, use, store, share and protect the information collected through https://www.coremultichain.com/ (the “Website”).In this Privacy Policy, "We", "Us", and "Our" refer to CORE. For more information about Us, see “Our Details” at the end of this Policy.',
    },
    {
      text: "This Privacy Policy is incorporated into and subject to Our Terms and Conditions. Capitalized words used but not defined in this Privacy Policy have the meaning given to them in the Terms and Conditions.",
    },
    {
      text: "Please be advised that the practices described in this Privacy Policy apply only to information gathered online through the Website. This Privacy Policy applies where We are acting as a data controller with respect to the Personal Data of visitors, users, clients and customers (“You,” or “Your”); in other words, where We determine the purposes and means of the processing of that Personal Data.",
    },
    {
      span: "PLEASE READ THIS PRIVACY POLICY CAREFULLY",
      text: " because it affects Your rights under the law. You confirm that You have read and agreed to be bound by this Privacy Policy. If You do not agree with this Privacy Policy, You cannot use, access, create or publish in the Website. This Privacy Policy may change as Wecontinuously improve the Website, so please check it periodically.",
    },
    {
      text: "We reserve the right to modify or amend the Privacy Policy from time to time without notice. Your continued use of the Website following the posting of changes to these terms will mean You accept those changes. If We intend to apply the modifications or amendments to this Privacy Policy retroactively or to Personal Data already in Our possession, We will provide You with notice of the modifications or amendments.",
    },
  ];
  return (
    <div>
      <h1>
        <span>Privacy</span>
        <span>Policy</span>
      </h1>
      {privacyHeader.map((item, index) => {
        return (
          <div key={index}>
            <span>{item.span}</span>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
}
