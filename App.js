import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/Header';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Header></Header>
    );
  }
}
