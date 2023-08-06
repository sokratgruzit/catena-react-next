import styles from './Benefits.module.css';

const Benefits = props => {
  const { benefitsArr, title } = props;

  return (
    <div className='container'>
      <div style={{color: '#162029', padding: '100px 0 30px 0'}} className='font-40 ttl'>{title}</div>
      <div className='text'>
        <ul>
          {benefitsArr.map((item, index) => {
            return <li style={{color: '#162029'}} className='font-20' key={index}>{item.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Benefits;
