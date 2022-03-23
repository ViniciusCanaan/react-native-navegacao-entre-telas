import { useRoute } from '@react-navigation/native';
import React from 'react';

import { StyleSheet, FlatList, View, Image, Text } from 'react-native';
import Topo from '../../componentes/Topo';
import useTextos from '../../hooks/useTextos';
import Cesta from './componentes/Cesta';

import topo from '../../assets/produtores/topo.png'

export default function Produtor(){

    //route é usado para buscar parametros de outra tela o .params é os parâmetros que eu tenho pra receber.
    const route = useRoute();
    const {tituloProdutor, tituloCestas} = useTextos();
    const {nome, imagem, cestas} = route.params;
    console.log(route.params);

    const TopoLista = () => {
        return(
            <>
                <Topo titulo={tituloProdutor} imagem={topo} altura={150} />
                <View style={estilos.conteudo}>
                    <View style={estilos.logo}>
                        <Image source={imagem} style={estilos.produtorImage}/>
                        <Text style={estilos.produtor}>{nome}</Text>
                    </View>
                    <Text style={estilos.cestas}>{tituloCestas}</Text>
                </View>
            </>
        );
    }

    //FlatList para retornar a lista de produtos da cesta , item é o nome padrão para buscar os dados e ...item e pra buscar tudo, fazer uma cópia,
    return(
       <FlatList
        ListHeaderComponent={TopoLista}
        data={cestas}
        renderItem={({item})=> <Cesta {...item} produtor={{nome, imagem}}/>}
        style={estilos.lista}
       />
    );
}

const estilos = StyleSheet.create({
    lista: {
        backgroundColor: '#ffffff',
    },
    conteudo: {
        paddingHorizontal: 16,
    },
    logo: {
        flexDirection: 'row',
    },
    produtorImage: {
        width: 62,
        height: 62,

        marginTop: -23,

        borderRadius: 6,
    },
    produtor: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    cestas: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginTop: 32,
    }
});
