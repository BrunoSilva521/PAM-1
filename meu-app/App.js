import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { View, Text, Button, StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  boxTitulo: {
    height: "10%",
    width:"200%", 
    backgroundColor: '#a1e5db',
    paddingVertical: "10%",
    justifyContent: 'center',
  },

  tituloCabecalho: {
    color: '#102a43',
    fontWeight: '700',
    fontSize: "90%",
    textAlign: "center",
  },

  subtitulo: {
    color: '#102a43',
     textAlign: "center",
     fontSize:"80%",

  },

  tela: {
    width: '100%',
    flex: 1,
    // justifyContent: "flex-start",
    alignItems: 'center',
    marginHorizontal: "auto",
    
  },

  rodada:{
  backgroundColor: '#c1ebe4',
  borderRadius: "10%",
  height: "3%",
  width:"50%",
  marginTop:"10%",
  marginBottom:"10%",
  },

  numerosorte:{
    color: "#797979",
    fontStyle: "italic",
  },

  txt:{
    color: "#102a43",
    fontWeight: "900",
  },

  box:{
   borderColor: "#c4e0dc", 
   height: 50,
   borderWidth:2,
   borderRadius:"%",
   width: "100%",
   marginTop: "10%",
   marginBottom:"10%",

  },

  boxNumero: {
    borderColor: '#5be2ce',
    backgroundColor: '#102a43',
    borderWidth: 10,
    height: "20%",
    width: "75%",
    borderRadius: "75%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10%",
  },

  tituloTexto: {
    fontSize: 16,
    marginVertical: 8,
    // paddingHorizontal: "20%",
    textAlign: "center",
    // alignItems: "center",
    // margin: "auto",
  },

  numero: {
    fontSize: 36,
    color: '#fff',
    alignItems:"center",
  },

  boxBotao: {
    marginTop: 8,
    width: "100%",
    paddingHorizontal: 10, 
    alignItems:"center",
     
    // margin: "-10%",
  },
});

const Titulo = () => {
  return (
    <View style={estilo.boxTitulo}>
      <Text style={estilo.tituloCabecalho}>
        Sorteio DevMedia
      </Text>

      <Text style={estilo.subtitulo}>
        Hora de ver quem é o vencedor
      </Text>
    </View>
  );
};

const TelaInicial = () => {
  const [Rodadas, setRodada] = useState(1);

  const [numeroEscolhido, setNumeroEscolhido] = useState(0);

  const [numeroSorteado, setNumeroSorteado] = useState(0);

  const [UltimoNumeroSorteado, setUltimoNumeroSorteado] = useState(0);

  const [pontosRodada, setPontosRodada] = useState(0);

  const [pontosTotal, setPontosTotal] = useState(0);

  const[text, setText] = useState(' ');


  const gerarNumero = () => {

    if(Rodadas < 5){
      setUltimoNumeroSorteado(numeroSorteado);

      const novoNumero = Math.floor(Math.random() * 100 + 1);

      setNumeroSorteado(novoNumero);

      setRodada(Rodadas+1);

      CalcularPontos(novoNumero);
    } else if(Rodadas >= 5){
      setNumeroEscolhido(0);
      setNumeroSorteado(0);
      setRodada(1);
      setPontosRodada(0);
      setPontosTotal(0);
    }
  };

  const CalcularPontos = (numeroSorteado) =>{
    let pontos = 0
    if(numeroEscolhido > numeroSorteado){
      pontos = 100 - (numeroEscolhido - numeroSorteado);
    } else if(numeroSorteado > numeroEscolhido){
      pontos = 100 - (numeroSorteado - numeroEscolhido);
    } else{
      pontos = 100;
    }

    setPontosRodada(pontos);
    setPontosTotal(pontosTotal+pontos);
  }



  return (
    <View style={estilo.tela}>

      <Text style={estilo.rodada}>
       Rodada: {Rodadas} de 5
      </Text>

      <View style={estilo.boxNumero}>
        <Text style={estilo.numero}>
          {numeroSorteado}
        </Text>
      </View>
        <Text style={estilo.numerosorte}>
          Último número sorteado: {UltimoNumeroSorteado}
        </Text>

      <View style={estilo.boxBotao}>
        <Text style = {estilo.txt}>
        Qual Número será sorteado?
        </Text> 
        <TextInput
          keyboardType='numeric'
          onChangeText={(numero) => setNumeroEscolhido(number(numero))}
          placeholder='Digite um número de 0 a 99' 
          style = {estilo.box}
        />
        <Button
          title="Sortear"
          onPress={gerarNumero}
          color="#1f4f66"
        />
      </View>

      
        <View>
        <Text>Pontos da Rodada</Text>
        <Text>{pontosRodada}</Text>
        </View>
        <View>
          <Text>Pontuação Total {pontosTotal}</Text>
          <Text>{pontosTotal} / 500</Text>
        </View>


        <Text>Escolha um número para começar.</Text>
    </View>
  );
};

const App = () => {
  return (
    <View>
      <Titulo />
      <TelaInicial />
    </View>
  );
};

export default App;