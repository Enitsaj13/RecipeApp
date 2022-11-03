/* <-- dependencies --> */
import {
  Pressable,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native'

/* <-- styles --> */
import styles from 'styles/home'

/* <-- constants --> */
import { CAROUSELData } from 'constants'

/* <-- components --> */
import SearchRecipe from 'components/Search'
import Carousel from 'components/Carousel'

const HomeScreen = ({ navigation, item }) => {
  return (
    <SafeAreaView style={styles.mainSection}>
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.greet}>Hello,</Text>
            <Text style={styles.user}>Jastine 👋</Text>
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
