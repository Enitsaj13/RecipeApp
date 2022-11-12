/* <-- dependencies --> */
import { useContext } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import SortIcon from 'react-native-vector-icons/MaterialCommunityIcons'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'

/* <-- styles --> */
import styles from 'styles/home'

const Header = ({ onSearch }) => {
  /* <-- theme state --> */
  const THEME = useContext(ThemeContext)

  return (
    <>
      <View style={styles.sortingContainer}>
        <View
          style={[styles.inputContainer, { backgroundColor: THEME.border }]}
        >
          <TextInput
            style={[styles.input, { color: THEME.text }]}
            placeholder='Search for recipes'
            placeholderTextColor={`${THEME.placeholder}`}
            onChangeText={
              (value) =>
                onSearch(
                  value.replace(/[\s.,/#!$%^&*;:{}=\-_`~()]/g, '')
                ) /* <-- remove all unnecessary type like white spaces --> */
            }
          />
          <Icon name='search' size={30} color={`${THEME.placeholder}`} />
        </View>

        <TouchableOpacity activeOpacity={0.7}>
          <View style={{ opacity: 0, flex: 1 }} />

          <View style={[styles.sortBtn, { backgroundColor: THEME.card }]}>
            <SortIcon name='tune-variant' size={28} color={`${THEME.text}`} />
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Header
