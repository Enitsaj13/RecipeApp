/* <-- dependencies --> */
import { useContext } from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

/* <-- constants --> */
import { CAROUSELData } from 'constants'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'

/* <-- component --> */
import { BackButton } from 'components/BackButton'
import FavoriteItem from 'components/FavoriteItem'

/* <-- styles --> */
import styles from 'styles/favorite'

const FaveScreen = ({ navigation }) => {
  /* <-- theme state--> */
  const THEME = useContext(ThemeContext)

  return (
    <SafeAreaView style={{ backgroundColor: THEME.background, flex: 1 }}>
      <View style={styles.header}>
        {/* <-- invoking the back button component -->  */}
        <BackButton navigation={navigation} />
        {/* <---------------------------------------->  */}

        <Text style={[styles.favBack, { color: `${THEME.text}` }]}>
          Favorites
        </Text>
      </View>

      <FlatList
        data={CAROUSELData}
        renderItem={({ item }) => (
          <FavoriteItem item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </SafeAreaView>
  )
}

export default FaveScreen
