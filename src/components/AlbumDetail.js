import React from 'react'
import { View, Text, Image } from 'react-native'
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  const {title, artist, url, image, artist_img} = props.albumDetail;
  return (
    <Card>
      <CardSection>
        <View>
          <Image source={{uri: artist_img}} style={styles.thumbnail} />
        </View>
        <View style={styles.titleHeader}>
          <Text style={styles.title}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  )
}

const styles = {
  titleHeader: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 10
  },
  title: {
    color: '#000000'
  },
  thumbnail: {
    height: 50,
    width: 50,
    borderRadius: 30
  }
}

export default AlbumDetail;
