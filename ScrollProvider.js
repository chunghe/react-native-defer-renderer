import React from 'react';
import { ScrollView } from 'react-native';

class ScrollProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentOffset: { x: 0, y: 0 },
      layoutMeasurement: {}
    };
  }

  handleScroll = (e) => {
    const { contentOffset, layoutMeasurement } = e.nativeEvent;
    this.setState({ contentOffset, layoutMeasurement });
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => {
        if (child.props.name === 'ScrollReceiver') {
          return React.cloneElement(child, {
            contentOffset: this.state.contentOffset,
            layoutMeasurement: this.state.layoutMeasurement
          });
        }
        return child;
      }
    );

    return (
      <ScrollView
        scrollEventThrottle={300}
        onScroll={this.handleScroll}
        {...this.props}
      >
        {childrenWithProps}
      </ScrollView>
    );
  }
}

export default ScrollProvider;
