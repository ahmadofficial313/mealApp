import {View, Text, StyleSheet} from 'react-native'
import { MEALS } from "../data/dummy-data";

function MealOverViewScreen() {
  return (
    <View style={styles.container}>
        <Text>Meal OverView Screen</Text>
    </View>
  )
}

export default MealOverViewScreen
const styles= StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})