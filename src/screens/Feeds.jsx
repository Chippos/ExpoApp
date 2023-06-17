import { Button, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';
import { StyleSheet } from 'react-native';

const Feeds = ({ navigation }) => {
  const { colorScheme } = useColorScheme();
  return (
    <>
      <View className='flex-1 items-center justify-center bg-slate-50 dark:bg-black'>
        <Text className='text-zinc-900 dark:text-white'>Feeds</Text>
        <Button
          title='Video'
          onPress={() => navigation.navigate('Video')}
          color={styles[colorScheme]}></Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  dark: 'darkgreen',
  light: '#404040',
});

export default Feeds;
