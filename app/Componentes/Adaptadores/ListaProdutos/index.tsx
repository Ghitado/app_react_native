import { View } from "react-native"
import ItemProduto from "../ItemProduto"

function ListaProdutos({produtos}:{produtos:[]}) {
    return (
        <View>
            {produtos.map((p) => 
                <ItemProduto produto={p}>
                    
                </ItemProduto>)}
        </View>
    )
}

export default ListaProdutos
