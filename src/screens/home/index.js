import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
// navegação de páginas
import { useNavigation } from '@react-navigation/native';


export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image source={require('./../../images/logoTW.png')} style={styles.logo}></Image>


        <Text style={styles.title}>Boas-vindas à TechWave Solutions</Text>

        <Text style={styles.text}>
          A TechWave Solutions é uma loja especializada em periféricos de alta qualidade, voltada para gamers, profissionais e entusiastas de tecnologia. Nosso objetivo é oferecer equipamentos que elevem o desempenho, o conforto e a experiência do usuário no dia a dia.
        </Text>

        <Text style={styles.text}>
          Trabalhamos com uma seleção criteriosa de produtos como teclados mecânicos, mouses de alta precisão, headsets imersivos e outros acessórios essenciais. Buscamos sempre unir tecnologia, design moderno e ótimo custo-benefício.
        </Text>

        <Text style={styles.text}>
          Na TechWave, acreditamos que cada detalhe faz diferença. Por isso, oferecemos soluções que atendem desde usuários casuais até os mais exigentes, garantindo qualidade, confiabilidade e inovação em cada produto.
        </Text>
        <View style={styles.espacobotao

        }>

          <AntDesign.Button
            style={styles.button}
            name="profile"
            size={24}
            color="black"
            onPress={() => navigation.navigate('Produtos')}
          >
            Ir para Produtos
          </AntDesign.Button>

          <AntDesign.Button
            style={styles.button}
            name="contacts"
            size={24}
            color="black"
            onPress={() => navigation.navigate('Contato')}
          >
            Ir para Contato
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