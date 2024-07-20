// Home screen. Will display a welcome message and three workout options

import { EXERCISES } from "../features/exercises/exercises";
import FullBodyOptions from "./FullBodyOptions";
import { View, Platform } from "react-native";
import ExerciseInfoScreen from "./ExerciseInfoScreen";
import { Constants } from "expo-constants";
import { createStackNavigator } from '@react-navigation/stack';
import RenderWorkoutOptions from "../features/exercises/RenderWorkoutOptions";
import UpperBodyOptions from "./UpperBodyOptions";
import LowerBodyOptions from "./LowerBodyOptions";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchExercises } from "../features/exercises/exercisesSlice";


const ExerciseInfoNavigator = () => {
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

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchExercises());
    }, [dispatch]);

  return (
    <View style={{ flex: 1}}>
      <ExerciseInfoNavigator />
    </View>
  );
};

export default Home;
