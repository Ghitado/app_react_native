import React, { useEffect, useState } from "react";
import { Button, View, StyleSheet } from "react-native";
import ListaProdutos from "./Componentes/Adaptadores/ListaProdutos"
import <CadastroProduto></CadastroProduto> from "./Componentes/Adaptadores/CadastroProduto"
import axios from 'axios';

const produtos = [
  {id: 1, nome: "Coca-cola", preco: 5.5},
  {id: 2, nome: "Pepsi", preco: 5.5},
  {id: 3, nome: "Fanta", preco: 5.5},
  {id: 4, nome: "Guaraná", preco: 5.5}
]

export default function Index() {
  let [contador, setContador] = useState(0);
  let [produtos, setProdutos] = useState([]);
  useEffect(() => { carregarProdutos()}, []);

  function carregarProdutos() {
    axios.get('https://app-api-tapwm.onrender.com/api/produtos')
      .then((resp)=>{
        setProdutos(resp.data)
      })
  }

  return (
    <View
      style={estilo.container}
    >
      <ListaProdutos produtos={produtos}></ListaProdutos>
      <Button 
        title={contador.toString()} 
        onPress={()=>setContador(contador += 1)}
        color={'#3399ff'}
      ></Button>
      <CadastroProduto/>
    </View>
  );
}

  const estilo = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: "#d9e8ed",
      padding: 20,
    },
    titulo:{
      color:"#000000",
      fontFamily: 'helvetica',
      fontSize: 30,
      fontWeight: "bold",  
      textAlign: "left",
    }
  })
