import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const Video = () => {
  return (
    <View className='container px-4 flex-1 bg-slate-50 dark:bg-black'>
      <View className='flex-1 gap-y-4 items-center justify-center'>
        <TextInput
          className='rounded-lg w-full py-3 px-3 bg-zinc-200 dark:bg-zinc-400 focus:bg-zinc-100 border border-transparent focus:border-zinc-900 text-gray-700 leading-tight'
          placeholder='Username'
        />
        <TextInput
          className='rounded-lg w-full py-3 px-3 bg-zinc-200 dark:bg-zinc-400 focus:bg-zinc-100 border border-transparent focus:border-zinc-900 text-gray-700 leading-tight'
          placeholder='Password'
        />
        <TouchableOpacity className='bg-zinc-900 dark:bg-zinc-100 h-12 w-full rounded-lg flex justify-center items-center'>
          <Text className='text-white dark:text-zinc-900 font-semibold capitalize'>
            login
          </Text>
        </TouchableOpacity>
        <Text className='text-zinc-900 dark:text-zinc-100'>
          Please login to continue
        </Text>
      </View>
    </View>
  );
};

export default Video;
