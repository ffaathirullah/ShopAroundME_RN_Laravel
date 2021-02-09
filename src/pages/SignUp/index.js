import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import {Button, Gap, Header, TextInput} from '../../components';
import {Icon_back} from '../../assets';

const SignUp = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.page}>
        <Header
          title="Sign Up"
          subTitle="Register and Buy Items"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <TextInput
            label="Full Name"
            placeholder="Type your full name"
          />
          <Gap height={16} />
          <TextInput
            label="Email Address"
            placeholder="Type your email address"
          />
          <Gap height={16} />
          <TextInput
            label="Password"
            placeholder="Type your password"
          />
          <Gap height={24} />
          <Button text="Continue" />
        </View>
      </View>
    </ScrollView>
  );
};


export default SignUp;

const styles = StyleSheet.create({
  scroll: {flexGrow: 1},
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  }
});
