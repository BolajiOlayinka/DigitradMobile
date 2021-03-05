import React from "react";
import { View, StatusBar } from "react-native";
import LogoComponent from '../components/Logo/Logo';
import styled from "styled-components";
import InputWithButton from '../components/TextInput/InputWithButton';

const TEMP_BASE_CURRENCY ='USD';
const TEMP_QUOTE_CURRENCY = 'NGN';
const TEMP_BASE_PRICE = "100";
const TEMP_QUOTE_PRICE = "47850";

export default function Home() {
    const handlePressBaseCurrency = ()=> {
        console.log('Press Base')
    }
    const handlePressQuoteCurrency = ()=> {
        console.log('Press Quote')
    }
  return (
    <Content>
      <StatusBar translucent={false} barStyle="light-content" />
      <LogoComponent/>
      <InputWithButton 
      buttonText={TEMP_BASE_CURRENCY}
      onPress={handlePressBaseCurrency}/>
      <InputWithButton 

      buttonText={TEMP_QUOTE_CURRENCY}
      onPress={handlePressQuoteCurrency}
      editable={false}/>
      <View />
    </Content>
  );
}

const Content = styled.View`
  background-color: #30318c; 
  justify-content: center;
  align-items: center;
  flex: 1;
`;
