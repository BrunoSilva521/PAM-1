import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function TelaFilme2 (){
    return (

        <View style={estilos.container}>
            
            <Text style={estilos.titulo}>Bugonia</Text>

            <Image source={"https://poltronanerd.com.br/wp-content/uploads/2025/10/BR-BUG-SPACE-DIGITAL-scaled.jpg"} style={estilos.imagem} />

            <Text style={estilos.desc}>Bugonia é um filme de comédia negra de 2025, Bugonia acompanha dois jovens que sequestram uma poderosa CEO, suspeitando que ela seja secretamente um alienígena que deseja destruir a Terra. Uma coprodução do Reino Unido, Irlanda, Coreia do Sul e Estados Unidos, o filme é estrelado por Emma Stone, Jesse Plemons, Aidan Delbis, Stavros Halkias e Alicia Silverstone.</Text>
        
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

    desc:{
        color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '15px',
    textAlign: 'center',
    marginBottom: '50px',
    },

    imagem: {
        width: 200,
        height: 350,
        borderWidth: 10,
        borderColor: "#af3e3eff",
        marginBottom: 30,
    }
    
});