import React, { Component } from 'react';
import { AppRegistry, ActivityIndicator, FlatList, Image, Text, View, StatusBar } from 'react-native';
import styles from './css'

let uriJsonDemo = 'https://raw.githubusercontent.com/opera443399/rn-demo/master/data.json';
let uriImageDemoPrefix = 'https://raw.githubusercontent.com/opera443399/rn-demo/master/images/';

export default class FetchExample extends Component {
  constructor(props) {
    console.log('@constructor');
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    console.log('@componentDidMount');
    this.apiGetData();
  }

  render() {
    console.log('@render');
    if (this.state.isLoading) {
      console.log('isLoading => true');
      return (
        <View style={styles.isLoading}>
          <ActivityIndicator />
        </View>
      )
    }
    console.log('isLoading => false');
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.title}>{this.state.dataTitle}</Text>
        </View>
        <View style={styles.msg}>
          <Text style={styles.subtitle}>{this.state.dataDesc}</Text>
        </View>
        <View style={styles.content}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Image style={styles.icon} source={{uri: uriImageDemoPrefix + item.icon}}></Image>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.year}>{item.releaseYear}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }

  async apiGetData() {
    console.log('@apiGetData');
    try {
      let response = await fetch(uriJsonDemo);
      let responseJson = await response.json();
      console.log('responseJson = ' + JSON.stringify(responseJson));
      this.setState({
        isLoading: false,
        dataTitle: responseJson.title,
        dataDesc: responseJson.description,
        dataSource: responseJson.data,
      });
    } catch (error) {
      console.error(error);
    }
  }
}


// skip this line if using Create React Native App
AppRegistry.registerComponent('demo1', () => FetchExample);
