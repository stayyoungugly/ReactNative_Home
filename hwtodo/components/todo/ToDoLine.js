import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect} from "react";
import {observer} from "mobx-react";
import {useMainStore} from "../../hooks/useMainStore";

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
                    onPress={() => props.deleteHandler(props.ind)}/>
            </TouchableOpacity>
        </View>
    );
});

const styles = StyleSheet.create({
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
        width: 10
    }
    ,
});

export default ToDoLine;