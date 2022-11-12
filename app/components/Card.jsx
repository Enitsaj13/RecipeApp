/* <-- dependencies --> */
import Icon from 'react-native-vector-icons/Ionicons'
import { useContext } from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'
import { COLORS, FONTS, SIZES } from 'theme'

/* <-- styles --> */
import styles from 'styles/menu'

const Card = ({ food, navigation }) => {
  /* <-- theme state --> */
  const THEME = useContext(ThemeContext)
  return (
    <View style={[styles.card, { backgroundColor: THEME.card }]}>
      <View style={{ alignItems: 'center', top: -40 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('DetailsScreen', food)}
        >
          <Image source={food.image} style={{ height: 120, width: 120 }} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: -20,
          marginLeft: 10,
          flex: 1,
          paddingBottom: 10,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.medium,
            fontFamily: FONTS.light,
            color: `${THEME.text}`,
          }}
        >
          {food.name}
        </Text>
        <View
          style={{
            marginTop: 15,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.font,
              color: COLORS.grey,
              fontFamily: FONTS.regular,
            }}
          >
            {food.time}
          </Text>
          <Text
            style={{
              fontSize: SIZES.font,
              color: COLORS.grey,
              fontFamily: FONTS.regular,
            }}
          >
            {food.capacity}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Card
