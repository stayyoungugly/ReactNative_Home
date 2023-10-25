import {Button, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect} from "react";
import {observer} from "mobx-react";
import {useMainStore} from "../hooks/useMainStore";


export const ToDoLine = observer(props => {
    const {todoStore} = useMainStore();

    useEffect(() => {
    }, [todoStore.todoEntity.todoList[props.ind].completed])
    return (
        <View style={[styles.todoLine, {backgroundColor: props.el.completed ? '#90EE90' : 'white'}]}>
            <TouchableOpacity style={styles.todoLineTouch}>
                <Text style={styles.titleText}>{props.el.text}</Text>
                <Button
                    title='Done'
                    onPress={() => props.touchHandler(props.ind)}
                />
                <View style={styles.emptyView}></View>
                <Button
                    title='Remove'
                    onPress={() => props.deleteHandler(ind)}/>
            </TouchableOpacity>
        </View>
    );
});

export default ToDoLine;