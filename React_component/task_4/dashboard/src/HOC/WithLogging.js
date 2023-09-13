import React from 'react';

function WithLogging(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default WithLogging;
