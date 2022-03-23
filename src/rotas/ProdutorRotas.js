import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Produtor from '../telas/Produtor';
import Home from '../telas/Home';
import Cesta from '../telas/Cesta';
import { useRoute } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

export default function PordutorRotas({ComponentePrincipal = Home}) {

    const route = useRoute();

    return (
            <Stack.Navigator screenOptions={{headerShown : false}}>
                <Stack.Screen name="HomeScreen" component={ComponentePrincipal} />
                <Stack.Screen name="Produtor" component={Produtor} />
                <Stack.Screen name="Cesta" component={Cesta}/>
            </Stack.Navigator>
    );
}