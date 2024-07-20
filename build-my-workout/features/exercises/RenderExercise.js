// Renders the information/details for an exercise

// Compare to RenderCampsite in nucampsite

import { Text, View, StyleSheet } from "react-native";
import { Card, Icon } from "react-native-elements";
import { useState } from "react";

const RenderExercise = (props) => {
  const { exercise } = props;
  if (exercise.isLoading) {
    return <Loading />;
  }
  if (exercise.errMess) {
    return (
      <View>
        <Text>{campsites.errMess}</Text>
      </View>
    );
  }

  if (exercise) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={{ uri: exercise.image }}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              {exercise.name}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{exercise.description}</Text>
        <Icon
          name={props.isWorkout ? "check" : "plus"}
          type="font-awesome"
          color="#f50"
          raised
          reverse
          onPress={() =>
            props.isWorkout
              ? console.log("Already added")
              : props.markWorkout()
          }
        />
      </Card>
    );
  }

  return <View />;
};

export default RenderExercise;
