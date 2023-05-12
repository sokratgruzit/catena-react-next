export default function PrivacyList({ privacyList }) {
  return (
    <div>
      {privacyList.map((item) => (
        <div key={item.title}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
          {item.children &&
            item.children.map((child) => (
              <div key={child.title}>
                <h3>{child.title}</h3>
                <p>{child.text}</p>
                {child.bullets && (
                  <ul>
                    {child.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
