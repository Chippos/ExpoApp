import { StatusBar } from 'expo-status-bar';
import { Switch, View, Text } from 'react-native';
import { useColorScheme } from 'nativewind';

const Darkmode = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <>
      <StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} />
      <View className='fixed bottom-0 flex-row items-center justify-between px-4 bg-white dark:bg-black'>
        <Text className='text-zinc-900 dark:text-white'>Dark Mode</Text>
        <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
      </View>
    </>
  );
};

export default Darkmode;
