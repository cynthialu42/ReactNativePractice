import React, { Component } from 'react';
import { ScrollView } from 'react-native';
// import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = {
        albums: []
    };
    componentDidMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => res.json())
            .then(resData => this.setState({ albums: resData }));
    }

    renderAlbums() {
        return this.state.albums.map(album => {
            return <AlbumDetail key={album.title} album={album} />;
        });
    }
    render() {
        console.log('state is', this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }  
}

export default AlbumList;
