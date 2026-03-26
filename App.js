import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home";
import Contato from "./src/screens/contato";
import Produtos from "./src/screens/produtos";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Tela Inicial"
          }}
        />
        <Stack.Screen
          name="Contato"
          component={Contato}
          options={{
            title: " Tela de Contato"
          }}
        />
        <Stack.Screen
          name="Produtos"
          component={Produtos}
          options={{
            title: "Tela de Produtos"
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
