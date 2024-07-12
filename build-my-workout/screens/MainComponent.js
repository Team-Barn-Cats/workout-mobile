import { Platform, View } from "react-native";
import Constants from "expo-constants";
import ExerciseInfoScreen from "./ExerciseInfoScreen";
import FullBodyOptions from "./FullBodyOptions";
import { createStackNavigator } from "@react-navigation/stack";
import UpperBodyOptions from "./UpperBodyOptions";

const HomeScreenNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator
        initialRouteName='WorkoutOptions'
        screenOptions={{
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff'
        }}
    >
        <HomeStack.Screen
            name='WorkoutOptions'
            component={RenderWorkoutOptions}
            options={{ title: 'Workout Options' }}
        />
        <HomeStack.Screen
            name='FullBody'
            component={FullBodyOptions}
            options={{ title: 'Full Body Options' }}
        />
        <HomeStack.Screen
            name='UpperBody'
            component={UpperBodyOptions}
            options={{ title: 'Upper Body Options' }}
        />
        <HomeStack.Screen
            name='LowerBody'
            component={LowerBodyOptions}
            options={{ title: 'Lower Body Options' }}
        />
        <HomeStack.Screen
            name='ExerciseInfo'
            component={ExerciseInfoScreen}
            options={({ route }) => ({
                title: route.params.exercise.name
            })}
        />
    </HomeStack.Navigator>
);
};
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

const ExercisesNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="UpperBody"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#5637DD",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="UpperBody"
        component={UpperBodyOptions}
        options={{ title: "Upper Body" }}
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
      <ExercisesNavigator />
    </View>
  );
};

export default Main;
