/* <-- dependencies --> */
import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

/* <-- styles --> */
import styles from 'styles/favorite-list'

const FavoriteList = ({ item, navigation }) => {
  return (
    <View style={styles.faveScreen}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailsScreen', item)}
      >
        <Image source={item.image} style={styles.img} />
      </TouchableOpacity>
      <View style={styles.favNameContainer}>
        <Text style={styles.favName}>{item.name}</Text>
        <View style={styles.favVersionContainer}>
          <Text style={styles.favVersion}>{item.time}</Text>
          <Text style={styles.favVersion}>{item.capacity}</Text>
        </View>
      </View>
    </View>
  )
}

export default FavoriteList
