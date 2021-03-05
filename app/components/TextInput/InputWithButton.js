import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {View, Text, TouchableHighlight, TextInput} from 'react-native';

const INPUT_HEIGHT=`48px`;
const BORDER_RADIUS= `4px`;
export default function InputWithButton( {onPress, buttonText, editable=true}) {
    return (
  <StyledView>
      <StyledText/>
      <Border/>
      <Button onPress={onPress}>
          <Text>{buttonText}</Text>
      </Button>
  </StyledView>
    )
}
InputWithButton.protoTypes = {
    onPress:PropTypes.func,
    buttonText:PropTypes.string,
    editable:PropTypes.bool,
}

const StyledView = styled.View `
background-color:white;
width:90%;
height:${INPUT_HEIGHT};
border-radius:${BORDER_RADIUS};
flex-direction:row;
align-items:center;
margin-vertical:11px;
`
const Button = styled.TouchableHighlight `
height:${INPUT_HEIGHT};
align-items:center;
justify-content:center;
background-color:white;
border-top-left-radius:${INPUT_HEIGHT};
border-top-right-radius:${INPUT_HEIGHT};
border-bottom-left-radius:${INPUT_HEIGHT};
border-top-right-radius:${INPUT_HEIGHT};
` 
const Border = styled.View `

`
const StyledText = styled.TextInput `

`
