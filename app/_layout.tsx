import {Stack, Tabs} from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <Tabs>
        <Tabs.Screen name="home" options={{
            tabBarLabel: 'Home',
            tabBarIcon: red => <AntDesign name="home" size={24} color="#000" />
        }}/>
        <Tabs.Screen name="report"  options={{
            tabBarLabel: 'Report',
            tabBarIcon: red => <AntDesign name="book" size={24} color="#000"/>
        }}/>
        <Tabs.Screen name="transaction"  options={{
            tabBarLabel: 'Transaction',
            tabBarIcon: red => <MaterialCommunityIcons name="bank-transfer" size={30} color="black" />
        }}/>
    </Tabs>
  );
}
