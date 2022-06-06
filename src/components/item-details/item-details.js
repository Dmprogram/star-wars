import React, { Component } from "react";

import "./item-details.css";

function Record({ item, field, label }) {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
}

export { Record };

export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    const { itemId, getData, getImageUrl } = this.props;
    if (
      itemId !== prevProps.itemId ||
      getData !== prevProps.getData ||
      getImageUrl !== prevProps.getImageUrl
    ) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId).then((item) => {
      this.setState({
        item,
        image: getImageUrl(item),
      });
    });
  }

  render() {
    const { item, image } = this.state;
    if (!item) {
      return (
        <span>
          <h4 className="selection">Select an item from a list</h4>
        </span>
      );
    }

    const { name } = item;
    const { children } = this.props;

    return (
      <div className="item-details card">
        <img className="item-image" src={image} alt="item" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(children, (child) =>
              React.cloneElement(child, { item })
            )}
          </ul>
        </div>
      </div>
    );
  }
}
