import { Platform, View } from "react-native";
import Constants from "expo-constants";
import ExerciseInfoScreen from "./ExerciseInfoScreen";
import FullBodyOptions from "./FullBodyOptions";
import { createStackNavigator } from "@react-navigation/stack";

const DirectoryNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="FullBody"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#5637DD",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="FullBody"
        component={FullBodyOptions}
        options={{ title: "Exercise Directory" }}
      />
      <Stack.Screen
        name="ExerciseInfo"
        component={ExerciseInfoScreen}
        options={({ route }) => ({
          title: route.params.exercise.name,
        })}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
      }}
    >
      <DirectoryNavigator />
    </View>
  );
};

export default Main;
