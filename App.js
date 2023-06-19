import Darkmode from './src/components/organisms/Darkmode';
import { View } from 'react-native';
import Navigation from './src/navigation';

export default function App() {
  return (
    <>
      <Navigation />
      <Darkmode />
    </>
  );
}
