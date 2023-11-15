import React, {useEffect, useState} from 'react';
import {useRootStore} from '../../hooks/useRootStore';
import {observer} from "mobx-react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    ActivityIndicator,
    ScrollView
} from 'react-native';

export const TodoApiScreen = observer(({navigation}) => {

    const {todoApiStore} = useRootStore();

    useEffect(() => {
        todoApiStore.getItems();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={[styles.defaultText, {marginTop: 20, marginBottom: 20}]}> todos from local storage</Text>
            {!todoApiStore.todoList ? (
                    !todoApiStore.isLoading ? (
                        <View style={styles.content}>
                            <Text style={[styles.defaultText, {marginBottom: 16, fontSize: 20, fontWeight: 'bold'}]}>
                                Local Storage is EMPTY
                            </Text>
                            <TouchableOpacity style={[styles.buttonFirst]}
                                              onPress={() => todoApiStore.loadItems()}>
                                <Text style={styles.appButtonText}>Get TASKS from server</Text>
                            </TouchableOpacity>
                        </View>) : (
                        <ActivityIndicator style={styles.loader}/>)) :
                (<View style={styles.content}>
                        <TouchableOpacity style={[styles.buttonSecond, {marginBottom: 20}]}
                                          onPress={() => todoApiStore.removeItems()}>
                            <Text style={styles.appButtonText}>Delete TASKS</Text>
                        </TouchableOpacity>
                        <ScrollView style={styles.scrollContent}>
                            {!todoApiStore.isLoading ? (
                                todoApiStore.todoList.map((item, i) => {
                                    return (
                                        <View key={`item_${i}`}>
                                            <Text style={[styles.paramText, {color: 'blue'}]}> Значение
                                                userId: {item.userId} </Text>
                                            <Text style={[styles.paramText, {color: 'red'}]}> Значение
                                                id: {item.id} </Text>
                                            <Text
                                                style={[styles.paramText, {color: 'green'}]}> Текст: {item.title}</Text>
                                            <Text
                                                style={[styles.paramText, {
                                                    color: 'purple',
                                                    marginBottom: 20
                                                }]}> Статус: {item.completed.toString()}</Text>
                                        </View>
                                    );
                                })
                            ) : (
                                <ActivityIndicator style={styles.loader}/>
                            )}
                        </ScrollView>
                    </View>
                )
            }
        </SafeAreaView>
    )
        ;
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    }
    ,
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    scrollContent: {
        flex: 1,
        paddingHorizontal: 30,
        marginBottom: 20
    }
    ,
    buttonFirst: {
        width: 160,
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
    buttonSecond: {
        width: 120,
        height:
            50,
        justifyContent:
            "center",
        alignItems:
            "center",
        backgroundColor:
            'red',
    }
    ,
    defaultText: {
        color:
            'black',
        fontSize:
            24,
    }
    ,
    paramText: {
        fontWeight: 'bold',
        fontSize:
            20,
    },
    titleText: {
        color: 'black',
        fontSize:
            20,
    }
    ,
    emptyView: {
        width: 10,
    }
    ,
    loader: {
        flex: 1,
        alignContent: "center",
    }
});