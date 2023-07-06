import {Text, View, StyleSheet, Pressable} from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{color: '#341e52'}}
                onPress={props.onDeleteItem.bind(this, props.id)}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create(
    {
        goalItem: {
            margin: 8,
            padding: 5,
            borderRadius: 6,
            backgroundColor: '#5e0acc'
        },
        goalText: {
            color: 'white'
        }
    }
);