import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconBack} from '../../../assets';

const Header = (props) => {
  return (
    <View style={styles.container}>
    <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subTitle}>{props.subtitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 23,
    paddingTop: 29,
    paddingBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {fontSize: 23, color: '#020202'},
  subTitle: {fontSize: 12, color: '#8D92A3'},
  back: {
    padding: 15,
    marginRight: 15,
    marginLeft: -11,
  },
});
