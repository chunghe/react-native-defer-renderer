import React from 'react';
import { Dimensions, View } from 'react-native';

class ScrollReceiver extends React.Component {

  static defaultProps = {
    threshold: 0
  }

  constructor(props) {
    super(props);
    this.distanceToTop = Infinity;
    this.windowHeight = Dimensions.get('window').height;
    this.state = {
      rendered: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const { contentOffset, threshold } = nextProps;
    if (contentOffset.y + threshold > this.distanceToTop - this.windowHeight) {
      this.setState({ rendered: true });
    }
  }

  shouldComponentUpdate() {
    return !this.state.rendered;
  }

  handleLayout = (e) => {
    const distanceToTop = e.nativeEvent.layout.y;
    this.distanceToTop = distanceToTop;
  }

  render() {
    if (this.state.rendered) {
      return this.props.children;
    }
    return <View onLayout={this.handleLayout} />;
  }
}

export default ScrollReceiver;
