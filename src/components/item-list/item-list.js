/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import "./item-list.css";
import PropTypes from "prop-types";

function ItemList(props) {
  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li className="list-group-item" key={id}>
        <div role="button" tabIndex={0} onClick={() => onItemSelected(id)}>
          {label}
        </div>
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
}

ItemList.defaultProps = {
  onItemSelected: () => {},
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired,
};

export default ItemList;
