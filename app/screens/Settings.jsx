/* <-- dependencies --> */
import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Switch,
  StyleSheet,
  Appearance,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Arrow from 'react-native-vector-icons/EvilIcons'
import { Ionicons } from 'react-native-vector-icons'
import { Entypo } from '@expo/vector-icons'

/* <-- component --> */
import { BackButton } from 'components/BackButton'

/* <-- styles --> */
import styles from 'styles/details'

import { SIZES, FONTS, COLORS } from 'constants'

const Settings = ({ navigation, darkMode }) => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme())

  useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme)
    })
  }, [])

  const isDarkMode = colorScheme === 'dark'

  return (
    <SafeAreaView
      style={[styled.container, isDarkMode && { backgroundColor: COLORS.dark }]}
    >
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <View
        style={[styles.header, isDarkMode && { backgroundColor: COLORS.dark }]}
      >
        {/* <-- invoking the back button component -->  */}
        {/* <BackButton
          navigation={navigation}
          style={[
            styles.backButton,
            isDarkMode && { backgroundColor: COLORS.white },
          ]}
        /> */}

        <View
          navigation={navigation}
          style={[
            {
              padding: 2,
            },
          ]}
        >
          <Entypo
            name='chevron-thin-left'
            size={20}
            onPress={navigation.goBack}
            color={`${isDarkMode ? COLORS.font : COLORS.dark}`}
          />
        </View>
        <Text
          style={[
            styles.text,
            isDarkMode && { color: COLORS.white, fontSize: SIZES.medium },

            {
              fontSize: SIZES.medium,
              fontFamily: FONTS.medium,
            },
          ]}
        >
          Settings
        </Text>
        <Icon name='dots-vertical' size={25} color={COLORS.font} />
      </View>

      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={[
            styles.text,
            isDarkMode && { color: COLORS.white, fontSize: SIZES.medium },

            {
              fontSize: SIZES.medium,
              fontFamily: FONTS.medium,
              paddingHorizontal: 20,
              paddingTop: 20,
            },
          ]}
        >
          Account
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'left',
            paddingVertical: 20,
            paddingHorizontal: 20,
          }}
        >
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 50,
              alignSelf: 'center',
              marginTop: 20,
              marginBottom: 20,
            }}
            source={require('assets/images/user/profile.jpeg')}
          />

          <View
            style={{
              top: 20,
              marginHorizontal: 20,
            }}
          >
            <Text
              style={[
                styles.text,
                isDarkMode && { color: COLORS.white, fontSize: SIZES.name },

                {
                  fontSize: SIZES.name,
                  fontFamily: FONTS.regular,
                },
              ]}
            >
              Jastine A. Formentera
            </Text>

            <Text
              style={{
                fontSize: SIZES.font,
                fontFamily: FONTS.regular,
                color: COLORS.fontLight,
                textAlign: 'left',
                marginBottom: 20,
              }}
            >
              Personal Info
            </Text>
          </View>
          <TouchableOpacity
            style={{
              top: 20,
              borderRadius: 10,
              padding: 10,
            }}
          >
            <Arrow
              name='chevron-right'
              size={30}
              color={`${isDarkMode ? COLORS.light : COLORS.dark}`}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={[
              styles.text,
              isDarkMode && { color: COLORS.white, fontSize: SIZES.name },

              {
                fontSize: SIZES.medium,
                fontFamily: FONTS.medium,
                paddingHorizontal: 20,
                paddingTop: 20,
                marginBottom: 8,
              },
            ]}
          >
            Settings
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'left',
            paddingVertical: 20,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={[
              {
                backgroundColor: `${
                  isDarkMode ? COLORS.cahelLight : COLORS.violetLight
                }`,
                borderRadius: 40,
                padding: 14,
              },
            ]}
          >
            <Entypo
              name='globe'
              size={22}
              color={`${isDarkMode ? COLORS.cahel : COLORS.violet}`}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Text
              style={[
                styles.text,
                isDarkMode && { color: COLORS.white, fontSize: SIZES.name },

                {
                  fontSize: SIZES.name,
                  fontFamily: FONTS.regular,
                  textAlign: 'center',
                  marginBottom: 20,
                  left: 20,
                  top: 13,
                },
              ]}
            >
              Language
            </Text>

            <Text
              style={{
                fontSize: SIZES.font,
                fontFamily: FONTS.regular,
                color: COLORS.fontLight,
                textAlign: 'left',
                marginBottom: 20,
                left: 80,
                top: 15,
              }}
            >
              English
            </Text>
            <TouchableOpacity
              style={{
                left: 92,
                top: 2,
                borderRadius: 10,
                padding: 10,
              }}
            >
              <Arrow
                name='chevron-right'
                size={30}
                color={`${isDarkMode ? COLORS.light : COLORS.dark}`}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'left',
            paddingVertical: 20,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              backgroundColor: '#ecfeff',
              borderRadius: 40,
              padding: 14,
            }}
          >
            <Icon name='bell' size={24} color={COLORS.blue} />
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Text
              style={[
                styles.text,
                isDarkMode && { color: COLORS.white, fontSize: SIZES.name },

                {
                  fontSize: SIZES.name,
                  fontFamily: FONTS.regular,
                  textAlign: 'center',
                  marginBottom: 20,
                  left: 20,
                  top: 13,
                },
              ]}
            >
              Notifications
            </Text>

            <TouchableOpacity
              style={{
                left: 112,
                top: 2,
                borderRadius: 10,
                padding: 10,
              }}
            >
              <Arrow
                name='chevron-right'
                size={30}
                color={`${isDarkMode ? COLORS.light : COLORS.dark}`}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'left',
            paddingVertical: 20,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={[
              styled.darkMode,
              {
                backgroundColor: `${
                  isDarkMode ? COLORS.violetLight : COLORS.cahelLight
                }`,
              },
            ]}
          >
            <Ionicons
              name={isDarkMode ? 'moon' : 'sunny'}
              size={22}
              color={`${isDarkMode ? COLORS.violet : COLORS.cahel}`}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Text
              style={[
                styles.text,
                isDarkMode && { color: COLORS.white, fontSize: SIZES.name },

                {
                  fontSize: SIZES.name,
                  fontFamily: FONTS.regular,
                  textAlign: 'center',
                  marginBottom: 20,
                  left: 20,
                  top: 13,
                },
              ]}
            >
              Dark Mode
            </Text>

            <Text
              style={{
                fontSize: SIZES.font,
                fontFamily: FONTS.regular,
                color: COLORS.fontLight,
                textAlign: 'left',
                marginBottom: 20,
                left: 94,
                top: 15,
              }}
            >
              {colorScheme === 'dark' ? 'On' : 'Off'}
            </Text>
            <View
              style={{
                left: 108,
                top: 8,
              }}
            >
              <Switch
                trackColor={{ false: COLORS.light, true: COLORS.violet }}
                ios_backgroundColor='#3e3e3e'
                value={isDarkMode}
                onValueChange={(value) => {
                  setColorScheme(value ? 'dark' : 'light')
                }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'left',
            paddingVertical: 20,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.greenLight,
              borderRadius: 40,
              padding: 14,
            }}
          >
            <Ionicons name='help-buoy' size={24} color={COLORS.green} />
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Text
              style={[
                styles.text,
                isDarkMode && { color: COLORS.white, fontSize: SIZES.name },

                {
                  fontSize: SIZES.name,
                  fontFamily: FONTS.regular,
                  textAlign: 'center',
                  marginBottom: 20,
                  left: 20,
                  top: 13,
                },
              ]}
            >
              Help
            </Text>

            <TouchableOpacity
              style={{
                left: 174,
                top: 2,
                borderRadius: 10,
                padding: 10,
              }}
            >
              <Arrow
                name='chevron-right'
                size={30}
                color={`${isDarkMode ? COLORS.light : COLORS.dark}`}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('LandingScreen')}
          style={{
            flexDirection: 'row',
            alignItems: 'left',
            paddingVertical: 20,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.redLight,
              borderRadius: 40,
              padding: 14,
            }}
          >
            <Ionicons name='log-out-outline' size={24} color={COLORS.red} />
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Text
              style={[
                styles.text,
                isDarkMode && { color: COLORS.white, fontSize: SIZES.name },

                {
                  fontSize: SIZES.name,
                  fontFamily: FONTS.regular,
                  textAlign: 'center',
                  marginBottom: 20,
                  left: 20,
                  top: 13,
                },
              ]}
            >
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  darkMode: {
    backgroundColor: '#f5f3ff',
    borderRadius: 40,
    padding: 14,
  },
})

export default Settings
