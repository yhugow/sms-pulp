import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { placeholder, placeholderTextColor, value, multiline, style, onChangeText } = this.props;
    return (
      <View>
        <TextInput 
          multiline={multiline}
          placeholderTextColor={placeholderTextColor || 'red'}
          placeholder={placeholder}
          value={value}
          style={style}
          onChangeText={onChangeText}/>
      </View>
    );
  }
}
