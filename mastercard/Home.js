import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


import SearchButton from './SearchButton';
import Cards from './HomePage/Cards';

function Home() {
  return (   
   <ScrollView >
<View style={styles.container}>
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

<Cards/>

<View style={styles.activity}>
  <View>
  <TouchableOpacity style={{padding: 10, backgroundColor: 'grey', borderRadius: 50, marginBottom: 7, }}> 
<MaterialIcons name='arrow-upward' size={24} color='black'/>
</TouchableOpacity>
<Text>Send</Text>
</View>

<View>
 <TouchableOpacity style={{padding: 10, backgroundColor: 'grey', borderRadius: 50, marginBottom: 7}}>
  <MaterialIcons name='arrow-downward' size={24} color='black'/>
  </TouchableOpacity>
  <Text>Receive</Text>
  </View>

  <View>
  <TouchableOpacity style={{padding: 10, backgroundColor: 'grey', borderRadius: 50, marginBottom: 7}}>
  <MaterialIcons name='attach-money' size={24} color='black'/>
  </TouchableOpacity>
  <Text style={{textAlign: 'center'}}>Loan</Text>
  </View>

  <View>
  <TouchableOpacity style={{padding: 10, backgroundColor: 'grey', borderRadius: 50, marginBottom: 7}}>
  <MaterialIcons name='cloud-upload' size={24} color='black'/>
  </TouchableOpacity>
  <Text>TopUp</Text>
  </View>
  
</View>


<View style={styles.transactions}>
  <View style={styles.transactionheader}>
    <Text style={{fontSize: 24, fontWeight: 500}}>Transactions</Text>
    <Text style={{fontSize: 17, fontWeight: 200}}>See All</Text>
  </View>

  <View style={styles.transactioncontent}>

  <View style={{flexDirection: 'row'}}>
  <View style={{padding: 15, backgroundColor: 'grey', borderRadius:50 }}> 
<MaterialIcons name='apple' size={26} color='black'/>
</View>
<View style={styles.contentRow}>
<View style={styles.content}>
<Text style={{fontSize: 20,}}>Apple Store</Text>
<Text style={{fontSize: 18, fontWeight: 200}}>Entertainment</Text>
</View>
<Text>$19,99</Text>
</View> 
</View> 

<View style={{flexDirection: 'row'}}>
  <View style={{padding: 15, backgroundColor: 'grey', borderRadius:50 }}> 
<MaterialIcons name='apple' size={26} color='black'/>
</View>
<View style={styles.contentRow}>
<View style={styles.content}>
<Text style={{fontSize: 20}}>Apple Store</Text>
<Text style={{fontSize: 18, fontWeight: 200}}>Entertainment</Text>
</View>
<Text>$19,99</Text>
</View> 
</View> 

<View style={{flexDirection: 'row'}}>
  <View style={{padding: 15, backgroundColor: 'grey', borderRadius:50 }}> 
<MaterialIcons name='apple' size={26} color='black'/>
</View>
<View style={styles.contentRow}>
<View style={styles.content}>
<Text style={{fontSize: 20}}>Apple Store</Text>
<Text style={{fontSize: 18, fontWeight: 200}}>Entertainment</Text>
</View>
<Text>$19,99</Text>
</View> 
</View> 

<View style={{flexDirection: 'row'}}>
  <View style={{padding: 15, backgroundColor: 'grey', borderRadius:50 }}> 
<MaterialIcons name='apple' size={26} color='black'/>
</View>
<View style={styles.contentRow}>
<View style={styles.content}>
<Text style={{fontSize: 20}}>Apple Store</Text>
<Text style={{fontSize: 18, fontWeight: 200}}>Entertainment</Text>
</View>
<Text>$19,99</Text>
</View> 
</View> 

<View style={{flexDirection: 'row'}}>
  <View style={{padding: 15, backgroundColor: 'grey', borderRadius:50 }}> 
<MaterialIcons name='apple' size={26} color='black'/>
</View>
<View style={styles.contentRow}>
<View style={styles.content}>
<Text style={{fontSize: 20}}>Apple Store</Text>
<Text style={{fontSize: 18, fontWeight: 200}}>Entertainment</Text>
</View>
<Text>$19,99</Text>
</View> 
</View> 

</View>
</View>

</View>
   </ScrollView>  
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 30,
   
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
  }, 
  activity:{
    flexDirection: 'row',
    columnGap: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
  },

  transactionheader:{  
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 40,
    justifyContent: 'center',
   columnGap: 150,
  
  },
  transactioncontent:{
rowGap: 15,
padding: 10,

  },
  content:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  contentRow:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: 10,
   justifyContent: 'center',
   columnGap: 120,
  }
});

export default Home;