const TabFilter = props => {
  return (
    <div className={props.css.wrap}>
      <div className={props.css.filter}>
        {props.data.map(tab => {
          let tabContent = tab.svg ? <>{tab.svg}</> : tab.label;

          return (
            <div
              key={tab.id}
              onClick={() => {
                props.onClick(tab.label);
              }}
              className={props.activeMenu == tab.label ? `${props.css.active} ${props.css.item}` : props.css.item}
            >
              {tabContent}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabFilter;
