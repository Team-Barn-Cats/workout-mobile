// Lists the initial 3 options on the homepage

// Reference DirectoryScreen in nucampsite

import { Avatar, ListItem } from "react-native-elements";
import { View } from "react-native";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import UpperBodyOptions from "../../screens/UpperBodyOptions";


const RenderWorkoutOptions = ({ navigation }) => {
  return (
    <View>
      <ListItem onPress={() => navigation.navigate("FullBody")}>
        <Text>Full Body</Text>
      </ListItem>
      <ListItem onPress={() => navigation.navigate("UpperBody")}>
        <Text>Upper Body</Text>
      </ListItem>
      <ListItem onPress={() => navigation.navigate("LowerBody")}>
        <Text>Lower Body</Text>
      </ListItem>
    </View>
  );
};

export default RenderWorkoutOptions;

