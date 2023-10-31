import React, {useEffect, useState} from 'react';
import {useRootStore} from '../hooks/useRootStore';
import {observer} from "mobx-react";
import {
    Button,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    FlatList,
    SafeAreaView,
    ActivityIndicator,
    ScrollView
} from 'react-native';

export const TodoApiScreen = observer(({navigation}) => {

    const {todoApiStore} = useRootStore();

    useEffect(() => {
        todoApiStore.getItems();
    }, [])

    const keyExtractor = (index) => {
        return index.toString();
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={[styles.defaultText, {marginTop: 10, marginBottom: 10}]}> todos from server:</Text>
            <ScrollView style={styles.content}>
                {!todoApiStore.isLoading ? (
                    todoApiStore.todoList.map((item, i) => {
                        return (
                            <View key={`item_${i}`}>
                                <Text style={[styles.paramText, {color: 'blue'}]}> Значение
                                    userId: {item.userId} </Text>
                                <Text style={[styles.paramText, {color: 'red'}]}> Значение id: {item.id} </Text>
                                <Text style={[styles.paramText, {color: 'green'}]}> Текст: {item.title}</Text>
                                <Text
                                    style={[styles.paramText, {color: 'purple', marginBottom: 20}]}> Статус: {item.completed.toString()}</Text>
                            </View>
                        );
                    })
                ) : (
                    <ActivityIndicator style={styles.loader}/>
                )}
            </ScrollView>
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
        padding:
            16,
        marginBottom: 20
    }
    ,
    defaultText: {
        color:
            'black',
        fontSize:
            28,
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
        flex: 2,
        alignContent: "center"
    }
});