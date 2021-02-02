import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IllustrationMyApp from '../../assets/image/opinion.svg';

const ReactNativeSvg = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi React Native Svg</Text>
      <IllustrationMyApp width={244} height={125} />
    </View>
  );
};

export default ReactNativeSvg;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
