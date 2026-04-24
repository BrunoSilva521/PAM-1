import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicial from "./componentes/TelaInicial";
import TelaFilme1 from "./componentes/TelaFilme1";
import TelaFilme2 from "./componentes/TelaFilme2";
import TelaFilme3 from "./componentes/TelaFilme3";

const Stack = createStackNavigation();

export default function App (){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela Inicial" component = { TelaInicial }/>
        <Stack.Screen name="Tela Filme 1" component = { TelaFilme1 }/>
        <Stack.Screen name="Tela Filme 2" component = { TelaFilme2 }/>
        <Stack.Screen name="Tela Filme 3" component = { TelaFilme3 }/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}