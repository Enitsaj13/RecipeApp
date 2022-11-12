import { StyleSheet } from 'react-native'

import { COLORS, SIZES, FONTS } from 'theme'

const styles = StyleSheet.create({
  accountText: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.medium,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  accountContainer: {
    flexDirection: 'row',
    alignItems: 'left',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  accountImg: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  accountTextContainer: {
    top: 20,
    marginHorizontal: 20,
  },
  accountName: {
    fontSize: SIZES.name,
    fontFamily: FONTS.regular,
  },
  accountSubName: {
    fontSize: SIZES.font,
    fontFamily: FONTS.regular,
    textAlign: 'left',
    top: 5,
  },
  settingsText: {
    fontSize: SIZES.name,
    fontSize: SIZES.medium,
    fontFamily: FONTS.medium,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 8,
  },
  settingsContainer: {
    flexDirection: 'row',
    alignItems: 'left',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  languageContainer: {
    borderRadius: 40,
    padding: 14,
  },
  language: {
    fontSize: SIZES.font,
    fontFamily: FONTS.regular,
    textAlign: 'left',
    marginBottom: 20,
    left: 80,
    top: 15,
  },
  arrow: {
    top: 2,
    borderRadius: 10,
    padding: 10,
    position: 'absolute',
    left: 220,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'left',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  iconBell: {
    backgroundColor: '#ecfeff',
    borderRadius: 40,
    padding: 14,
  },
  darkmodeContainer: {
    flexDirection: 'row',
    alignItems: 'left',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  onOff: {
    fontSize: SIZES.font,
    fontFamily: FONTS.regular,
    textAlign: 'left',
    marginBottom: 20,
    left: 94,
    top: 15,
  },
  helpContainer: {
    flexDirection: 'row',
    alignItems: 'left',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'left',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  textSettings: {
    fontSize: SIZES.name,
    fontFamily: FONTS.regular,
    textAlign: 'center',
    marginBottom: 20,
    left: 20,
    top: 13,
  },
})

export default styles
