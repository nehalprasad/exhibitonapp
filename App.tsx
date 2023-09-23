import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/Screens/Login';
import UserDashboard from './src/Screens/UserDashboard';
import Events from './src/Screens/HomeScreen/Screens/Events';
import Iteams from './src/Screens/HomeScreen/Screens/Iteams';
import Payment from './src/Screens/HomeScreen/Screens/Payment';
import Invoice from './src/Screens/HomeScreen/Screens/Invoice';

import Navigator from './src/Components/Navigator';
const App = () => {
  return (
    <>
      {/* <NavigationContainer> 
      
       <Navigator />
      </NavigationContainer>    */}
    {/* <Employees /> */}
    <Login  /> 
      {/* <UserDashboard />     */}
     {/* <Events  />   */}
      {/* <Iteams />  */}
      {/* <Payment />  */}
     {/* <Invoice />  */}
     {/* <Login /> */}
    </>
     )
}
export default App;
 



// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//      <Stack.Navigator>
//           <Stack.Screen name="Exhibition" component={} />
//           <Stack.Screen name="Events" component={ScreenB} />
//         </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;