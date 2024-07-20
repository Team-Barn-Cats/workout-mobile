import { configureStore } from "@reduxjs/toolkit";
import { exercisesReducer } from "../features/exercises/exercisesSlice";
import { workoutsReducer } from "../features/workouts/workoutsSlice";

export const store = configureStore({
  reducer: {
    exercises: exercisesReducer,
    workouts: workoutsReducer
  },
});
