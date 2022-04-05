/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

window.customParseInt = function (num) {
  if (!!num) {
    let i = 0;
    for (let k = num.length - 1; k >= 0; k--) {
      console.log('ascii of num =' + num.charCodeAt(k));
      let j = num.charCodeAt(k) - 48; //ascii code of 0 is 48
      j = j * Math.pow(10, num.length - (k + 1));
      i += j;
    }

    return i;
  } else {
    return NaN;
  }
};

const App = () => {
  const num = '123';

  console.log('original');
  console.log(parseInt(num));
  console.log('custom');
  console.log(customParseInt(num));

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Text>Hello World</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    paddingHorizontal: 24,
    backgroundColor: 'orange',
  },
});

export default App;
