import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { BackButton } from 'components/BackButton'
import { COLORS } from 'constants'

const Header = ({ navigation }) => {
  return (
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
      <BackButton navigation={navigation} />
    </View>
  )
}

export default Header
