import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';

function Page({
  children,
  location: {
    state,
  },
}) {
  const cx = classNames({
    page: true,
    'page--prev': state && state.prev,
  });
  return (
    <div
      className={cx}
    >
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default withRouter(Page);
