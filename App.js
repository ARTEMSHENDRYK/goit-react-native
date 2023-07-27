// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import PostsScreen from './Screens/PostsScreen';


export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto': require('./Fonts/Roboto/Roboto-Regular.ttf'),
  });

  return (
    <>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
      {/* <PostsScreen /> */}
    </>
  );
}