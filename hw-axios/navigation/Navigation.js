import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {TodoApiScreen} from "../screens/todo/TodoApiScreen";


const Stack = createNativeStackNavigator();
export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'TodoApiScreen'} component={TodoApiScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}