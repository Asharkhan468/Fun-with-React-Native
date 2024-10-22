import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { View, Text, StyleSheet , SafeAreaView , FlatList } from 'react-native';

export default function DetailsScreen() {
  
  const [user , setUser] = useState< any | null>([]);
  const { id } = useLocalSearchParams();

  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(json => {
        setUser(json)
       
        
      })
      .catch(err => console.log(err))

     
      

    
      


  return (
   
  <View style={{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }}>
    <Text style={{
      fontSize:20,
      fontWeight:'bold'
    }}>Username:{user.name}</Text>
    <Text style={{
      fontSize:20,
      fontWeight:'bold'
    }}>Email Address:{user.email}</Text>
    <Text style={{
      fontSize:20,
      fontWeight:'bold'
    }}>Website:{user.website}</Text>
  </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
