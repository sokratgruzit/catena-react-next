// import styles from "./bugBounty.module.css";

let data = [
  {
    text: [
      "Content spoofing",
      "Cache-control related issues",
      "Exposure of internal IP address or domains",
      "Bugs already known or already reported by someone else (reward goes to first reporter)",
      "Issues that are not reproducible",
      "Email/SMS bomb",
    ],
  },
  {
    title: "Ineligible Submission Examples",
    text: [
      "Theoretical vulnerabilities without POC",
      "Any Dos/DDoS activities",
      "Invalid or missing SPF records (incomplete or missing SPF/DKIM/DMARC)",
      "Clickjacking/UI with minimal security impact",
      "Phishing",
      "Tab-nabbing",
    ],
  },
  {
    title: "Actions to avoid",
    text: [
      "Testing on other users accounts",
      "Automated testing using tools such as scanners",
      "Excessive request attempts that affects the availability of our services to all users",
      "Destruction of data",
      "Disrupt of services",
    ],
  },
];

function BugBountyList({ data }) {
  return (
    <>
      {data?.map((item, i) => {
        return (
          <div key={i}>
            <div className="ineligibility_head">
              <h3 className="font-30">{item.title}</h3>
            </div>
            <div className="ineligibility__list-first">
              <ul className="ineligibility_list mb-100">
                {item.text?.map((item, i) => {
                  return (
                    <li key={i} className="ineligibility__list-item">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default BugBountyList;
