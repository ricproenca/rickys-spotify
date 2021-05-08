import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

export const DecisionRoute = ({
  trueComponent,
  falseComponent,
  decisionFunc,
  ...rest
}) => {
  falseComponent = <Redirect to="/" />;
  return (
    <Route {...rest} render={decisionFunc() ? trueComponent : falseComponent} />
  );
};

DecisionRoute.propTypes = {
  trueComponent: PropTypes.func,
  falseComponent: PropTypes.func,
  decisionFunc: PropTypes.func
};

DecisionRoute.defaultProps = {
  trueComponent: () => {},
  falseComponent: () => {},
  decisionFunc: () => {}
};

export default DecisionRoute;
