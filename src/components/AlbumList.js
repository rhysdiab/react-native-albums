import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  constructor(props) {
    super();

  }

  componentWillMount() {
    console.log("yerere");
    axios.get('https://rallycoding.herokuapp/api/music_albums')
      .then(response => console.log(response));
  }
  render() {
  return(
    <View>
      <Text>Album List</Text>
    </View>
    );
  }
}

export default AlbumList;