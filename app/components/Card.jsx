/* <-- dependencies --> */
import Icon from 'react-native-vector-icons/Ionicons'
import { Image, Text, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

/* <-- styles --> */
import styles from 'styles/menu'

/* <-- constants --> */
import { COLORS, FONTS, SIZES } from 'constants'

const Card = ({ food, navigation }) => {
  return (
    <View style={styles.card}>
      <View style={{ alignItems: 'center', top: -40 }}>
        <TouchableHighlight
          underlayColor={COLORS.white}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('DetailsScreen', food)}
        >
          <Image source={food.image} style={{ height: 120, width: 120 }} />
        </TouchableHighlight>
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
