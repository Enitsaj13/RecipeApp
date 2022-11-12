/* <-- dependencies --> */
import { useContext } from 'react'
import { SafeAreaView, View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'
import { FONTS, SIZES, COLORS } from 'theme'

/* <-- components --> */
import { SecondaryButton } from 'components/LandingButton'
import { BackButton } from 'components/BackButton'
import { ToastMessage } from 'components/Toast'

/* <-- styles --> */
import styles from 'styles/details'

const DetailsScreen = ({ navigation, route }) => {
  const item = route.params
  /* <-- theme state--> */
  const THEME = useContext(ThemeContext)

  return (
    <SafeAreaView style={{ backgroundColor: `${THEME.background}` }}>
      <View style={[styles.header, { backgroundColor: THEME.background }]}>
        {/* <-- invoking the back button component -->  */}
        <BackButton navigation={navigation} />

        <Text
          style={{
            fontSize: SIZES.medium,
            fontFamily: FONTS.bold,
            color: `${THEME.text}`,
          }}
        >
          {item.name}
        </Text>
        <ToastMessage />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[styles.imageContainer, { backgroundColor: THEME.background }]}
        >
          <Image source={item.image} style={styles.img} />
        </View>

        {/* description */}
        <View
          style={{
            padding: SIZES.padding,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.medium,
              fontFamily: FONTS.bold,
              color: COLORS.dark,
              marginBottom: 20,
            }}
          >
            Description
          </Text>
          <Text
            style={{
              fontSize: SIZES.name,
              fontFamily: FONTS.light,
              letterSpacing: 1,
              textAlign: 'justify',
              lineHeight: 22,
              color: `${THEME.text}`,
            }}
          >
            {item.description}
          </Text>
        </View>

        <View style={[styles.details, { backgroundColor: THEME.background }]}>
          <Text style={[styles.itemIngredients, { color: THEME.text }]}>
            Ingredients:
          </Text>

          <Text style={[styles.detailsText, { color: THEME.text }]}>
            {item.ingredients}
          </Text>

          {/* <Text style={styles.itemInstructions}>Instructions: </Text>

          <Text style={styles.detailsText}>{item.instructions}</Text> */}
          <View style={{ marginTop: 20, marginBottom: 20 }}>
            <View style={styles.iconPlayContainer}>
              <Icon name='ios-play-outline' size={30} color={COLORS.white} />
            </View>
            <SecondaryButton
              title='Watch Video'
              onPress={() => navigation.navigate('CookingScreen', item)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DetailsScreen
