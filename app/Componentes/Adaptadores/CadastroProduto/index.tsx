import Produto from "@/app/Models/Produto";
import Style from "@/app/Styles/Default";
import axios from "axios";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const CadastroProduto = () => {
  let [nome, setNome] = useState("");
  let [descricao, setDescricao] = useState("");
  let [preco, setPreco] = useState(0);
  let [foto, setFoto] = useState("");

  return (
    <View style={Style.container}>
      <Text>Nome:</Text>
      <TextInput onChangeText={setNome} value={nome} style={Style.input} />

      <Text>Descricao:</Text>
      <TextInput onChangeText={setDescricao} value={descricao} style={Style.input}  />

      <Text>Foto:</Text>
      <TextInput onChangeText={setFoto} value={foto} style={Style.input}  />

      <Text>Preço:</Text>
      <TextInput
        onChangeText={(v) => {
          setPreco(isNaN(parseFloat(v)) ? 0 : parseFloat(v));
        }}
        inputMode="numeric"
        value={preco.toString()}
        style={Style.input} 
      />

      <Button title="Cadastrar" onPress={Cadastrar} />
    </View>
  );

  function Cadastrar() {
    let produto: Produto = {
      nome: nome,
      descricao: descricao,
      preco: preco,
      foto: foto,
    } as Produto;
    let api = "https://api-docker-2t8m.onrender.com/api/produtos";
    axios.post(api, produto).then((resp) => {
      setNome("");
    });
  }
};

export default CadastroProduto;
