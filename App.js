import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react/cjs/react.production.min';

export default function App() {
  const [input, setInput] = useState(0); // 입력창
  const [currentOperator, setCurrentOperator] = useState(null); // 연산자 볼드처리
  const [result, setResult] = useState(null); // 결과창
  const [tempInput, setTempInput] = useState(null); // 연산에 사용될 값
  const [tempOperator, setTempOperator] = useState(null); // 연산에 사용될 연산자

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
