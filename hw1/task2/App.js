import React, {useState} from "react";
import RNPickerSelect from 'react-native-picker-select';
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
    let [align, setAlign] = useState('center');
    let [borderRadius, setBorderRadius] = useState(0);
    let [separatorHeight, setSeparatorHeight] = useState(1);
    const addBox = (size, color, align, borderRadius, separatorHeight) => {
        setBoxes([...boxes, {
            width: size,
            height: size,
            color: color,
            align: align,
            borderRadius: borderRadius,
            separatorHeight: separatorHeight
        }
        ]);
    };
    const clearBoxes = () => {
        setBoxes([]);
    }

    const handleSeparatorHeightChange = (height) => {
        setSeparatorHeight(parseInt(height));
    };

    const handleAlignChange = (alignment) => {
        setAlign(alignment);
    };

    const handleBorderRadiusChange = (radius) => {
        setBorderRadius(radius);
    };

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
        addBox(size, color, align, borderRadius, separatorHeight)
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
                <Text style={styles.text}>Выравнивание</Text>
                <View style={{marginStart: 24, width: 100}}>
                    <RNPickerSelect
                        onValueChange={(value) => handleAlignChange(value)}
                        items={[
                            {label: 'Центр', value: 'center'},
                            {label: 'Слева', value: 'flex-start'},
                            {label: 'Справа', value: 'flex-end'},
                        ]}
                    />
                </View>
            </View>

            <View style={styles.params}>
                <Text style={styles.text}>Радиус</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(radius) => handleBorderRadiusChange(parseInt(radius))}
                    keyboardType='numeric'
                />
            </View>

            <View style={styles.params}>
                <Text style={styles.text}>Высота разделителя</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(height) => handleSeparatorHeightChange(parseInt(height))}
                    keyboardType='numeric'
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
    const boxes = props.boxes.map(box =>
        <View key={Date.now() * Math.random()}>
            <Box
                width={box.width}
                height={box.height}
                color={box.color}
                borderRadius={box.borderRadius}
                align={box.align}
            />
            <View style={{height: box.separatorHeight, backgroundColor: 'transparent'}}/>
        </View>
    );

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
        backgroundColor: props.color,
        borderRadius: props.borderRadius,
        alignSelf: props.align,
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
        height: 200,
        marginTop: 32,
        marginBottom: 8,
        paddingHorizontal: 24
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
        gap: 20,
        marginTop: 24
    },
    content: {
        alignItems: 'center',
    }
    ,
});
