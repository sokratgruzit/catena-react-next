import styles from './Listed.module.css';

const Listed = ({ titles }) => {
  return (
      <div className={`container_bordered`}>
          <div className={`container_bordered-child text ${styles.main}`} data-aos="fade-up">
              <ul>
                  {titles.map((item, index) => {
                      return <li key={index}>{item.title}</li>;
                  })}
              </ul>
          </div >
      </div>
  );
};

export default Listed;
