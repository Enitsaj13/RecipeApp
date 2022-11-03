/* <-- dependencies --> */
import React from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'

/* <-- constants --> */
import { COLORS } from 'constants'

/* <-- styles --> */
import styles from 'styles/favorite'

const FavoriteItem = ({ item, navigation }) => {
  return (
    <TouchableHighlight
      underlayColor={COLORS.white}
      activeOpacity={0.9}
      onPress={() => navigation.navigate('DetailsScreen', item)}
    >
      <View style={styles.faveScreen}>
        <Image source={item.image} style={styles.img} />
        <View style={styles.favNameContainer}>
          <Text style={styles.favName}>{item.name}</Text>
          <Text style={styles.favVersion}>{item.time}</Text>
          <Text style={styles.favVersion}>{item.capacity}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default FavoriteItem
