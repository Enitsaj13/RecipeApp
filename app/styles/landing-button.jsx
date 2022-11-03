import { StyleSheet } from 'react-native'
import { COLORS, SIZES, FONTS } from 'constants'

const styles = StyleSheet.create({
  primaryTitle: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontFamily: FONTS.medium,
  },
  primaryBtnContainer: {
    backgroundColor: COLORS.primary,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondayTitle: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    paddingLeft: 20,
  },
  secondayBtnContainer: {
    backgroundColor: COLORS.dark,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default styles
