import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
//navegação de páginas

import { useNavigation } from '@react-navigation/native';
import Produtos from '../produtos';

export default function Contato() {
    const navigation = useNavigation();
  return (

    <SafeAreaView style={styles.container}>
      <Text>Boas vindas à Tela Home!</Text>
      <FontAwesome name="home" size={35} color="black" />
      <FontAwesome.Button name='home' size={50} onPress={() =>{ 
        alert("Botão Home!! ", 'você apertou o botão Home')} } style={{fontSize: 50}}>Botão Home</FontAwesome.Button>

      <AntDesign.Button name="product" size={24} color="black" onPress={()=>{

        navigation.navigate('Produtos')


      }}> Botão de Produtos</AntDesign.Button>
      <StatusBar style="auto" />
      
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