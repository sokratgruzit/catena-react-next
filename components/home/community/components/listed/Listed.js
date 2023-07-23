import styles from './Listed.module.css'

const RevercedTitle = ({ titles }) => {
  return (
    <div className={styles.main}>
      <div className='container'>
        <div className='container_bordered'>
          <div className="text">
            <ul >
              {titles.map((item, index) => {
                return <li key={index} >{item.title}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevercedTitle;
