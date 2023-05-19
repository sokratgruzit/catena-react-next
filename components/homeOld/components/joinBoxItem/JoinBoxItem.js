import styles from './JoinBoxItem.module.css'

const JoinBoxItem = ({ title, type, subTitle }) => {
  return (
    <div className={styles.wrapper}>
      <h3>
        {title} <span>{type}</span>
      </h3>
      <p>{subTitle}</p>
    </div>
  )
}

export default JoinBoxItem
