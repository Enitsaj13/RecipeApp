/* <-- dependencies --> */
import { Text, View, TouchableOpacity } from 'react-native'

/* <-- styles --> */
import styles from 'styles/menu'

/* <-- constants --> */
import { CATEGORYData, COLORS, FONTS, SIZES } from 'constants'

const CustomTab = ({ category, setCategoryFilter }) => {
  return (
    <View style={styles.listTab}>
      {CATEGORYData.map((item) => (
        <TouchableOpacity
          style={[
            styles.btnTab,
            category === item.category && styles.btnTabActive,
          ]}
          key={item.id}
          onPress={() => setCategoryFilter(item.category)}
        >
          <Text
            style={{
              color: `${
                category === item.category ? COLORS.white : COLORS.grey
              }`,
              fontSize: SIZES.font,
              fontFamily: FONTS.light,
            }}
          >
            {item.category}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default CustomTab
