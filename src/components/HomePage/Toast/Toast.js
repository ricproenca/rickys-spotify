import React, { useState } from "react";
import PropTypes from "prop-types";

import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";

const Toast = ({ open, vertical, horizontal }) => {
  const [toastState, setToastState] = useState({
    open: open,
    vertical: vertical,
    horizontal: horizontal
  });

  // const { vertical, horizontal, open } = toastState;

  const handleClose = (newState) => {
    setToastState({
      ...newState,
      open: false,
      vertical: toastState.vertical,
      horizontal: toastState.horizontal
    });
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: toastState.vertical,
        horizontal: toastState.horizontal
      }}
      autoHideDuration={2000}
      open={toastState.open}
      onClose={handleClose}
      key={toastState.vertical + toastState.horizontal}
    >
      <Alert severity="warning" variant="filled">
        Session expired. Please login again.
      </Alert>
    </Snackbar>
  );
};

Toast.propTypes = {
  open: PropTypes.bool,
  vertical: PropTypes.string,
  horizontal: PropTypes.string
};

Toast.defaultProps = {
  open: true,
  vertical: "top",
  horizontal: "center"
};

export default Toast;
