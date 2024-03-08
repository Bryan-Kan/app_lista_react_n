import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { List } from 'react-native-paper';

var listaProdutos=[
  {"nome":"Ifone", "preco": 7999.99, "descricao": "Celular Maçã"},
  {"nome":"SangSuga", "preco": 6999.99, "descricao": "S49"},
  {"nome":"Xingling", "preco": 1999.99, "descricao": "Mi Xing"},
  {"nome":"Motorola", "preco": 6999.99, "descricao": "Tijolo"},
  {"nome":"LJ", "preco": 7999.99, "descricao": "Casas Bahia"},
  {"nome":"Iphone x", "preco": 17999.99, "descricao": "Celular Maçã"},
  {"nome":"Iphone EX PLUS", "preco": 17999.99, "descricao": "Celular Maçã"},
  
]

export default function App() {
  return (
    <View style={styles.container}>

      <List.Section>
        <List.Subheader>Produtos</List.Subheader>

          {listaProdutos.map((produto)=>{
            return (
              <List.Item title={produto.nome} left={() => <List.Icon icon="cellphone" />} right={()=> <Text>{produto.preco}</Text>} />
            )

          })}

      </List.Section>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
