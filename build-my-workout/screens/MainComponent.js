import { useState } from "react";
import { EXERCISES } from "../features/exercises/exercises";
import FullBodyOptions from "./FullBodyOptions";
import { View } from "react-native";
import ExerciseInfoScreen from "./ExerciseInfoScreen";

const Main = () => {
    const [exercises, setExercises] = useState(EXERCISES);
    const [selectedExerciseId, setSelectedExerciseId] = useState();

    return (<View style={{ flex: 1 }}>
        <FullBodyOptions exercises={exercises} onPress={(exerciseId) => setSelectedExerciseId(exerciseId)} />
        <ExerciseInfoScreen exercise={exercises.filter(exercise => exercise.id === selectedExerciseId)[0]} />

    </View>);
};

export default Main;

