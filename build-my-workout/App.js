import Main from "./screens/MainComponent";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/HomeScreen";
import { EXERCISES } from "./features/exercises/exercises";

export default function App() {
  return (
    <NavigationContainer>
      <Home />
      <Main />
    </NavigationContainer>
  );
}
