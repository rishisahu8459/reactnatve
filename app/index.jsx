import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{color:'blue'}}>go to profile</Link>
    </View>
  );
}

