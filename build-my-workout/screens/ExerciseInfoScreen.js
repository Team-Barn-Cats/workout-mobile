// Displays the information from RenderExercise

// Compare to CampsiteInfoScreen in nucampsite

import RenderExercise from "../features/exercises/RenderExercise";
import { useState } from "react";


const ExerciseInfoScreen = ({ route }) => {
  const { exercise } = route.params;

  const [add, setAdd] = useState(false);

  return (
    <RenderExercise
      exercise={exercise}
      isAdded={add}
      markAdded={() => setAdd(true)}
    />
  );
};

export default ExerciseInfoScreen;
