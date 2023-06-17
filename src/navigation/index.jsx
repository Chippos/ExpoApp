import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feeds from '../screens/Feeds';
import Video from '../screens/Video';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Feeds' component={Feeds} />
        <Stack.Screen name='Video' component={Video} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
