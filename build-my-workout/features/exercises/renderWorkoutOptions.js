// Reference DirectoryScreen in nucampsite

import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { useState } from "react";
import { EXERCISES } from "../features/exercises/exercises";
import { View, Text } from "react-native";
import { Card, CardTitle } from "react-native-elements";

const RenderWorkoutOptions = ({ navigation }) => {
  return (
    <View>
      <Card onPress={() => navigation.navigate('FullBody')}>
        <CardTitle>
          <Text>Full Body</Text>
        </CardTitle>
      </Card>
      <Card onPress={() => navigation.navigate('UpperBody')}>
        <CardTitle>
          <Text>Upper Body</Text>
        </CardTitle>
      </Card>
      <Card onPress={() => navigation.navigate('LowerBody')}>
        <CardTitle>
          <Text>Lower Body</Text>
        </CardTitle>
      </Card>
    </View>
  );
};

export default RenderWorkoutOptions;
