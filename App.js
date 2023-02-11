import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/login/Login";
import News from "./components/news/News";
import NewInformation from "./components/new/NewInformation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "App News" }}
        />
        <Stack.Screen
          name="News"
          component={News}
          options={{ title: "Noticias" }}
        />
        <Stack.Screen
          name="NewInfo"
          component={NewInformation}
          options={{ title: "Información" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
