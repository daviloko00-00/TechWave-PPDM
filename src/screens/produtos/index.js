import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
//navegação de páginas
import Contato from '../contato';
import { useNavigation } from '@react-navigation/native';

export default function Produtos() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text>Boas vindas à Tela de Produtos!</Text>

      <AntDesign name="product" size={24} color="black" />
      <AntDesign.Button name='product' size={50} onPress={() =>{ 
        alert("Linux pertado painho", 'você apertou o botão Linux')} } style={{fontSize: 50}}>Linux</AntDesign.Button>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={()=>{
        navigation.navigate('Contato')
      }}>
        <Text>Ir para a página sobre</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 20,
  },

  icon: {
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
//PARA ADICIONAR IMAGENS
// <Image source={{
//             uri: 'https://picsum.photos/id/237/200/300'
//           }}
//             style={{ width: "50%", height: 250 }}
//             resizeMode='contain' />