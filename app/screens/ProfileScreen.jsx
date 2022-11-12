/* <-- dependencies --> */
import { useContext } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  FlatList,
} from 'react-native'
import { Ionicons } from 'react-native-vector-icons'

/* <-- components --> */
import FavoriteList from 'components/FavoriteList'

/* <-- constants --> */
import { COLORS, SIZES, FONTS, CAROUSELData } from 'constants'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'

/* <-- styles --> */
import styles from 'styles/profile'

const ProfileScreen = ({ navigation }) => {
  /* <-- theme state --> */
  const THEME = useContext(ThemeContext)

  return (
    <SafeAreaView style={{ backgroundColor: THEME.background, flex: 1 }}>
      <View style={[styles.header, { backgroundColor: THEME.background }]}>
        <Text style={[styles.headerText, { color: THEME.text }]}>Profile</Text>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Settings')}
        >
          <Ionicons name='settings-outline' size={25} color={`${THEME.text}`} />
        </TouchableOpacity>
      </View>
      <View
        style={[styles.profileContainer, { backgroundColor: THEME.background }]}
      >
        <TouchableOpacity activeOpacity={0.8}>
          <Image
            source={require('assets/images/user/profile.jpeg')}
            style={styles.profileImg}
          />
        </TouchableOpacity>
        <View style={{ marginLeft: 20 }}>
          <Text style={[styles.profileName, { color: THEME.text }]}>
            Jastine Formentera
          </Text>
          <Text style={[styles.profileText, { color: THEME.text }]}>
            Pinoy's Recados Developer
          </Text>
        </View>
      </View>
      <View style={styles.favoriteContainer}>
        <Text
          style={[
            styles.headerText,
            { color: THEME.text, fontSize: SIZES.medium },
          ]}
        >
          My Favorites
        </Text>
        <Pressable onPress={() => navigation.navigate('FavoriteScreen')}>
          <Text style={[styles.viewText, { color: THEME.text }]}>View all</Text>
        </Pressable>
      </View>

      <View style={styles.profileCard}>
        <FlatList
          data={CAROUSELData}
          renderItem={({ item }) => (
            <FavoriteList item={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen
