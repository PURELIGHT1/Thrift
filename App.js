import { StyleSheet, View } from 'react-native';
import Router from './src/services/router';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});