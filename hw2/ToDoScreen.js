import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {
    Button, StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, SafeAreaView, Pressable
} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function ToDoScreen({navigation}) {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'TODO List'} component={Todo}/>
            <Stack.Screen name={'Completed Tasks'} component={CompletedTasks}/>
        </Stack.Navigator>
    );
};

function TodoLine({el, ind, touchHandler, deleteHandler}) {
    return (
        <View style={[styles.todoLine, {backgroundColor: el.isCompleted ? '#90EE90' : 'white'}]}>
            <TouchableOpacity style={styles.todoLineTouch}>
                <Text style={styles.titleText}>{el.text}</Text>
                <Button
                    title='Done'
                    onPress={() => touchHandler(ind)}
                />
                <View style={styles.emptyView}></View>
                <Button
                    title='Remove'
                    onPress={() => deleteHandler(ind)}/>
            </TouchableOpacity>
        </View>
    )
        ;
}

function Todo({navigation}) {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');
    const addTodo = () => {
        let newTodos = [...todos];
        newTodos.push({text: text, isCompleted: false});
        setTodos(newTodos);
        setText('');
    };
    const getCompletedTodos = () => {
        const newTodos = [...todos]
        return newTodos.filter(item => item.isCompleted)
    };
    const touchHandler = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };
    const deleteHandler = (index) => {
        const items = [...todos];
        items.splice(index, 1);
        setTodos(items);
    };
    const keyExtractor = (index) => {
        return index.toString();
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.defaultText}>NEW:</Text>
                <FlatList
                    data={todos}
                    keyExtractor={(item, index) => keyExtractor(index)}
                    renderItem={({item, index}) => (
                        <TodoLine el={item} ind={index} touchHandler={touchHandler} deleteHandler={deleteHandler}/>)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter task"
                    onChangeText={newText => setText(newText)}
                    value={text}>
                </TextInput>
                <TouchableOpacity style={[styles.buttonFirst, {marginBottom: 14}]}
                                  onPress={() => addTodo()}>
                    <Text style={styles.appButtonText}>Add new task</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonSecond, {marginBottom: 20}]}
                                  onPress={() => navigation.navigate('Completed Tasks', {completedTodos: getCompletedTodos()})}>
                    <Text style={styles.appButtonText}>Completed -></Text>
                </TouchableOpacity>
                <StatusBar style="auto"/>
            </View>
        </SafeAreaView>
    );
}

function CompletedTasks({navigation, route}) {
    const keyExtractor = (index) => {
        return index.toString();
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.defaultText}>COMPLETED:</Text>
                <FlatList
                    data={route.params.completedTodos}
                    keyExtractor={(item, index) => keyExtractor(index)}
                    renderItem={({item}) =>
                        <View style={styles.todoLine}>
                            <Text style={styles.texts}>{item.text}</Text>
                        </View>
                    }/>
                <StatusBar style="auto"/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 8,
        width:
            250,
        height:
            40,
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 20,
        backgroundColor:
            '#f5f5f5'
    }
    ,
    buttonFirst: {
        width: 120,
        height:
            50,
        justifyContent:
            "center",
        alignItems:
            "center",
        backgroundColor:
            'black',
    }
    ,
    buttonSecond: {
        width: 120,
        height:
            50,
        justifyContent:
            "center",
        alignItems:
            "center",
        backgroundColor:
            'blue',
    }
    ,
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
    todoLineTouch: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        flex: 3,
    },
    appButtonText: {
        color: 'white',
        fontSize:
            16,
    },
    defaultText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize:
            28,
    }
    ,
    titleText: {
        color: 'black',
        fontSize:
            20,
        flex: 3
    }
    ,
    emptyView: {
        width: 10
    },
    taskCompleted: {
        backgroundColor: 'green'
    },
    taskNotCompleted: {
        backgroundColor: 'white'
    },
    texts: {
        flex: 3,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: "100",
        color: 'green'
    }
});