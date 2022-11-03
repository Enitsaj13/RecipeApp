/* <-- dependencies--> */
import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

/* <-- styles --> */
import styles from 'styles/landing-button'

const PrimaryButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.primaryBtnContainer}>
        <Text style={styles.primaryTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}
const SecondaryButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.secondayBtnContainer}>
        <Text style={styles.secondayTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export { PrimaryButton, SecondaryButton }
