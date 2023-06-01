// import styles from "./supportItem.module.css";

const SUPPORT_ITEMS = [
  {
    title: "Announcements",
    description: "CATENA latest official announcements and notices.",
  },
  {
    title: "CMCX Token",
    description: "The Bridge Between Crypto and Global Finance.",
  },
  {
    title: "Academy",
    description: "Get a deeper understanding of the crypto industry and market.",
  },
  {
    title: "FAQ",
    description: "Any issues? Find answers to commonly asked questions.",
  },
  {
    title: "Submit a request",
    description: "Can't find the solution to your problem? Submit a request to support team.",
  },
];

const SupportItem = () => {
  return (
    <div className="container">
      <div className="support__items">
        {SUPPORT_ITEMS.map((item, index) => (
          <div key={index} className="support_item">
            <img src="" alt="megaphone" />
            <a href="https://catenamultichain.medium.com/" target="_blank" rel="noreferrer">
              {item.title}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M14 2V8.87H12.0005V5.42L3.4205 14L2 12.5795L10.58 3.9995H7.1495V2H14Z" fill="white" />
                </g>
              </svg>
            </a>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportItem;
