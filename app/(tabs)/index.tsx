import { SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router';

const index = () => {

  const [data , setData] = useState(null);

  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(err => console.log(err))


  return (

<>

    <View>
      <Text>users</Text>
    </View>

<SafeAreaView style={styles.container}>
<FlatList
  data={data}
  renderItem={({item}) => <View style={styles.item}>
    <Text style={styles.title}>{item.name}</Text>
    <TouchableOpacity style={styles.button} >
    <Link
        href={{
          pathname: '/[id]',
          params: { id: item.id},
        }}>
        View user details
      </Link>
        
      </TouchableOpacity>
  </View>}
  keyExtractor={item => item.id}
/>
</SafeAreaView>
</>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
    textAlign:'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default index