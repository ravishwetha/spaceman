import React from 'react';
import PropTypes from 'prop-types';

import TreeMenu from 'react-simple-tree-menu'

function Menu(props) {
  return (
    <TreeMenu data={props.data} onClickItem={props.onClickItem} />
  );
}

Menu.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Menu;
