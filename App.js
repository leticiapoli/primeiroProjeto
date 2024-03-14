import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>poliana</Text>
      <Text>14/03</Text>
  <Button title='salvar'></Button>
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
