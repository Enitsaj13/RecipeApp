/* <-- dependencies --> */
import { useState, useContext } from 'react'
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Arrow from 'react-native-vector-icons/EvilIcons'
import { Ionicons } from 'react-native-vector-icons'
import { Entypo } from '@expo/vector-icons'
import { EventRegister } from 'react-native-event-listeners'

/* <-- component --> */
import { BackButton } from 'components/BackButton'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'
import { COLORS } from 'theme'

/* <-- styles --> */
import styles from 'styles/settings'

const Settings = ({ navigation }) => {
  const THEME = useContext(ThemeContext)
  const [mode, setMode] = useState(false)

  const switchHandler = (value) => {
    setMode(value)
    EventRegister.emit('themeChanged', value)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: THEME.background }}>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={[styles.accountText, { color: `${THEME.text}` }]}>
          Account
        </Text>
        <View style={styles.accountContainer}>
          <Image
            style={styles.accountImg}
            source={require('assets/images/user/profile.jpeg')}
          />

          <View style={styles.accountTextContainer}>
            <Text style={[styles.accountName, { color: `${THEME.text}` }]}>
              Jastine A. Formentera
            </Text>

            <Text style={[styles.accountSubName, { color: `${THEME.text}` }]}>
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
            <Arrow name='chevron-right' size={30} color={`${THEME.text}`} />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={[styles.settingsText, { color: `${THEME.text}` }]}>
            Settings
          </Text>
        </View>

        <View style={styles.settingsContainer}>
          <View
            style={[
              styles.languageContainer,
              { backgroundColor: `${COLORS.violetLight}` },
            ]}
          >
            <Entypo name='globe' size={22} color={`${THEME.globe}`} />
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Text style={[styles.textSettings, { color: `${THEME.text}` }]}>
              Language
            </Text>

            <Text style={[styles.language, { color: `${THEME.text}` }]}>
              English
            </Text>

            <TouchableOpacity style={styles.arrow}>
              <Arrow name='chevron-right' size={30} color={`${THEME.text}`} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.notificationContainer}>
          <View style={styles.iconBell}>
            <Icon name='bell' size={24} color={COLORS.blue} />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.textSettings, { color: `${THEME.text}` }]}>
              Notifications
            </Text>

            <TouchableOpacity style={styles.arrow}>
              <Arrow name='chevron-right' size={30} color={`${THEME.text}`} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.darkmodeContainer}>
          <View style={[styled.darkMode, { backgroundColor: THEME.darkmode }]}>
            <Ionicons
              name={mode ? 'moon' : 'sunny'}
              size={22}
              color={`${THEME.darkIcon}`}
            />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.textSettings, { color: `${THEME.text}` }]}>
              Dark Mode
            </Text>

            <Text style={[styles.onOff, { color: `${THEME.text}` }]}>
              {`${mode === true ? 'On' : 'Off'}`}
            </Text>

            <View style={{ left: 108, top: 8 }}>
              <Switch
                trackColor={{ false: COLORS.light, true: COLORS.violet }}
                thumbColor={`${THEME.switch}`}
                value={mode}
                onValueChange={switchHandler}
              />
            </View>
          </View>
        </View>

        <View style={styles.helpContainer}>
          <View
            style={{
              backgroundColor: COLORS.greenLight,
              borderRadius: 40,
              padding: 14,
            }}
          >
            <Ionicons name='help-buoy' size={24} color={COLORS.green} />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.textSettings, { color: `${THEME.text}` }]}>
              Help
            </Text>

            <TouchableOpacity style={styles.arrow}>
              <Arrow name='chevron-right' size={30} color={`${THEME.text}`} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('LandingScreen')}
          style={styles.logoutContainer}
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

          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.textSettings, { color: `${THEME.text}` }]}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styled = StyleSheet.create({
  darkMode: {
    backgroundColor: '#f5f3ff',
    borderRadius: 40,
    padding: 14,
  },
})

export default Settings
