import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';

//"react-native-svg-transformer": "^0.14.3",
import coracao from '../assets/coracao.svg';
import home from '../assets/home.svg';

const Tab = createBottomTabNavigator();

export default function AppRotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route}) => ({
                headerShown: false,
                tabBarIcon: ({ color}) =>{
                    let Icon = home;

                    if(route.name === 'Melhores Produtores'){
                        Icon = coracao;
                    }

                    return <Icon color={color} width={20} height={20}/>
                },
                tabBarActiveTintColor: '#2A9F85',
                tabBarInactiveTintColor: '#C7C7C7',
                tabBarLabelStyle: styles.titulo
                })}>
                <Tab.Screen name='Home' component={ProdutorRotas} />
                <Tab.Screen name='Melhores Produtores' component={MelhoresProdutoresRotas} />
            </Tab.Navigator>
        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    titulo:{
        fontSize: 14
    }
})