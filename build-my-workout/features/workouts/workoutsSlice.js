import { createSlice } from "@reduxjs/toolkit";

const workoutsSlice = createSlice({
  name: "workouts",
  initialState: [],
  reducers: {
    toggleWorkout: (workouts, action) => {
      if (workouts.includes(action.payload)) {
        return workouts.filter((workout) => workout !== action.payload);
      } else {
        workouts.push(action.payload);
      }
    },
  },
});

export const { toggleWorkout } = workoutsSlice.actions;
export const workoutsReducer = workoutsSlice.reducer;
