/* <-- dependencies --> */
import { useContext } from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'

/* <-- styles --> */
import styles from 'styles/favorite'

const FavoriteItem = ({ item, navigation }) => {
  /* <-- theme state --> */
  const THEME = useContext(ThemeContext)

  return (
    <View style={[styles.faveScreen, { backgroundColor: `${THEME.card}` }]}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailsScreen', item)}
      >
        <Image source={item.image} style={styles.img} />
      </TouchableOpacity>
      <View style={styles.favNameContainer}>
        <Text style={[styles.favName, { color: `${THEME.text}` }]}>
          {item.name}
        </Text>
        <Text style={styles.favVersion}>{item.time}</Text>
        <Text style={styles.favVersion}>{item.capacity}</Text>
      </View>
    </View>
  )
}

export default FavoriteItem
