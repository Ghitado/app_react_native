import { View, Text } from "react-native"

function ItemProduto({produto}: {nome: string, preco: number}) {
    return (
        <View>
            <Text>{produto.nome}</Text>
            <Text>{produto.preco}</Text>
        </View>
    )
}

export default ItemProduto