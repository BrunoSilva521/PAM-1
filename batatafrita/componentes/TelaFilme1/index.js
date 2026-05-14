import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function TelaFilme2 (){

    const cor = "#af3e3eff";

    return (
        
       <View style={estilos.container}>
            <Text style={estilos.titulo}></Text>
             
            <Text style={estilos.titulo}>
                O agente secreto.
            </Text>
       </View>

    );
}

const estilos = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#252121ff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    borderWidth: '20px',
    borderColor: '#af3e3eff',
    },

    titulo: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '25px',
    textAlign: 'center',
    marginBottom: '50px',
    },
    
});