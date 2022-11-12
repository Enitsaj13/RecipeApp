/* <-- dependencies --> */
import { useContext } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

/* <-- styles --> */
import styles from 'styles/menu'

/* <-- constants --> */
import { CATEGORYData } from 'constants'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'
import { COLORS, FONTS, SIZES } from 'theme'

const CustomTab = ({ category, setCategoryFilter }) => {
  /* <-- state theme --> */
  const THEME = useContext(ThemeContext)

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
              color: `${category === item.category ? COLORS.white : THEME.tab}`,
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
