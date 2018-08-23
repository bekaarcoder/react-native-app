import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios';

class AlbumList extends Component {
  state = {
    albums: []
  };
  componentDidMount() {
    axios.get('https://agile-sea-21994.herokuapp.com/albums')
      .then(res => {
        this.setState({
          albums: res.data
        });
      });
  }

  render() {
    console.log(this.state);
    return (
      <View>
        <Text>ALbum List</Text>
      </View>
    )
  }
}

export default AlbumList;