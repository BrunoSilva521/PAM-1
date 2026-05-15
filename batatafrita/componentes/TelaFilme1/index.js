import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function TelaFilme2 (){

    const cor = "#af3e3eff";

    return (
        
       <View style={estilos.container}>
            <Text style={estilos.titulo}></Text>
             
            <Text style={estilos.titulo}>
                O agente secreto
            </Text>

            <Image source={"https://conteudo.imguol.com.br/c/entretenimento/50/2025/04/10/o-agente-secreto-filme-de-kleber-mendonca-filho-estrelado-por-wagner-moura-1744281707161_v2_3x4.jpg"} style={estilos.imagem} />

            <Text style={estilos.desc}>
                O agente secreto é um filme que ganhou o globo de ouro em 2025 WOWWW, e foi interpretado pelo grande ator Wagner Moura.
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