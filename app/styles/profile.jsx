import { StyleSheet } from 'react-native'
import { COLORS, SIZES, FONTS } from 'theme'

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: SIZES.large,
    fontFamily: FONTS.bold,
    letterSpacing: 0.7,
  },
  profileContainer: {
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
  },
  profileImg: {
    height: 60,
    width: 60,
    borderRadius: 40,
  },
  profileName: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.bold,
    letterSpacing: 0.7,
  },
  profileText: {
    fontSize: SIZES.font,
    fontFamily: FONTS.light,
    letterSpacing: 0.2,
  },
  favoriteContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 4,
    marginRight: 4,
  },
  viewText: {
    fontSize: 14,
    fontFamily: FONTS.light,
    top: 3,
    letterSpacing: 0.8,
  },
  profileCard: {
    paddingTop: 30,
    paddingBottom: 150,
  },
})

export default styles
