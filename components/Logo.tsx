import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'

interface LoginProps {
  scale: Animated.Adaptable<number>
}

const Logo = ({ scale }: LoginProps) => {
  
  return (
    <Animated.View style={{...styles.logo, transform:[{scale:scale}]}}>
    <Text style={{fontWeight:'400', fontSize:36}}> Uber </Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  logo: {
    backgroundColor: 'white',
    height: 120,
    width: 120,
    padding: 10,
    alignItems: 'center',
    justifyContent:'center'
    
  }
})

export default Logo