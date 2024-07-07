import { EXERCISES } from "../features/exercises/exercises";
import FullBodyOptions from "./FullBodyOptions";
import { View, Platform } from "react-native";
import ExerciseInfoScreen from "./ExerciseInfoScreen";
import { Constants } from "expo-constants";
import { createStackNavigator } from '@react-navigation/stack';
import RenderWorkoutOptions from "../features/exercises/RenderWorkoutOptions";
import UpperBodyOptions from "./UpperBodyOptions";
import LowerBodyOptions from "./LowerBodyOptions";


const ExerciseInfoNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
        initialRouteName='WorkoutOptions'
        screenOptions={{
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff'
        }}
    >
        <Stack.Screen
            name='WorkoutOptions'
            component={RenderWorkoutOptions}
            options={{ title: 'Workout Options' }}
        />
        <Stack.Screen
            name='FullBody'
            component={FullBodyOptions}
            options={{ title: 'Full Body Options' }}
        />
        <Stack.Screen
            name='UpperBody'
            component={UpperBodyOptions}
            options={{ title: 'Upper Body Options' }}
        />
        <Stack.Screen
            name='LowerBody'
            component={LowerBodyOptions}
            options={{ title: 'Upper Body Options' }}
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

const Home = () => {


  return (
    <View style={{ flex: 1}}>
      <ExerciseInfoNavigator />
    </View>
  );
};

export default Home;
