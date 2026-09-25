import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { View, Text, Button, StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  boxTitulo: {
    width: '100%',
    backgroundColor: '#a1e5db',
    paddingVertical: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tituloCabecalho: {
    color: '#102a43',
    fontWeight: '700',
    fontSize: 26,
    textAlign: 'center',
  },

  subtitulo: {
    color: '#102a43',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 4,
  },

  tela: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  rodada: {
    backgroundColor: '#c1ebe4',
    borderRadius: 12,
    width: '90%',
    marginTop: 12,
    marginBottom: 18,
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 10,
  },

  numerosorte: {
    color: '#797979',
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 12,
  },

  txt: {
    color: '#102a43',
    fontWeight: '900',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 8,
  },

  box: {
    borderColor: '#c4e0dc',
    height: 50,
    borderWidth: 2,
    borderRadius: 8,
    width: '100%',
    marginTop: 10,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingHorizontal: 12,
  },

  boxNumero: {
    borderColor: '#5be2ce',
    backgroundColor: '#102a43',
    borderWidth: 10,
    height: 180,
    width: 180,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },

  tituloTexto: {
    fontSize: 16,
    marginVertical: 8,
    textAlign: 'center',
  },

  numero: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 40,
    textAlign: 'center',
  },

  boxBotao: {
    marginTop: 8,
    width: '100%',
    paddingHorizontal: 10,
    alignItems: 'center',
  },

  PR: {
    fontWeight: '700',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 18,
  },

  PR2: {
    fontWeight: '500',
    fontSize: 18,
    color: '#797979',
    textAlign: 'center',
    marginTop: 16,
  },
});

const Titulo = () => {
  return (
    <View style={estilo.boxTitulo}>
      <Text style={estilo.tituloCabecalho}>
        Jogo dos Números
      </Text>

      <Text style={estilo.subtitulo}>
        Hora de ver quem é o vencedor!
      </Text>
    </View>
  );
};

const TelaInicial = () => {
  const [Rodadas, setRodada] = useState(1);

  const [numeroEscolhido, setNumeroEscolhido] = useState(0);

  const [numeroSorteado, setNumeroSorteado] = useState("?");

  const [UltimoNumeroSorteado, setUltimoNumeroSorteado] = useState(0);

  const [pontosRodada, setPontosRodada] = useState(0);

  const [pontosTotal, setPontosTotal] = useState(0);

  const[text, setText] = useState('');

  
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

        <Text style={estilo.PR2}>{text}</Text>
      </View>

      <View style={{ alignItems: 'center' }}>
        <Text style={estilo.PR}>Pontos da Rodada</Text>
        <Text style={{ textAlign: 'center' }}>{pontosRodada}</Text>
      </View>

      <View style={{ alignItems: 'center' }}>
        <Text style={estilo.PR}>Pontuação Total </Text>
        <Text style={{ textAlign: 'center' }}>{pontosTotal} / 500</Text>
      </View>

      <Text style={estilo.PR2}>Escolha um número para começar.</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#edf5f4' }}>
      <Titulo />
      <TelaInicial />
    </View>
  );
};

export default App;