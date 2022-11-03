/* <-- dependencies --> */
import { useState } from 'react'
import { View, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

/* <-- constants --> */
import { CATEGORYData, COLORS, SIZES, FONTS } from 'constants'

/* <-- styles --> */
import styles from 'styles/menu'

const ListCategories = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0)

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoriesListContainer}
    >
      {CATEGORYData.map((category, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => setSelectedCategoryIndex(index)}
        >
          <View
            style={{
              backgroundColor:
                selectedCategoryIndex === index ? COLORS.dark : COLORS.white,
              ...styles.categoryBtn,
            }}
          >
            <Text
              style={{
                fontSize: SIZES.name,
                fontFamily: FONTS.medium,
                marginLeft: 2,
                color:
                  selectedCategoryIndex === index ? COLORS.white : COLORS.dark,
              }}
            >
              {category.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default ListCategories
