import React, { Component } from "react";
import ErrorIndicator from "../error-indicator";

export default class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return <ErrorIndicator />;
    }
    return children;
  }
}
