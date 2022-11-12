/* <-- dependencies --> */
import { useContext } from 'react'
import {
  Pressable,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'

/* <-- constants --> */
import { CAROUSELData } from 'constants'

/* <-- styles --> */
import styles from 'styles/home'

/* <-- components --> */
import SearchRecipe from 'components/Search'
import Carousel from 'components/Carousel'

const HomeScreen = ({ navigation, item }) => {
  /* <-- theme state --> */
  const THEME = useContext(ThemeContext)

  return (
    <SafeAreaView
      style={[styles.mainSection, { backgroundColor: THEME.background }]}
    >
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.greet, { color: THEME.text }]}>Hello,</Text>
            <Text style={[styles.user, { color: THEME.text }]}>Jastine 👋</Text>
          </View>
          <Text style={styles.asking}>What would you like to cook ?</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Image
            source={require('assets/images/user/profile.jpeg')}
            style={styles.profile}
          />
        </TouchableOpacity>
      </View>

      {/* <-- invoked the search component -->  */}
      <SearchRecipe />
      {/* <---------------------------------->  */}

      <View style={styles.recommendationContainer}>
        <Text style={styles.recommendationTitle}>Recommendations</Text>
        <Pressable onPress={() => navigation.navigate('MenuScreen', item)}>
          <Text style={styles.viewAll}>View all</Text>
        </Pressable>
      </View>

      <View
        style={{
          paddingTop: 30,
        }}
      >
        {/* <-- invoked carousel -->  */}
        <Carousel data={CAROUSELData} autoPlay={false} />
        {/* <---------------------------------->  */}
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
