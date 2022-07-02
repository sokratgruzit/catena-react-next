const TabFilter = (props) => {
  return (
    <div className={props.css.wrap}>
      <div className={props.css.filter}>
        {props.data.map((tab) => {
          let tabContent = tab.svg === undefined ? tab.label : tab.svg;

          return (
            <div
              key={tab.id + tab.label}
              onClick={() => {
                props.onClick(tab.label);
              }}
              className={
                props.activeMenu == tab.label
                  ? `${props.css.active} ${props.css.item}`
                  : props.css.item
              }
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
