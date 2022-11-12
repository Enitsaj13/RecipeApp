import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from 'constants'

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
  },
  details: {
    paddingHorizontal: SIZES.padding,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.white,
    marginBottom: 20,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.white,
    borderWidth: 1,
    padding: 6,
    borderRadius: 10,
    bottom: 2,
    width: 40,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 25,
    fontSize: SIZES.name,
    color: COLORS.dark,
    fontFamily: FONTS.light,
  },

  itemInstructions: {
    fontSize: SIZES.medium,
    color: COLORS.dark,
    fontFamily: FONTS.bold,
    marginBottom: 20,
    marginTop: 25,
  },

  itemIngredients: {
    fontSize: SIZES.medium,
    color: COLORS.dark,
    fontFamily: FONTS.bold,
    marginBottom: 20,
  },

  heart: {
    fontSize: 24,
    color: COLORS.primary,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
  },
  img: {
    height: 220,
    width: 220,
  },
  iconPlayContainer: {
    bottom: 16,
    position: 'absolute',
    left: 86,
    bottom: 9,
    zIndex: 1,
  },
})

export default style
