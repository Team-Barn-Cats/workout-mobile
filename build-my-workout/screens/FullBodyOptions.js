// Reference DirectoryScreen in nucampsite

import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { useState } from 'react';
import { EXERCISES } from '../features/exercises/exercises';

const FullBodyOptions = ({ navigation }) => {
    const [exercises, setExercises] = useState(EXERCISES);

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
            <ListItem onPress={() => navigation.navigate('ExerciseInfo', {exercise})}>
                <Avatar source={exercise.image} rounded />
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

export default FullBodyOptions;