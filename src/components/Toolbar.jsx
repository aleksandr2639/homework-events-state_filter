import { v4 as uuidv4 } from "uuid";

function Toolbar(props){
    const { menu, selected, onSelectFilter } = props;
    const renderFilters = (menu) => {
      return menu.map((el) => {
        const className = el === selected ? "button__selected" : "button";
        return (
          <button
            className={className}
            onClick={() => onSelectFilter(el)}
            key={uuidv4()} >
              {el}
          </button>
        );
      });
    };

    return (
      <div className="list__buttons">
        {renderFilters(menu)}
      </div>
    );
  };

export default Toolbar