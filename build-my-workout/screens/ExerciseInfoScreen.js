// Displays the information from RenderExercise

// Compare to CampsiteInfoScreen in nucampsite

import RenderExercise from "../features/exercises/RenderExercise";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleWorkout } from "../features/workouts/workoutsSlice";
import { useSelector } from "react-redux";

const ExerciseInfoScreen = ({ route }) => {
  const { exercise } = route.params;

  const workouts = useSelector((state) => state.workouts);
  const dispatch = useDispatch();

  return (
    <RenderExercise
      exercise={exercise}
      isWorkout={workouts.includes(exercise.id)}
      markWorkout={() => dispatch(toggleWorkout(exercise.id))}
    />
  );
};

export default ExerciseInfoScreen;
