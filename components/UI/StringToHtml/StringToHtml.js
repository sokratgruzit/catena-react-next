import { useEffect, useState } from "react";
import styles from './StringToHtml.module.css'

export const StringToHtml = ({ data }) => {
  const [html, setHtml] = useState("");
  console.log(data,)

  useEffect(() => {
    setHtml(data)
  }, [html])

  return (
    <div className={styles.container}>
      <div className="text custum-text" dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  )
}