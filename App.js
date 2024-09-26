import { StatusBar } from 'expo-status-bar';
import {  StyleSheet} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealOverViewScreen from './screens/MealOverViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
const Stack = createNativeStackNavigator();

export default function App() {
 
  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor:'#351401'},
          headerTintColor:'white',
          contentStyle:{backgroundColor:'#3f2f25'},
           headerBackTitle:'Back'
      }}>
        <Stack.Screen 
        name='MealsCategories'
        options={{
          title:'All Categories'
        }}
         
          component={CategoriesScreen}
          />
        <Stack.Screen name='MealsOverview'
         component={MealOverViewScreen}
        //  options={({route , navigation})=>{
        //   const catID= route.params.categoryId
        //   return{
        //     title:catID,
        //   }
        //  }}
         />
         <Stack.Screen name='MealDetailScreen'
         component={MealDetailScreen}
        //  options={({route , navigation})=>{
        //   const catID= route.params.categoryId
        //   return{
        //     title:catID,
        //   }
        //  }}
         />
      </Stack.Navigator>
   
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:16
    
  },
});
