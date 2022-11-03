/* <-- dependencies --> */
import React from 'react'
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

/* <-- styles --> */
import styles from 'styles/profile'

/* <-- constants --> */
import { COLORS, SIZES, FONTS, CAROUSELData } from 'constants'

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View
        style={{
          paddingVertical: 20,
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 20,
          justifyContent: 'space-between',
          backgroundColor: COLORS.white,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.large,
            fontFamily: FONTS.bold,
            color: COLORS.dark,
            letterSpacing: 0.7,
          }}
        >
          Profile
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Settings')}
          style={{
            borderRadius: 20,
            padding: 10,
          }}
        >
          <Ionicons name='settings-outline' size={25} color={COLORS.dark} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: COLORS.white,
          marginHorizontal: 20,
          borderRadius: 20,
          padding: 20,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 8,
          shadowColor: COLORS.dark,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1,
          elevation: 2,
        }}
      >
        <TouchableOpacity activeOpacity={0.8}>
          <Image
            source={require('assets/images/user/profile.jpeg')}
            style={{
              height: 60,
              width: 60,
              borderRadius: 40,
            }}
          />
        </TouchableOpacity>
        <View style={{ marginLeft: 20 }}>
          <Text
            style={{
              fontSize: SIZES.medium,
              fontFamily: FONTS.bold,
              color: COLORS.dark,
              letterSpacing: 0.7,
            }}
          >
            Jastine Formentera
          </Text>
          <Text
            style={{
              fontSize: SIZES.font,
              fontFamily: FONTS.light,
              color: COLORS.dark,
              letterSpacing: 0.2,
            }}
          >
            Pinoy's Recados Developer
          </Text>
          <Text
            style={{
              fontSize: SIZES.medium,
              fontFamily: FONTS.light,
              color: COLORS.dark,
            }}
          ></Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          paddingHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 4,
          marginRight: 4,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.large,
            fontFamily: FONTS.bold,
            color: COLORS.dark,
          }}
        >
          My Favorites
        </Text>
        <Pressable onPress={() => navigation.navigate('FavoriteScreen')}>
          <Text
            style={{
              fontSize: 14,
              color: COLORS.grey,
              fontFamily: FONTS.light,
              top: 3,
              letterSpacing: 0.8,
            }}
          >
            View all
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          paddingTop: 30,
          paddingBottom: 150,
        }}
      >
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
