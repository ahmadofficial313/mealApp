import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import {  useLayoutEffect } from 'react';

function MealOverViewScreen({ route, navigation }) {
  const catID = route.params.categoryId;

  // Filter meals based on category ID
  const displayedMeals = MEALS.filter((itemData) => {
    return itemData.categoryIds.indexOf(catID) >= 0;
  });

  

  
  // useEffect(() => {
  //   const categoryTitle = CATEGORIES.find(
  //   (category) => category.id === catID).title; 

  //   navigation.setOptions({
  //     title: categoryTitle , // Default title if not found
  //   });
  // }, [ catID,navigation]); // Add dependencies

  useLayoutEffect(() => {
    // Find the category title
    const categoryTitle = CATEGORIES.find(
    (category) => category.id === catID).title; 
    // Set navigation options 
    navigation.setOptions({
      title: categoryTitle 
    });
  }, [ catID,navigation]); // Add dependencies

  
  // Function to render each meal item 
  function renderMealItem(itemData) {

    const item=itemData.item;
    const mealItemProps={
      id:item.id,
      title:item.title,
      imageUrl:item.imageUrl,
      affordability:item.affordability,
      complexity:item.complexity,
      duration:item.duration,
    }
    return (
      <MealItem
        {...mealItemProps}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
