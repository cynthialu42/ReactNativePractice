// import library to create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//create a component
const App = () => (
    <Text>Some Text</Text>
);

// Render it to the device

AppRegistry.registerComponent('albums', () => App);
