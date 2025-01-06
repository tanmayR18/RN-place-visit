import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AllPlace from './screens/AllPlace';
import AddPlace from './screens/AddPlace';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
        <StatusBar style='dark' />
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='AllPlaces' component={AllPlace}/>
                <Stack.Screen name='AddPlaces' component={AddPlace}/>
            </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
 
});
