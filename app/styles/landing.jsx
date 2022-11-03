import { StyleSheet } from 'react-native'
import { COLORS, SIZES, FONTS } from 'constants'

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
  },
  landingImage: {
    width: '100%',
    resizeMode: 'contain',
    height: '100%',
  },
  landingTitle: {
    fontSize: SIZES.xxl,
    fontFamily: FONTS.bold,
    color: COLORS.dark,
    textAlign: 'center',
  },
  landingSubtitle: {
    marginTop: 20,
    fontSize: SIZES.medium,
    fontFamily: FONTS.light,
    textAlign: 'center',
    color: COLORS.grey,
  },
})

export default styles
