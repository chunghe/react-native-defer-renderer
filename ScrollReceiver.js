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
      shouldRender: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const { contentOffset, threshold } = nextProps;
    this.check(nextProps);
  }

  shouldComponentUpdate() {
    return !this.state.shouldRender;
  }

  handleLayout = (e) => {
    const distanceToTop = e.nativeEvent.layout.y;
    this.distanceToTop = distanceToTop;

    // check for the initial load
    this.check(this.props);
  }

  check(props) {
    const { contentOffset, threshold } = props;
    if (contentOffset.y + threshold > this.distanceToTop - this.windowHeight) {
      this.setState({ shouldRender: true });
    }
  }

  render() {
    if (this.state.shouldRender) {
      return this.props.children;
    }
    return <View ref="view" onLayout={this.handleLayout} />;
  }
}

export default ScrollReceiver;
