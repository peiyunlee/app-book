import TabNavigator from './TabNavigator'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStackNavigator from './HomeStackNavigator';
import DetailStackNavigator from './DetailStackNavigator';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Detail" component={DetailScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;