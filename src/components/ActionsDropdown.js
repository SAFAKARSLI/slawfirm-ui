import ActionItem from "./ActionItem"
import React from "react";

import { Badge } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
  id="actions-button"
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </div>
));


const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
          {children}
      </div>
    );
  },
);


function ActionsDropdown() {


  return (
    <Badge bg="success">
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          Generate
        </Dropdown.Toggle>
        <Dropdown.Menu as={CustomMenu}>
          <ActionItem title="Retainer Agreement"/>
          <ActionItem title="Written Plea"/>
        </Dropdown.Menu>
      </Dropdown>
    </Badge>
  );
}


export default ActionsDropdown;