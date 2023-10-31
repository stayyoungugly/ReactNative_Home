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
        todoApiStore.getTodosFromService();
    }, [])

    const keyExtractor = (index) => {
        return index.toString();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={[styles.defaultText, {marginTop: 1, marginBottom: 12}]}>TODOS:</Text>
                {todoApiStore.todoList && !todoApiStore.isLoading ? (
                    <FlatList
                        data={todoApiStore.todoList}
                        keyExtractor={(item, index) => keyExtractor(index)}
                        renderItem={({item, index}) => (
                            <View>
                                <Text style={[styles.paramText, {color: 'blue', marginTop: 20}]}> Значение
                                    userId: {item.userId} </Text>
                                <Text style={[styles.paramText, {color: 'red'}]}> Значение id: {item.id} </Text>
                                <Text style={[styles.paramText, {color: 'green'}]}> Текст: {item.title}</Text>
                                <Text
                                    style={[styles.paramText, {color: 'purple'}]}> Статус: {item.completed.toString()}</Text>
                            </View>
                        )}/>
                ) : (
                    <ActivityIndicator style={styles.loader}/>)
                }
            </View>
        </SafeAreaView>
    )
        ;
});

const styles = StyleSheet.create({
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
    defaultText: {
        fontWeight: 'bold',
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
        flex:
            3
    }
    ,
    emptyView: {
        width: 10,
    }
    ,
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});