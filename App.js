import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "react-native";
import Navigation from './src/navigation/index';
import 'react-native-gesture-handler';

const App = () => {
  return (
    // <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1,backgroundColor:'white' }}>
      {/* <StatusBar backgroundColor={'#000000'}/> */}
        <Navigation />
      </SafeAreaView>
    // </SafeAreaProvider>
  );
}

export default App;