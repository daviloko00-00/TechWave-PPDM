import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Image, View, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Produtos() {

  // função para simular carrinho
  const adicionarCarrinho = (nome) => {
    Alert.alert('Carrinho', `${nome} adicionado ao carrinho!`);
  };

  // lista de produtos (estático)
  // por que usar isso?
  // porque evita ficar criando várias Views manualmente (bem mais prático)
  //
  // a gente guarda os produtos em um array e usa o map()
  // o map funciona tipo um "forEach", percorrendo a lista
  //
  // para cada item da lista, ele cria automaticamente um "card" na tela, usando o id como chave (key)
  // como resultado, a gente tem um código mais organizao e com estrutura reutilizável
  const produtos = [
    {
      id: 1,
      nome: 'Notebook Gamer',
      preco: 'R$ 4.000,00',
      pix: 'R$ 3.600,00',
      imagem: require('../../images/note.png')
    },
    {
      id: 2,
      nome: 'Smartphone',
      preco: 'R$ 2.000,00',
      pix: 'R$ 1.800,00',
      imagem: require('../../images/smartphone.png')
    },
    {
      id: 3,
      nome: 'Headset',
      preco: 'R$ 300,00',
      pix: 'R$ 250,00',
      imagem: require('../../images/headset.png')
    },
    {
      id: 4,
      nome: 'Teclado Mecânico',
      preco: 'R$ 500,00',
      pix: 'R$ 450,00',
      imagem: require('../../images/teclado.png')
    },
    {
      id: 5,
      nome: 'Mouse Gamer',
      preco: 'R$ 200,00',
      pix: 'R$ 180,00',
      imagem: require('../../images/mouse.png')
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>

        <Text style={styles.title}>Produtos</Text>
        {/* Analisa cada objeto de item */}
        {produtos.map((item) => (
          //Ao usar .map() para renderizar um array, cada item superior deve ter uma prop key única.
          //Exemplo base que usei para esse map
        /*const lista = [
              { id: '1', nome: 'Item A' },
              { id: '2', nome: 'Item B' },
            ];

            const listaView = lista.map((item) => (
              <View key={item.id} style={{/*...}}>
                <Text>{item.nome}</Text>
              </View>
            )); */
          <View key={item.id} style={styles.card}>

            <Image source={item.imagem} style={styles.image} />

            <Text style={styles.nome}>{item.nome}</Text>

            <Text style={styles.preco}>Preço: {item.preco}</Text>
            <Text style={styles.pix}> Preço via PIX: {item.pix}</Text>

            {/* QUANTIDADE */}
            <View style={styles.quantidadeContainer}>
              <TouchableOpacity style={styles.quantidadebotao}>
                <Text>-</Text>
              </TouchableOpacity>

              <Text style={styles.quantidadeItens}>1</Text>

              <TouchableOpacity style={styles.quantidadebotao}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
            {/* BOTÃO*/}
            <TouchableOpacity
              style={styles.botao}
              onPress={() => adicionarCarrinho(item.nome)}
            >
              <Text style={styles.botaoTexto}>Adicionar ao Carrinho</Text>
            </TouchableOpacity>

          </View>
        ))}

      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  scroll: {
    alignItems: 'center',
    paddingVertical: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    width: '95%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,

    elevation: 5,
  },

  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  preco: {
    fontSize: 16,
    color: '#444',
  },

  pix: {
    fontSize: 16,
    color: 'green',
    marginBottom: 10,
  },

  quantidadeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
  },

  quantidadebotao: {
    backgroundColor: '#ddd',
    padding: 5,
    borderRadius: 5,
  },

  quantidadeItens: {
    fontSize: 16,
  },

  botao: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});