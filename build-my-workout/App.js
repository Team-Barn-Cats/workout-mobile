import Main from "./screens/MainComponent";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/HomeScreen";
import { EXERCISES } from "./features/exercises/exercises";
import { View } from "react-native";

export default function App() {
  return (

    <NavigationContainer>
        <Home />
      </NavigationContainer>

  );
}
