import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Calculator from './src/Calculator';

export default function App() {
  const [input, setInput] = useState(0); // 입력창
  const [currentOperator, setCurrentOperator] = useState(null); // 연산자 볼드처리
  const [result, setResult] = useState(null); // 결과창
  const [tempInput, setTempInput] = useState(null); // 연산에 사용될 값
  const [tempOperator, setTempOperator] = useState(null); // 연산에 사용될 연산자

  return (
    // SafeArea
    <SafeAreaView style={styles.container}>
      <Calculator></Calculator>
      <StatusBar style="auto" />
    </SafeAreaView>
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
