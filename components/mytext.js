import React from 'react';

import PropTypes from 'prop-types';

import {

  Text,

} from 'react-native';



const MyText = (props) => {

  const { children, hide, style } = props;

  if (hide) {

    return null;

  }

  return (

    <Text {...this.props} style={style}>

      { children }

    </Text>

  );

};



MyText.propTypes = {

  children: PropTypes.oneOfType([

    PropTypes.string,

    PropTypes.element,

    PropTypes.number,

    PropTypes.arrayOf(PropTypes.oneOfType([

      PropTypes.string,

      PropTypes.number,

      PropTypes.element,

    ])),

  ]).isRequired,

  // style: Text.prototype.style,

  hide: PropTypes.bool,

};
export default MyText;