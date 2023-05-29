function BugBountyItem({ data }) {
  return (
    <div>
      {data?.map((item, i) => {
        return (
          <div key={i} className='eligibility__container'>
            <div className='eligibility_head mb-100'>
              <h2 className='font-51'>{item.title}</h2>
              <div className='eligibility_description'>{item.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BugBountyItem;
