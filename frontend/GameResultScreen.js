import React from 'react';
import { View, Text, Button } from 'react-native';

const GameResultScreen = ({ navigation }) => {
  // Fetch leaderboard data
  const [leaders, setLeaders] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'current_user', // Replace 'current_user' with the actual username
        result: 'correct', // Assuming user's answer was correct for demonstration
      }),
    })
    .then(response => response.json())
    .then(data => {
      setLeaders(data.leaders);
    })
    .catch(error => console.error('Error:', error));
  }, []);

  return (
    <View>
      <Text>{/* Display game result here */}</Text>
      <View>
        <Text>Leaderboard:</Text>
        {leaders.map((leader, index) => (
          <Text key={index}>{index + 1}. {leader}</Text>
        ))}
      </View>
      <Button title="Next" onPress={() => navigation.navigate('MathGame')} />
    </View>
  );
};

export default GameResultScreen;
