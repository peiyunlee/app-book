import TabNavigator from './TabNavigator'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStackNavigator from './HomeStackNavigator';
import DetailStackNavigator from './DetailStackNavigator';

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeStack" component={HomeStackNavigator} />
      <Drawer.Screen name="DetailStack" component={DetailStackNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;