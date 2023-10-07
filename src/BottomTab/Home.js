import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text onPress={()=>navigation.navigate('Details')}>Go to Details Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  