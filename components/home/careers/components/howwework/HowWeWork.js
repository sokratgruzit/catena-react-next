import styles from "./HowWeWork.module.css"

const HowWeWork = (props) => { 
    const { workflow, title } = props

  return (
    <div className={`${styles.careerHow} ${styles.mt100}`}>
        <h2 className="font-51">{title}</h2>
      {workflow.map((item) => {
        return (
            <p key={item.title}>{item.title}</p>
        )
      })}
    </div>
  )
}

export default HowWeWork
