import React, {useEffect, useState} from "react";
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,
    View, ActivityIndicator
} from "react-native";
import {StatusBar} from "expo-status-bar";
import {observer} from "mobx-react";
import {useMainStore} from "../hooks/useMainStore";
import ToDoLine from "../components/ToDoLine";
import {useNavigation} from "@react-navigation/native";

const ToDoScreen = observer(({navigation: {navigate}}) => {
    const navigation = useNavigation();
    const [text, setText] = useState('');
    const {todoStore} = useMainStore();

    useEffect(() => {
        todoStore.getToDoObjectFromService();
    }, [])

    const addTodo = () => {
        todoStore.actionAdd({text, completed: false, index: todoStore.todoEntity.todoList.length});
        setText('');
    };
    const touchHandler = (index) => {
        todoStore.actionChange(index);
    };
    const deleteHandler = (index) => {
        todoStore.actionDelete(index);
    };
    const keyExtractor = (index) => {
        return index.toString();
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={[styles.defaultText, {marginTop: 40}]}>NEW:</Text>
                {todoStore.todoEntity && !todoStore.isLoading ? (
                    <FlatList
                        data={todoStore.todoEntity.todoList}
                        keyExtractor={(item, index) => keyExtractor(index)}
                        renderItem={({item, index}) => (
                            <ToDoLine el={item} ind={index} touchHandler={touchHandler}
                                      deleteHandler={deleteHandler}/>)}
                    />) : (
                    <ActivityIndicator/>)
                }
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
                                  onPress={() => navigation.navigate('CompletedTasks', {completedTodos: todoStore.todoEntity.todoList})}>
                    <Text style={styles.appButtonText}>Completed -></Text>
                </TouchableOpacity>
                <StatusBar style="auto"/>
            </View>
        </SafeAreaView>
    );
});

const styles = StyleSheet.create({
    input: {
        padding: 8,
        width:
            250,
        height:
            40,
        borderWidth:
            2,
        borderColor:
            'black',
        marginBottom:
            20,
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
            'seagreen',
    }
    ,
    container: {
        flex: 1,
    }
    ,
    content: {
        flex: 1,
        padding:
            16,
        alignItems:
            "center"
    }
    ,
    todoLine: {
        width: 300,
        borderWidth:
            1,
        borderColor:
            'purple',
        justifyContent:
            'flex-start',
        flexDirection:
            'row',
        flex:
            1,
        flexWrap:
            'wrap',
        marginTop:
            12,
    }
    ,
    todoLineTouch: {
        paddingVertical: 10,
        paddingHorizontal:
            16,
        flexDirection:
            'row',
        flex:
            3,
    }
    ,
    appButtonText: {
        color: 'white',
        fontSize:
            16,
    }
    ,
    defaultText: {
        fontWeight: 'bold',
        color:
            'black',
        fontSize:
            28,
    }
    ,
    titleText: {
        color: 'black',
        fontSize:
            20,
        flex:
            3
    }
    ,
    emptyView: {
        width: 10,
    }
    ,
});

export default ToDoScreen;