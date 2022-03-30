import React, { useState } from "react";
function Collapse(props) {
  const [isCollapsed, setIsCollapsed] = useState(props.collapsed);

  const style = {
    collapsed: {
      display: "none",
    },
    expanded: {
      display: "block",
    },
    buttonStyle: {
      display: "block",
      width: "100%",
    },
  };

  return (
    <div>
      <button
        style={style.buttonStyle}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? "Show" : "Hide"} content of the box
      </button>
      <div
        className="collapse-content"
        style={isCollapsed ? style.collapsed : style.expanded}
        aria-expanded={isCollapsed}
      >
        {props.children}
      </div>
    </div>
  );
}
export default Collapse;
