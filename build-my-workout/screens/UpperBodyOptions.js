// Reference DirectoryScreen in nucampsite

import { FlatList, StyleSheet } from "react-native";
import { Avatar, ListItem, Icon } from "react-native-elements";
import { useState } from "react";
import { EXERCISES } from "../features/exercises/exercises";

const UpperBodyOptions = ({ navigation }) => {
  const [exercises, setExercises] = useState(EXERCISES);
  const [add, setAdd] = useState(false);

  if (exercises.isLoading) {
    return <Loading />;
  }
  if (exercises.errMess) {
    return (
      <View>
        <Text>{campsites.errMess}</Text>
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
          onPress={() =>
            console.log("Pressed")
          }
        />
        <ListItem.Content>
          <ListItem.Title>{exercise.name}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    );
  };
  return (
    <FlatList
      data={exercises}
      renderItem={renderExerciseItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default UpperBodyOptions;
