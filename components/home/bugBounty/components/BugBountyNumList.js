let listData = [
  {
    title: "Examples of Eligible Vulnerabilities:",
    listItem: [
      "Serious production environment vulnerabilities",
      "Vulnerabilities that can cause remote loss of user funds/assets",
      "Privilege escalation",
      "Code/SQL Injection",
      "Cross-Site Request Forgery (CSRF)",
      "Cross-Site Scripting (XSS)",
      "Remote Code Execution",
      "Authentication Bypass",
    ],
  },
];

function BugBountyNumList() {
  return (
    <div>
      {listData?.map((item, i) => {
        return (
          <div key={i}>
            <h3 className="eligibility-subtitle">{item.title}</h3>
            <ol className="eligibility_list">
              {item.listItem?.map((item, i) => {
                return (
                  <li key={i} className="eligibility__list-item">
                    {item}
                  </li>
                );
              })}
            </ol>
          </div>
        );
      })}
    </div>
  );
}

export default BugBountyNumList;
