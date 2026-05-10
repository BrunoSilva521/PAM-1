import React from 'react';
import { Text } from 'react-native';

export default function TelaFilme1 (props){
    return (
        <View style={estilos.container}>

              <Text style={estilos.titulo}></Text>
            {/* <image source={logo} style={estilos.imagem}></image> */}

            <Text style={estilos.titulo}>
                O Agente Secreto.
                  </Text>
        

        <StatusBar style="auto" />
         </View>
    );
}

const estilos = StyleSheet.create({

titulo: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '25px',
    textAlign: 'center',
    marginBottom: '50px',
}

});

