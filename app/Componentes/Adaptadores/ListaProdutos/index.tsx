import { View, ScrollView } from "react-native"
import ItemProduto from "../ItemProduto"
import Produto from "@/app/Models/Produto"
import Style from "@/app/Styles/Default"

interface PropListaProd {
    produtos: Produto[]
}

const ListaProdutos:React.FC<PropListaProd> = 
        ({produtos}: {produtos: Produto[]}) => {
    return (
        <ScrollView>
        <View style={Style.container}>
            {produtos.map((p) => 
                <ItemProduto produto={p} key={p.id}>
                    
                </ItemProduto>)}
        </View>
        </ScrollView>
    )
}

export default ListaProdutos;
