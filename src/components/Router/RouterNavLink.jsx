import React, { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const RouterNavLink = forwardRef((props, ref) => {
  const { to, ...navLinkProps } = props;

  return <NavLink ref={ref} to={to} {...navLinkProps} />;
});

// See all react-router-dom NavLink props:
// https://github.com/ReactTraining/react-router/blob/dev/docs/api-reference.md#navlink
RouterNavLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default RouterNavLink;
