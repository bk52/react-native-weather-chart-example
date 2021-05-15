import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import WeatherChart from 'react-native-weather-chart';
import {c1Data, c2Data, c3Data, c4Data} from './ChartDatas';
import {c1Setting, c2Setting, c3Setting, c4Setting} from './ChartSettings';
const skyImage = require('./assets/sky.jpg');
const seaImage = require('./assets/sea.jpg');

const Main = () => {
  return (
    <>
      <View elevation={5} style={{...styles.viewChart1, ...styles.viewShadow}}>
        <WeatherChart data={c1Data} settings={c1Setting} />
      </View>
      <View elevation={5} style={{...styles.viewChart2, ...styles.viewShadow}}>
        <ImageBackground source={skyImage} style={styles.image}>
          <WeatherChart data={c2Data} settings={c2Setting} />
        </ImageBackground>
      </View>
      <View elevation={5} style={{...styles.viewChart3, ...styles.viewShadow}}>
        <ImageBackground
          source={skyImage}
          style={styles.image}
          imageStyle={{borderRadius: 15}}>
          <WeatherChart data={c3Data} settings={c3Setting} />
        </ImageBackground>
      </View>
      <View elevation={5} style={{...styles.viewChart3, ...styles.viewShadow}}>
        <ImageBackground
          source={seaImage}
          style={styles.image}
          imageStyle={{borderRadius: 15}}>
          <WeatherChart data={c4Data} settings={c4Setting} />
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  viewShadow: {
    shadowOpacity: 0.8,
    shadowRadius: 6,
    shadowOffset: {
      height: 2,
      width: 1,
    },
  },
  viewChart1: {
    backgroundColor: '#212B34',
    margin: 10,
    height: 160,
    borderRadius: 10,
  },
  viewChart2: {
    margin: 10,
    height: 120,
  },
  viewChart3: {
    margin: 10,
    borderRadius: 10,
    height: 140,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default Main;
