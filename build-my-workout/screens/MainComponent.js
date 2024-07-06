import { useState } from "react";
import { EXERCISES } from "../features/exercises/exercises";
import FullBodyOptions from "./FullBodyOptions";

const Main = () => {
    const [exercises, setExercises] = useState(EXERCISES);
    return <FullBodyOptions exercises={exercises}/>;
};

export default Main;

