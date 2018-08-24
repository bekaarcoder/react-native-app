import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

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
    const {albums} = this.state;
    let list;
    if(albums && albums.length !== 0) {
      list = albums.map((album, index) => (
        <AlbumDetail key={index} albumDetail={album} />
      ));
    } else {
      list = <Text>Loading...</Text>
    }
    return (
      <ScrollView>
        {list}
      </ScrollView>
    )
  }
}

export default AlbumList;