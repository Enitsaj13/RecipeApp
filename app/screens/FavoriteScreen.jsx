/* <-- dependencies --> */
import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

/* <-- constants --> */
import { COLORS, CAROUSELData } from 'constants'

/* <-- component --> */
import { BackButton } from 'components/BackButton'
import FavoriteItem from 'components/FavoriteItem'

/* <-- styles --> */
import styles from 'styles/favorite'

const FaveScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View style={styles.header}>
        {/* <-- invoking the back button component -->  */}
        <BackButton navigation={navigation} />
        {/* <---------------------------------------->  */}

        <Text style={styles.favBack}>Favorites</Text>
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
