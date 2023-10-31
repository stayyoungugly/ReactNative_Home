import {FlatList, SafeAreaView, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {observer} from "mobx-react";
import {useMainStore} from "../../hooks/useMainStore";
import {StatusBar} from "expo-status-bar";

const CompletedTasksScreen = observer(({navigation}) => {
    const {todoStore} = useMainStore();

    const [todo, setTodo] = useState(todoStore.actionGetCompleted(todoStore.todoEntity.todoList) || []);

    useEffect(() => {
    }, [todo])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.defaultText}>COMPLETED:</Text>
                <FlatList
                    data={todo}
                    renderItem={({item}) =>
                        <View style={styles.todoLine}>
                            <Text style={styles.texts}>{item.text}</Text>
                        </View>
                    }/>
                <StatusBar style="auto"/>
            </View>
        </SafeAreaView>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 16,
        alignItems: "center"
    },
    todoLine: {
        width: 300,
        borderWidth: 1,
        borderColor: 'purple',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
        marginTop: 12,
    },
    defaultText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize:
            28,
    }
    ,
    texts: {
        flex: 3,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: "100",
        color: 'green',
        marginVertical: 20,
    }
});

export default CompletedTasksScreen;