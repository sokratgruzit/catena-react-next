import Link from "next/link"
import styles from "./Feature.module.css"
import { Button } from "@catena-network/catena-ui-module"



const Feature = (props) => {
    const { featureLinkList, title, link } = props

    return (
        <div className={`${styles.openPositionsContainer}`}>
            <h2 className="font-51">{title}</h2>
            <div className={`${styles.openPositionsList}`}>
                {featureLinkList.map((item) => {
                    return (
                        <Link key={item.title} href={item.link}>
                            <div className="open-positions__list-item">
                                <span>{item.title}</span>
                                {item.list.map((subitem) => {
                                    return <span key={subitem}>{subitem}</span>
                                })}
                            </div>
                        </Link>
                    )
                })}
            </div>
            <Button
        label={"Button"}
        size={"btn-lg"}
        type={"btn-primary"}
        arrow={"arrow-right"}
        element={"button"}
        disabled={true}
        onClick={() => setToggle((prevState) => !prevState)}
      />
        </div>
    )
}

export default Feature
