// In App.js in a new project

import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{alignItems:'center',height:'100%',width:'100%'}}>
      <Button
      title="Go to Next Screen"
      onPress={() =>
        navigation.navigate('next Screen routeName', { name: 'Next Screen title' })
      }
    />
    </View>
  );
};
const ProfileScreen = () => {
  return <Text>This is Next Screen</Text>;
};
const Stack = createStackNavigator();

const App=()=> {
  return (
    // <View style={{alignItems:'center',height:'100%',width:'100%'}}>
    //   <Text>hjdbchjdbcjs</Text>
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'home header title' }}
        />
        <Stack.Screen name="next Screen routeName" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;