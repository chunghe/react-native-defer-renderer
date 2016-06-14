/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {ScrollProvider, ScrollReceiver} from 'react-native-defer-renderer';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    const url = 'https://cdn.rawgit.com/chunghe/0dc3f32aca1cb083f7d08a79476d4495/raw/4835ea999cfce94883d2bcbbbad6f80857514465/comment.js';
    console.log('fetching comment content');
    fetch(url)
      .then(rsp => rsp.json())
      .then(json => {
        this.setState({comments: json.comments});
      });
  }

  componentDidUpdate() {
    console.log('comment rendered.');
  }

  render() {
    const { comments } = this.state;
    return (
      <View style={styles.comments}>
        <View>
          <Text style={{fontWeight: '600', fontSize: 26, marginBottom: 20}}>Comments</Text>
        </View>
        {
          comments.map( (comment, i) =>
            <Text key={i} style={styles.comment}>{comment}</Text>
          )
        }
      </View>
    )
  }
}


class Article extends Component {
  render() {
    return (
      <View style={styles.article}>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut hendrerit dolor, ut posuere diam. Donec orci enim, venenatis ac dui at, volutpat ullamcorper justo. Nulla orci leo, tincidunt in laoreet ac, lobortis non mi. Donec arcu turpis, hendrerit at lorem sit amet, bibendum consectetur sapien. Sed feugiat nec libero quis vehicula. Sed vehicula felis maximus neque facilisis volutpat. Nunc velit lectus, tristique faucibus volutpat eget, molestie quis metus.</Text>
        <Text style={styles.text}>Donec sollicitudin porta facilisis. Donec imperdiet, justo quis feugiat congue, sem urna placerat enim, faucibus tempor metus neque ac lorem. Ut lobortis ex ut lobortis tincidunt. Vivamus nec ipsum suscipit, iaculis arcu vitae, imperdiet orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis, magna non pretium ultricies, augue lectus pharetra elit, ac auctor libero felis ac metus. Quisque tincidunt nibh quis placerat molestie. Etiam pulvinar et metus rutrum blandit. Duis posuere malesuada quam. Duis id dolor risus.</Text>
        <Text style={styles.text}>Aenean feugiat semper vestibulum. Aenean congue tortor eu aliquam lobortis. Praesent sed odio ac ante commodo condimentum. Maecenas volutpat quam eget tortor pulvinar tincidunt. Aenean nisi turpis, viverra et est eget, posuere vestibulum lacus. Aliquam elementum ut risus ac iaculis. Donec mollis tortor purus, et vehicula purus consectetur vitae. Mauris pellentesque leo lectus, at gravida nulla mattis viverra. Nam lobortis tincidunt massa. Fusce molestie vel massa nec lacinia. Vivamus mollis elementum volutpat. Proin sed aliquam tortor. Quisque sem nisl, tincidunt id porta sit amet, sodales sed lacus.</Text>
        <Text style={styles.text}>Nunc non fermentum orci. Proin eget suscipit urna. Vivamus tincidunt nulla in velit mollis efficitur. Suspendisse aliquam massa vel iaculis facilisis. Nunc aliquet diam id augue cursus egestas. Sed nisi libero, consequat id ullamcorper quis, condimentum eu tellus. Nam non fermentum ipsum, id gravida enim. Quisque scelerisque felis sit amet mattis tristique. Fusce gravida semper quam in laoreet. Nam leo massa, eleifend eget vulputate eu, bibendum nec ligula. Aliquam iaculis egestas justo, ac varius dui suscipit ac. Sed vel elit sit amet sapien vestibulum tristique a id urna. Maecenas congue nibh et dignissim posuere. Etiam venenatis ligula ut convallis tempor. Praesent dapibus nibh neque, non condimentum ipsum venenatis non.</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut hendrerit dolor, ut posuere diam. Donec orci enim, venenatis ac dui at, volutpat ullamcorper justo. Nulla orci leo, tincidunt in laoreet ac, lobortis non mi. Donec arcu turpis, hendrerit at lorem sit amet, bibendum consectetur sapien. Sed feugiat nec libero quis vehicula. Sed vehicula felis maximus neque facilisis volutpat. Nunc velit lectus, tristique faucibus volutpat eget, molestie quis metus.</Text>
      </View>
    )
  }
}

class example extends Component {
  render() {
    return (
      <ScrollProvider
        style={{flex: 1, backgroundColor: '#fff'}}
      >
        <View style={styles.container}>
          <Article />
        </View>
        <ScrollReceiver name="ScrollReceiver" threshold={100}>
          <Comment />
        </ScrollReceiver>
      </ScrollProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  comments: {
    padding: 20,
    backgroundColor: '#efefef'
  },
  comment: {
    padding: 10
  },
  article: {
    padding: 20
  },
  text: {
    fontSize: 18,
    color: '#333',
    marginBottom: 25
  }
});

export default example;

