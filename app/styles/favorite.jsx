import { StyleSheet } from 'react-native'
import { COLORS, SIZES, FONTS } from 'constants'

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  faveScreen: {
    elevation: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.grey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
  },

  btnMinus: {
    top: 3,
  },
  img: {
    height: 100,
    width: 100,
  },
  favName: {
    fontSize: SIZES.name,
    fontFamily: FONTS.medium,
  },
  favNameContainer: {
    height: 100,
    marginLeft: 10,
    paddingVertical: 20,
    flex: 1,
  },
  favVersion: {
    fontSize: SIZES.font,
    color: COLORS.grey,
    fontFamily: FONTS.regular,
  },
  favBack: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.bold,
    paddingLeft: 10,
  },
})

export default style
