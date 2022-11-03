import { StyleSheet } from 'react-native'
import { COLORS, SIZES, FONTS } from 'constants'

const styles = StyleSheet.create({
  mainSection: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  user: {
    fontSize: SIZES.xl,
    marginLeft: 10,
    fontFamily: FONTS.bold,
    fontWeight: 'bold',
  },

  greet: {
    fontSize: SIZES.xl,
    fontFamily: FONTS.light,
  },

  asking: {
    marginTop: 5,
    fontSize: SIZES.medium,
    color: COLORS.grey,
    fontFamily: FONTS.light,
  },

  profile: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  input: {
    flex: 1,
    fontSize: SIZES.name,
    padding: 4,
    fontFamily: FONTS.light,
    color: COLORS.dark,
  },
  sortingContainer: {
    marginTop: 40,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 15,
    width: 200,
    bottom: 10,
  },

  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10,
  },
  recommendationContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 4,
    marginRight: 4,
  },
  recommendationTitle: {
    fontSize: SIZES.large,
    fontFamily: FONTS.bold,
    color: COLORS.dark,
    letterSpacing: 0.7,
  },
  viewAll: {
    fontSize: 14,
    color: COLORS.grey,
    fontFamily: FONTS.light,
    top: 3,
    letterSpacing: 0.8,
  },

  // Modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    left: 100,
    bottom: 132,
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 200,
    backgroundColor: 'transparent',
  },
})

export default styles
