import { Text, View, StyleSheet,Image } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetail from '../components/MealDetail';
import Subtitle from '../components/mealdetail/Subtitle';

function MealDetailScreen({ route }) {
    const id = route.params.mealID;

    const mealDetail = MEALS.find((item) => item.id === id);


   

    return (
        <View>
           <Image style={styles.image} source={{ uri: mealDetail.imageUrl }}/>
            <Text style={styles.title}>{mealDetail.title}</Text>
            <MealDetail duration={mealDetail.duration}
            complexity={mealDetail.complexity}
            textStyle={styles.detailStlye}
            affordability={mealDetail.affordability}
            />
           <Subtitle>Ingredients</Subtitle>

            {mealDetail.ingredients.map((ingredient)=>
              <Text key={ingredient}>{ingredient}</Text>
            )}
          <Subtitle>steps </Subtitle>
            {mealDetail.steps.map((ingredient)=>
              <Text key={ingredient}>{ingredient}</Text>
            )}
        </View>
    );
}

export default MealDetailScreen;
const styles=StyleSheet.create({
    image:{
        width:'100%',
        height:300
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        margin:8,
        textAlign:'center',
        color:'white'
    },
    detailStlye:{
        color:'white'
    },
    subtitle:{
    
        color:'#e2b497',
        fontWeight:'bold',
        fontSize:18,
      
        textAlign:'center',
       
        

    },
    subtitleContainer:{
        borderBottomColor:'#e2b497',
        borderBottomWidth:1,  
        padding:6,
        marginVertical:4,
        marginHorizontal:16
    }
})
