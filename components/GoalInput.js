import {Button, StyleSheet, TextInput, View, Modal, Image} from "react-native";
import {useState} from "react";

function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('')
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')}/>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your current goal"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color='#5e0acc'/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color='#f31282'/>
                    </View>
                </View>
            </View>

        </Modal>

    );
};

export default GoalInput;

const styles = StyleSheet.create(
    {
        inputContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#311b6b'

        }, textInput: {
            borderColor: '#bbaee0',
            backgroundColor: '#cac0e8',
            color:'#000000',
            borderRadius:6,
            borderWidth: 1,
            width: '70%',
            marginRight: 15,
            padding: 8,
        },
        buttonContainer: {
            flexDirection: "row",
        },
        button: {
            width: 100,
            marginTop: 16,
            marginHorizontal: 8
        },
        image: {
            width: 100,
            height: 100,
            margin: 20
        }
    }
);