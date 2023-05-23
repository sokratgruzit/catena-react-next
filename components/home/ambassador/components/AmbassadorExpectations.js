

const AmbassadorExpectations = (props) => {
    const { ambassadorApplication, title, description, name, proposals } = props

  return (
    <div>
        <h3 className='font-51'>{title}</h3>
        <div className="community__horizontal-ttl font-51">{name}</div>
        <p className="community__horizontal-sub-ttl">{description}</p>
      <ul>
        {ambassadorApplication.map((item, index) => {
            return (
                <li key={index} >{item.title}</li>
            )
        })}
      </ul>
      <div className="proposals_text">{proposals}</div>
    </div>
  )
}

export default AmbassadorExpectations
