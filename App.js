/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

//We are supporting radix from 2 to 10
window.customParseInt = function (num, radix = 10) {
  if (!isNaN(num)) {
    if (num.includes('.')) {
      num = num.split('.')[0];
    }

    if (num.split('').some(item => item >= radix)) {
      if (num.split('')[0] >= radix) {
        // managing negative case if your are passing 31010 to parse where radix = 2
        return NaN;
      }

      num.split('').forEach((item, index) => {
        if (item >= radix) {
          num = num.substring(0, index);
          return;
        }
      });
    }

    let i = 0;
    for (let k = num.length - 1; k >= 0; k--) {
      const isNegative = num.charCodeAt(k) == 45;
      //As ascii code for - is 45
      let j = isNegative ? 1 : num.charCodeAt(k) - 48; //ascii code of 0 is 48
      j = j * Math.pow(radix, num.length - (k + 1));
      if (isNegative) {
        i *= -1;
      } else {
        i += j;
      }
    }

    return i;
  } else {
    return NaN;
  }
};

const App = () => {
  const num = '-123.45';
  const rdx = 10;

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Text style={styles.textStyle}>Number : {num}</Text>
      <Text style={styles.textStyle}>Radix : {rdx}</Text>
      <Text style={styles.textStyle}>
        customParseInt(Number) : {customParseInt(num, rdx)}
      </Text>
      <Text style={styles.textStyle}>
        parseInt(Number) : {parseInt(num, rdx)}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    paddingHorizontal: 24,
    padding: 30,
  },
  textStyle: {
    fontSize: 20,
    margin: 20,
  },
});

export default App;
