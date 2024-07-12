import Main from "./screens/MainComponent";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/HomeScreen";
import { EXERCISES } from "./features/exercises/exercises";
import { View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  );
}
