import React from 'react';
import { TextInput } from 'react-native';
import { textInput, colors } from '../styles'

export default props => <TextInput placeholderTextColor={colors.snow} style={textInput} {...props} />;
