import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
// navegação de páginas
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>

        <FontAwesome name="home" size={35} color="black" style={styles.icon} />
        
        <Text style={styles.title}>Boas-vindas à TechWave Solutions</Text>

        <Text style={styles.text}>
          A TechWave Solutions é uma empresa fictícia voltada ao desenvolvimento de soluções tecnológicas modernas e acessíveis. Seu principal objetivo é facilitar o dia a dia de pessoas e empresas por meio de aplicativos intuitivos, eficientes e com design inovador.
        </Text>

        <Text style={styles.text}>
          Com foco em inovação e experiência do usuário, a TechWave busca transformar ideias em produtos digitais funcionais, sempre acompanhando as tendências do mercado e utilizando as melhores práticas de desenvolvimento.
        </Text>

        <Text style={styles.text}>
          A empresa atua nas áreas de desenvolvimento mobile, sistemas web e consultoria tecnológica, oferecendo soluções personalizadas que atendem às necessidades de cada cliente.
        </Text>

        <AntDesign.Button
          name="product"
          size={24}
          color="black"
          onPress={() => {
            navigation.navigate('Produtos');
          }}
        >
          Botão de Produtos
        </AntDesign.Button>

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
    justifyContent: 'center',
    padding: 20,
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

  icon: {
    marginBottom: 20,
  },
});