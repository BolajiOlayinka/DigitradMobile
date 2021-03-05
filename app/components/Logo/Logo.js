import React from 'react'
import styled from 'styled-components';
import {View,Image,Text} from 'react-native';



export default function Logo() {
    return (
        <StyledView>
            <StyledImage source={require('./DT.png')} />
            <StyledText>Our Payment Converter</StyledText>
        </StyledView>
    )
}

const StyledView = styled(View)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding-bottom:20px;
`
const StyledText = styled.Text `
color:white;
font-size:16px;
text-align:center;
`
const StyledImage = styled.Image `
margin-bottom:10px;
`