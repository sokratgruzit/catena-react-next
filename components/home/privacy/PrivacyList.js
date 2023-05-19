export default function PrivacyList({ privacyList }) {
  return (
    <div>
      {privacyList.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
          <a href='mailto:info@coremultichain.com'>{item.link}</a>
          {item.bullets && (
            <ul>
              {item.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          )}
          {item.children &&
            item.children.map((child, index) => (
              <div key={index}>
                <h3>{child.title}</h3>
                <p>{child.text}</p>
                {child.bullets && (
                  <ul>
                    {child.bullets.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
        </div>
      ))}
    </div>
  )
}
