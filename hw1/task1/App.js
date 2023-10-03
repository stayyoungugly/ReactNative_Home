import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <InputViews/>
        </View>
    );
};

function InputViews() {
    const [name, setName] = useState('');
    const [displayName, setDisplayName] = useState('?');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        if (username === 'big_durinda' && password === 'qwerty007') {
            setIsLoggedIn(true);
            setError('');
            setUsername('');
            setPassword('')
        } else {
            setError('Invalid data! Try again');
        }
    };

    const handleNameChange = (text) => {
        setName(text);
    };

    const handleUsernameChange = (text) => {
        setUsername(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleShowName = () => {
        setDisplayName(name);
    };

    return (
        <View>
            <View style={styles.content}>
                <Text>Name: {displayName}</Text>

                <TextInput
                    style={[styles.input, {marginTop: 24}]}
                    placeholder="Enter name"
                    onChangeText={handleNameChange}
                    value={name}
                />

                <TouchableOpacity style={[styles.buttonFirst, {marginTop: 24}]}
                                  onPress={handleShowName}>
                    <Text style={styles.appButtonText}>Press</Text>
                </TouchableOpacity>

            </View>

            <View style={[styles.content, {marginTop: 120}]}>

                {error ? <Text style={{color: 'red'}}>{error}</Text> :
                    <Text>{isLoggedIn ? 'Welcome!' : 'Hello! Enter FORM'}</Text>}

                {!isLoggedIn ? <View style={styles.content}>
                    <TextInput
                        style={[styles.input, {marginTop: 24}]}
                        placeholder="Enter username"
                        onChangeText={handleUsernameChange}
                        value={username}
                    />
                    <TextInput
                        style={[styles.input, {marginTop: 24}]}
                        placeholder="Enter password"
                        onChangeText={handlePasswordChange}
                        value={password}
                        secureTextEntry={true}
                    />

                    <TouchableOpacity style={[styles.buttonSecond, {marginTop: 24}]}
                                      onPress={handleLogin}>
                        <Text style={styles.appButtonText}>Login</Text>
                    </TouchableOpacity>
                </View> : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 8,
        width:
            250,
        height:
            40,
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
    content: {
        alignItems: 'center',
    }
    ,
})