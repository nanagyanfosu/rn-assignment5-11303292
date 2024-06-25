import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView } from 'react-native';
import SearchButton from './SearchButton';

export default function App() {
  return (
    <SafeAreaView>
   <ScrollView>
<View style={styles.header}>
<View style={{padding: 0}}>
<Image source={require('./assets/duo.jpg')} style={{ width: 40, height: 40, borderRadius: 100, margin: 10 }}></Image>
</View>
<View style={styles.welcome}>
<Text style={{fontSize: 21, fontWeight: 200}}>Welcome back, </Text>
<Text style={{fontSize: 22, fontWeight: 500}}>Nana Gyanfosu</Text>
</View>


<SearchButton/>

</View>
   </ScrollView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header:{
    padding: 10,
    flexDirection: 'row',
    gap: 2,   
  },
  
  welcome:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
