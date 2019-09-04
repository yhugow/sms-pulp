/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

import React from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';
import Colors from './Colors';

const Header = () => (
  <ImageBackground
    accessibilityRole={'image'}
    source={require('../assets/images/logo.png')}
    style={styles.background}
    imageStyle={styles.logo}>
    <Text style={styles.text}>Welcome to SMS Pulp</Text>
    <Text style={styles.subText}>Enjoy life while using this free sms messaging app. Try it now!</Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.white,
  },
  subText : {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.white,
    marginTop: 10
  }
});

export default Header;
