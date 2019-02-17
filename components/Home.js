import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  message: PropTypes.string.isRequired,
};

const Home = ({ message }) => <h1>{ message}</h1>;

Home.propTypes = propTypes;

export default Home;
