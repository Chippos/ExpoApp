import { StatusBar } from 'expo-status-bar';
import { Switch, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';
import Navigation from './src/navigation';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Navigation />
      <View className='absolute w-full bottom-1 flex-row items-center gap-4 justify-center bg-white dark:bg-black'>
        <Text>Dark Mode</Text>
        <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
      </View>
    </>
  );
}
