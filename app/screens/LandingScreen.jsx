/* <-- dependencies --> */
import React from 'react'
import { Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

/* <-- components --> */
import { PrimaryButton } from 'components/LandingButton'

/* <-- styles --> */
import { COLORS } from 'constants'
import styles from 'styles/landing'

const LandingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ height: 400 }}>
        <Image
          style={styles.landingImage}
          source={require('assets/images/landing/ingredients.png')}
        />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.landingTitle}>Pinoy's Recados</Text>
          <Text style={styles.landingSubtitle}>
            We provide the best food recipe for you
          </Text>
        </View>
        <View style={styles.indicatorContainer}>
          <View s={styles.indicator} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
          <View style={styles.currentIndicator} />
        </View>
        <PrimaryButton
          onPress={() => navigation.navigate('BottomNavigator')}
          title='Get Started'
        />
      </View>
    </SafeAreaView>
  )
}

export default LandingScreen
