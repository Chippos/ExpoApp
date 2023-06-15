import { StatusBar } from 'expo-status-bar';
import { Switch, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className='flex-1 items-center justify-center bg-white dark:bg-zinc-900'>
      <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
      <Text className='text-zinc-900 dark:text-white'>
        This is Nativewind
      </Text>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </View>
  );
}
