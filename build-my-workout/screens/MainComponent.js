import { EXERCISES } from "../features/exercises/exercises";
import FullBodyOptions from "./FullBodyOptions";
import { View, Platform } from "react-native";
import ExerciseInfoScreen from "./ExerciseInfoScreen";
import { Constants } from "expo-constants";
import { createStackNavigator } from '@react-navigation/stack';

const DirectoryNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
        initialRouteName='Directory'
        screenOptions={{
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff'
        }}
    >
        <Stack.Screen
            name='UpperBody'
            component={FullBodyOptions}
            options={{ title: 'Full Body Options' }}
        />
        <Stack.Screen
            name='ExerciseInfo'
            component={ExerciseInfoScreen}
            options={({ route }) => ({
                title: route.params.exercise.name
            })}
        />
    </Stack.Navigator>
);
};

const Main = () => {


  return (
    <View style={{ flex: 1}}>
      <DirectoryNavigator />
    </View>
  );
};

export default Main;
