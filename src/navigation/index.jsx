import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feeds from '../screens/Feeds';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Feeds' component={Feeds} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
