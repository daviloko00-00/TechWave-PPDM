import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Contato() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>

        <Image 
          source={require('./../../images/logoTW.png')} 
          style={styles.logo} 
        />

        <Text style={styles.title}>Contato</Text>

        <Text style={styles.text}>
          Entre em contato com a TechWave Solutions para tirar dúvidas, solicitar suporte ou conhecer melhor nossos produtos.
        </Text>

        <Text style={styles.text}>
            Email: techwavesuporte@gmail.com
        </Text>

        <Text style={styles.text}>
            CNPJ: 4455003344
        </Text>

        <Text style={styles.text}>
            WhatsApp: (19) 99999-9999
        </Text>

        <Text style={styles.text}>
            Localização: Sumaré - SP
            Rua dos Bobos, nº0, Jardim Maria Antônia
        </Text>

        <View style={styles.espacobotao}>

          <AntDesign.Button
            style={styles.button}
            name="home"
            size={20}
            color="black"
            onPress={() => navigation.navigate('Home')}
          >
            Voltar para Home
          </AntDesign.Button>

          
        </View>

      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'

  },

  scroll: {
    alignItems: 'center',
    padding: 20,
  },

  logo: {
    width: 250,
    height: 200,
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 20,
    textAlign: 'center',
  },

  text: {
    fontSize: 16,
    color: '#444',
    marginBottom: 15,
    textAlign: 'justify',
  },

  button: {

    borderRadius: 10,
    gap: 10,
  },

  espacobotao: {
    width: '100%',
    gap: 10,
    marginTop: 10,
  }
});