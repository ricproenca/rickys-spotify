import React from "react";
import PropTypes from "prop-types";

import useStyles from "./SidebarOption.styles";

function SidebarOption({ title, Icon }) {
  const classes = useStyles();

  return (
    <div className={classes.sidebarOption}>
      {Icon && <Icon className={classes.sidebarOption__icon} />}
      {Icon ? (
        <h4 className={classes.sidebarOption__h4}>{title}</h4>
      ) : (
        <p className={classes.sidebarOption__p}>{title}</p>
      )}
    </div>
  );
}

SidebarOption.propTypes = {
  title: PropTypes.string,
  Icon: PropTypes.elementType
};

SidebarOption.defaultProps = {
  title: "",
  Icon: null
};

export default SidebarOption;
