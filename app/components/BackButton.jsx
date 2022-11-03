import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

import { COLORS } from 'constants'

export const BackButton = ({ navigation }) => {
  return (
    <>
      <View
        style={{
          padding: 1,
          borderRadius: 10,
          borderWidth: 1,
          padding: 8,
          marginRight: 4,
          backgroundColor: COLORS.white,
          borderColor: COLORS.white,
        }}
      >
        <Icon
          name='chevron-thin-left'
          size={20}
          onPress={navigation.goBack}
          color={COLORS.dark}
        />
      </View>
    </>
  )
}
