import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (auth ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location }
            }}
          />
        ))
      }
    />
  )
};


PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  auth: true,
});

export default withRouter(connect(mapStateToProps)(PrivateRoute));
