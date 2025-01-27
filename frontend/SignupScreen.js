import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleSignup = () => {
    if (!username || !password || !confirmPassword) {
      alert('All fields must be completed');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        navigation.navigate('MathGame');
      }
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <View>
      <Text>Username:</Text>
      <TextInput value={username} onChangeText={setUsername} />
      <Text>Password:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry={true} />
      <Text>Confirm Password:</Text>
      <TextInput value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry={true} />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

export default SignupScreen;
