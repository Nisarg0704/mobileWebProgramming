import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const MathGameScreen = ({ navigation }) => {
  const [num1, setNum1] = React.useState(Math.floor(Math.random() * 100) + 1);
  const [num2, setNum2] = React.useState(Math.floor(Math.random() * 100) + 1);
  const [userAnswer, setUserAnswer] = React.useState('');
  const [gameResult, setGameResult] = React.useState('');

  const checkAnswer = () => {
    const sum = num1 + num2;
    if (parseInt(userAnswer) === sum) {
      setGameResult('Correct!');
    } else {
      setGameResult('Incorrect!');
    }
    fetch('http://localhost:3000/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'current_user', // Replace 'current_user' with the actual username
        result: parseInt(userAnswer) === sum ? 'correct' : 'incorrect',
      }),
    })
    .then(response => response.json())
    .then(data => {
      // Handle response if needed
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <View>
      <Text>{num1} + {num2} = ?</Text>
      <TextInput value={userAnswer} onChangeText={setUserAnswer} keyboardType="numeric" />
      <Button title="Answer" onPress={checkAnswer} />
    </View>
  );
};

export default MathGameScreen;
