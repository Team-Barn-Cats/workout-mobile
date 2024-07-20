// Reference DirectoryScreen in nucampsite

import { FlatList, StyleSheet } from "react-native";
import { Avatar, ListItem, Icon } from "react-native-elements";
import { useState } from "react";
import { EXERCISES } from "../features/exercises/exercises";
import { Tile } from "react-native-elements";
import { useSelector } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "../components/LoadingComponent";
import { View, Text } from "react-native";

const FullBodyOptions = ({ navigation }) => {
  const exercises = useSelector((state) => state.exercises);
  const [workout, setWorkout] = useState(false);

  if (exercises.isLoading) {
    return <Loading />;
    console.log("Help");
  }
  if (exercises.errMess) {
    return (
      <View>
        <Text>{exercises.errMess}</Text>
      </View>
    );
  }

  const renderExerciseItem = ({ item: exercise }) => {
    return (
      <ListItem
        onPress={() => navigation.navigate("ExerciseInfo", { exercise })}
      >
        <Icon
          name="plus"
          type="font-awesome"
          color="#f50"
          raised
          reverse
          onPress={() => console.log("Pressed")}
        />
        <ListItem.Content>
          <ListItem.Title>{exercise.name}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    );
  };
  return (
    <FlatList
      data={exercises.exercisesArray}
      renderItem={renderExerciseItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default FullBodyOptions;
