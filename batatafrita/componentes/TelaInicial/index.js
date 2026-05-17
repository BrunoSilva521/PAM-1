import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { HoverEffect } from 'react-native-gesture-handler';
// import { blue } from 'react-native-reanimated/lib/typescript/Colors';
// import { addWhitelistedNativeProps } from 'react-native-reanimated/lib/typescript/ConfigHelper';
// import logo from "../.../assets/logo/a.avif";


export default function TelaInicial (props){
  
  const cor = "#af3e3eff";
 
  
  return (

    
    <View style={estilos.container}>
      <Text style={estilos.titulo}></Text>
      <image source={"https://images.seeklogo.com/logo-png/37/1/cinema-logo-png_seeklogo-370335.png"} style={estilos.imagem}></image>

      <Text style={estilos.titulo}>
        Veja agora os top 3 melhoeres filmes do momento!!!!
      </Text>

      <Text style={estilos.textos}>
         Clique nos botões↴
      </Text>

       {/* <button style={estilos.B} onPress = { () => props.navigation.navigate("Tela Filme 1") } >
        Ver filme 1
      </button>
      <button style={estilos.B} onPress = { () => props.navigation.navigate("Tela Filme 2") } >
        Ver filme 2
      </button>
      <button style={estilos.B} onPress = { () => props.navigation.navigate("Tela Filme 3") } >
        Ver filme 3
      </button>  */}

     <TouchableOpacity 
        style={estilos.B} 
        activeOpacity={0.7}
        onPress={() => props.navigation.navigate("Tela Filme 1")}
      >
        <Text style={estilos.TextoB}>Ver 1º Filme</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={estilos.B} 
        activeOpacity={0.7}
        onPress={() => props.navigation.navigate("Tela Filme 2")}
      >
        <Text style={estilos.TextoB}>Ver 2º Filme</Text>
      </TouchableOpacity>
      <Button title="Ver o 3º Filme" onPress = { () => props.navigation.navigate("Tela Filme 3") }  color={cor} />
  

      <StatusBar style="auto" />
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
  textos: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '20px',
    textAlign: 'center',
    marginBottom: '30px',
  },

  B:{
    backgroundColor: "#af3e3eff", 
    width: "35%",
    height: "5%",
    borderWidth: "2px",
    borderColor: "#fff",
    borderRadius: "30px",
    alignContent: "center",
    marginBottom: '15px',
  },

  TextoB: {
    color: "#fff",
    fontSize: '20px',
    fontWeight: "600",
    textAlign: 'center',
    margin: 'auto',

  },

  imagem: {
    width: "10%",
    height: "10%",
  }

  
});


