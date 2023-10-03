import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Pressable, ScrollView} from 'react-native';

export default function App() {
    return (
            <BoxViews/>
    );
}

function BoxViews() {
    let [boxes, setBoxes] = useState([]);
    let [size, setSize] = useState(0);
    let [color, setColor] = useState('');
    const addBox = (size, color) => {
        setBoxes([...boxes, {
            width: size,
            height: size,
            color: color
        }
        ]);
    };
    const clearBoxes = () => {
        setBoxes([]);
    }

    const handleRed = () => {
        setColor('red')
    }

    const handleBlue = () => {
        setColor('blue')
    }

    const handleGreen = () => {
        setColor('green')
    }

    const handleButton = () => {
        addBox(size, color)
    }

    return (
        <View styles={styles.container}>

            <Container boxes={boxes}/>

            <View style={styles.params}>
                <Text style={styles.text}>Размер</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={size => setSize(parseInt(size))}
                    keyboardType='numeric'
                />
            </View>

            <View style={[styles.params, {marginTop: 24}]}>

                <Text style={styles.text}>Цвет</Text>

                <Pressable
                    style={styles.redPressable}
                    onPress={handleRed}
                />
                <Pressable
                    style={styles.bluePressable}
                    onPress={handleBlue}
                />
                <Pressable
                    style={styles.greenPressable}
                    onPress={handleGreen}
                />
            </View>

            <View style={styles.params}>

                <TouchableOpacity style={[styles.buttonFirst, {marginTop: 24}]}
                                  onPress={handleButton}>
                    <Text style={styles.appButtonText}>Добавить</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonFirst, {marginTop: 24}]}
                                  onPress={clearBoxes}>
                    <Text style={styles.appButtonText}>Очистить</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

function Container(props) {
    const boxes = props.boxes.map(box => <Box
        key={Date.now() * Math.random()}
        width={box.width}
        height={box.height}
        color={box.color}
        borderColor={box.borderColor}
    />);

    return (
        <ScrollView style={styles.scroll}>
            {boxes}
        </ScrollView>
    )
}

export const Box = (props) => (
    <View style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.color
    }}/>
);

const styles = StyleSheet.create({
    input: {
        padding: 8,
        width:
            100,
        height:
            40,
        backgroundColor:
            '#f5f5f5'
    }
    ,
    text: {
        fontWeight: '200',
        color: 'black',
        fontSize: 16
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
    scroll: {
        width: 400,
        height: 400,
        paddingVertical: 60,
        paddingHorizontal: 150,
        marginBottom: 24
    },
    container: {
        flex: 1,
        justifyContent:
            'center',
        alignItems:
            'center'
    }
    ,
    appButtonText: {
        color: 'white',
        fontSize:
            16,
    }
    ,
    redPressable: {
        backgroundColor: 'red',
        width: 40,
        height: 40,
        borderRadius: 3
    },
    bluePressable: {
        backgroundColor: 'blue',
        width: 40,
        height: 40,
        borderRadius: 3
    },
    greenPressable: {
        backgroundColor: 'green',
        width: 40,
        height: 40,
        borderRadius: 3
    },
    params: {
        flexDirection: 'row',
        alignItems: 'center',
        marginStart: 24,
        gap: 20
    },
    content: {
        alignItems: 'center',
    }
    ,
});
