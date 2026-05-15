import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function TelaFilme3 (){
    return (
        
                <View style={estilos.container}>
                    
                    <Text style={estilos.titulo}>O ursinho Pooh, sangue e mel</Text>

                    <Image source={"https://br.web.img3.acsta.net/pictures/23/06/23/23/46/3407854.jpg"} style={estilos.imagem} />
                    
        
                    <Text style={estilos.desc}>"Ursinho Pooh: Sangue e Mel" (2023) é um filme de terror slasher que subverte a história infantil, mostrando Pooh e Leitão enlouquecidos e canibais após serem abandonados por Christopher Robin. Quando Robin retorna adulto, os monstros partem para uma caçada sangrenta contra ele e um grupo de jovens no Bosque dos Cem Acres.</Text>
                
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