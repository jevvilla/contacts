import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ContactList} from './screens/ContactList/ContactList';
import {ContactDetail} from './screens/ContactDetail/ContactDetail';
import {RootStackParamList} from './shared/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactList">
        <Stack.Screen
          name="ContactList"
          component={ContactList}
          options={{title: 'Contacts'}}
        />
        <Stack.Screen name="ContactDetail" component={ContactDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
