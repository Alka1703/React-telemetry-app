import {StyleSheet, View, Button, TextInput, FlatList} from 'react-native';
import {useState} from "react";
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
import {StatusBar} from "expo-status-bar";


export const telemetry = require('@project-sunbird/telemetry-sdk');

const config = {
    "pdata": {
      "id": "mosip-001",
      "ver": "0.0.1",
      "pid": "test-01"
    },

    "env": "qatriple",
    "channel": "XXXX",
    "did": "20d63257084c2dca33f31a8f14d8e94c0d939de4",
    "authtoken": "",
    "uid": "anonymous",
    "sid": "85e8a2c8-bb8e-4666-a21b-c29ec590d740",
    "batchsize": 10,
    "mode": "play",
    "host": "test-mosip.free.beeceptor.com",
    "endpoint": "/v3/telemetry",
    "tags": [],
    "cdata": []
  }


function init() {
    const startEdata = {
      "type": "mobile-app",
      "mode": "test",
      "stageid": "stage-id"
    };
    const options = {};
    telemetry.start(config, "content_id", "contetn_ver", startEdata, options );
}
export default function App() {

    const [courseGoals, setCourseGoals] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function startAddGoalHandler() {
        setModalIsVisible(true);
    }

    function endAddGoalHandler() {
        setModalIsVisible(false);
    }

    function addGoalHandler(enteredGoalText) {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            {text: enteredGoalText, key: Math.random().toString()}
        ]);
    }

    function deleteGoalHandler(id) {
        setCourseGoals(currentCourseGoals => {
            return currentCourseGoals.filter((goal) => goal.key !== id);
        });
    }

    return (
        <>
            <StatusBar style='light'/>
            <View style={styles.appContainer}>
                <Button title={"Add new Goal"} color='#5e0acc' onPress={startAddGoalHandler}/>
                {modalIsVisible &&
                    <GoalInput
                        onAddGoal={addGoalHandler}
                        onCancel={endAddGoalHandler}
                        visible={modalIsVisible}
                    />}

                <View style={styles.goalContainer}>
                    <FlatList
                        data={courseGoals}
                        renderItem={(itemData) => {
                            return <GoalItem
                                text={itemData.item.text}
                                id={itemData.item.key}
                                onDeleteItem={deleteGoalHandler}
                            />;
                        }}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 80,
        paddingHorizontal: 20,
        backgroundColor: '#1e085a'


    }, inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#a19f9f'

    }, textInput: {
        borderColor: '#716b6b',
        borderWidth: 1,
        width: '70%',
        marginRight: 15,
        padding: 8
    }, goalContainer: {
        flex: 6
    }

});
