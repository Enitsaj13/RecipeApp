/* <-- dependencies --> */
import { View, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import SortIcon from 'react-native-vector-icons/MaterialCommunityIcons'

/* <-- constants --> */
import { COLORS } from 'constants'

/* <-- styles --> */
import styles from 'styles/home'

const Header = ({ onSearch }) => {
  return (
    <>
      <View style={styles.sortingContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Search for recipes'
            onChangeText={
              (value) =>
                onSearch(
                  value.replace(/[\s.,/#!$%^&*;:{}=\-_`~()]/g, '')
                ) /* <-- remove all unnecessary type like white spaces --> */
            }
          />
          <Icon name='search' size={30} color={COLORS.grey} />
        </View>

        <TouchableOpacity activeOpacity={0.7}>
          <View style={{ opacity: 0, flex: 1 }} />

          <View style={styles.sortBtn}>
            <SortIcon name='tune-variant' size={28} color={COLORS.dark} />
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Header
