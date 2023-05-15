import styles from "./CurrentOpenings.module.css"

const CurrentOpenings = (props) => {
    const { currentOpeningsList, title } = props;

    return (
        <div className="container career-qualities">
            <div className="font-51">{title}</div>
            {currentOpeningsList.map((item) => {
                return (
                    <div className="career-qualities__opening" key={item.title}>
                        <div className="career-qualities__opening-ttl">{item.title}</div>
                        {item.list && item.list.map((subitem) => {
                            return (
                                <div className="career-qualities__opening-txt" key={subitem}>{subitem}</div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default CurrentOpenings;

