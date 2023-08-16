import { useEffect, useState } from "react";

export const StringToHtml = ({ data }) =>{
  const [html, setHtml] = useState("")

  useEffect(() => {
    setHtml(data)
  }, [html])

  return(
      <div dangerouslySetInnerHTML={{__html: html}}></div>
  )
}