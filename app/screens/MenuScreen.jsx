/* <-- dependencies --> */
import React, { useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

/* <-- components --> */
import SearchRecipe from 'components/Search'
import Card from 'components/Card'

/* <-- navigation --> */
import CustomTab from 'navigation/CustomTab'

/* <-- styles --> */
import styles from 'styles/menu'

/* <-- constants --> */
import { FOODSData, BEVERAGESData, DESSERTSData, COLORS } from 'constants'

const HomeScreen = ({ navigation }) => {
  const [category, setCategory] = useState('All')
  const [dataList, setDataList] = useState([
    ...FOODSData,
    ...BEVERAGESData,
    ...DESSERTSData,
  ])

  /* <-- filter based on the category --> */
  const setCategoryFilter = (category) => {
    category === 'All'
      ? setDataList([...FOODSData, ...BEVERAGESData, ...DESSERTSData])
      : setDataList(
          [...FOODSData, ...BEVERAGESData, ...DESSERTSData].filter(
            (item) => item.category === category
          )
        )
    setCategory(category)
  }

  /* <-- filter search --> */
  const handleSearch = (value) => {
    value === setDataList([...FOODSData, ...BEVERAGESData, ...DESSERTSData])

    const sortData = [...FOODSData, ...BEVERAGESData, ...DESSERTSData].filter(
      (item) => item.name.toLowerCase().includes(value.toLowerCase())
    )

    /* <-- 1 line using ternary operator  --> */
    sortData.length !== 0 ? setDataList(sortData) : setDataList(FOODSData)
  }

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
        }}
      >
        {/* <-- invoked the header component -->  */}
        <SearchRecipe onSearch={handleSearch} />
        {/* <---------------------------------->  */}

        <View style={styles.categoryContainer}>
          {/* <-- invoked the custom tab navigation -->  */}
          <CustomTab
            category={category}
            setCategoryFilter={setCategoryFilter}
          />
          {/* <-------------------------------------->  */}

          <View
            style={{
              marginBottom: 80,
            }}
          >
            <FlatList
              data={dataList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Card food={item} navigation={navigation} />
              )}
              showsVerticalScrollIndicator={true}
              numColumns={2}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default HomeScreen
