import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button} from 'react-native';
import Title from '/scr/componentes/poliana';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>poliana</Text>
      <Text>14/03</Text>
  <Button title='salvar'></Button>
  <Button title='novo botão'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
