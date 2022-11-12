/* <-- dependencies --> */
import { useContext } from 'react'
import { Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

/* <-- components --> */
import { PrimaryButton } from 'components/LandingButton'

/* <-- theme--> */
import ThemeContext from 'theme/ThemeContext'

/* <-- styles --> */
import styles from 'styles/landing'

const LandingScreen = ({ navigation }) => {
  /* <-- theme state --> */
  const THEME = useContext(ThemeContext)

  const Press = () => {
    navigation.navigate('BottomNavigator')
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: THEME.background }}>
      <View style={{ height: 400 }}>
        <Image
          style={styles.landingImage}
          source={require('assets/images/landing/ingredients.png')}
        />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text style={[styles.landingTitle, { color: THEME.text }]}>
            Pinoy's Recados
          </Text>
          <Text style={[styles.landingSubtitle, { color: THEME.text }]}>
            We provide the best food recipe for you
          </Text>
        </View>
        <View style={styles.indicatorContainer}>
          <View s={styles.indicator} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
          <View style={styles.currentIndicator} />
        </View>
        <PrimaryButton onPress={Press} title='Get Started' />
      </View>
    </SafeAreaView>
  )
}

export default LandingScreen
