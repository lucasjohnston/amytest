/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import {SvgUri} from 'react-native-svg';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <SafeAreaView>
      <View style={styles.sectionContainer}>
        <SvgUri
          width="100%"
          height="100%"
          uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: Colors.white,
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
