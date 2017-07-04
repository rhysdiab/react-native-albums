import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {

    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => <Text>{album.title}</Text>)
  }

  render() {
    console.log(this.state)
  return(
    <View>
      <Text>{this.renderAlbums()}</Text>
    </View>
    );
  }
}

export default AlbumList;
