/* <-- dependencies --> */
import Icon from 'react-native-vector-icons/Ionicons'
import { SafeAreaView, View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

/* <-- constants --> */
import { COLORS, SIZES, FONTS } from 'constants'

/* <-- components --> */
import { SecondaryButton } from 'components/LandingButton'
import { BackButton } from 'components/BackButton'
import { ToastMessage } from 'components/Toast'

/* <-- styles --> */
import styles from 'styles/details'

const DetailsScreen = ({ navigation, route }) => {
  const item = route.params

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        {/* <-- invoking the back button component -->  */}
        <BackButton navigation={navigation} />

        <Text
          style={{
            fontSize: SIZES.medium,
            fontFamily: FONTS.bold,
          }}
        >
          {item.name}
        </Text>
        <ToastMessage />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
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
            }}
          >
            {item.description}
          </Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.itemIngredients}>Ingredients: </Text>

          <Text style={styles.detailsText}>{item.ingredients}</Text>

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
