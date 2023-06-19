import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feeds from '../screens/Feeds';
import Video from '../screens/Video';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Feeds' component={Feeds} />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name='Video'
          component={Video}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
