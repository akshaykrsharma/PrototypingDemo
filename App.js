/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

window.customParseInt = function (num, reg = 10) {
  if (!isNaN(num)) {
    if (num.includes('.')) {
      num = num.split('.')[0];
    }
    let i = 0;
    for (let k = num.length - 1; k >= 0; k--) {
      const isNegative = num.charCodeAt(k) == 45;
      //As ascii code for - is 45
      let j = isNegative ? 1 : num.charCodeAt(k) - 48; //ascii code of 0 is 48
      j = j * Math.pow(reg, num.length - (k + 1));
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
  const num = '-1';

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
