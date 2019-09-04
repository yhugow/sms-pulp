/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
  Input
} from './src/components/';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Mobile Number:</Text>
              <Input 
                placeholder={'Enter Mobile Number'} 
                placeholderTextColor={'#333333'}
                style={{
                  backgroundColor: Colors.lighter,
                  fontSize: 14,
                  marginTop: 10,
                  paddingVertical: 15,
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  color: Colors.dark
                }}
                value={'09278977591'}
                onChangeText={ text => {  this.setState({ mobileNumber: text })  }}              
                />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Message:</Text>
              <Input 
                placeholder={'Enter you message here.'} 
                multiline={true}
                placeholderTextColor={'#333333'}
                value={'San kana? Umuwi kana baby.'}
                style={{
                  height: 150,
                  backgroundColor: Colors.lighter,
                  padding: 8,
                  fontSize: 14,
                  marginTop: 10,
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  color: Colors.dark
                }}/>
            </View>
            <View style={styles.sectionContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text style={[styles.sectionTitle,{color:Colors.white,fontSize: 14}]}>SEND MESSAGE</Text>
                </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  button: {
    backgroundColor: Colors.black,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  }
});

export default App;
