import React, { useState, useEffect } from 'react'
import { View, Text, Switch, StyleSheet, Appearance } from 'react-native'

import { COLORS } from 'constants'

const App = () => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme())

  useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme)
    })
  }, [])

  const isDarkMode = colorScheme === 'dark'

  return (
    <View style={[styles.container, isDarkMode && { backgroundColor: '#000' }]}>
      <Text style={[styles.text, isDarkMode && { color: COLORS.white }]}>
        Dark Mode
      </Text>
      <Switch
        trackColor={{ false: COLORS.dark, true: COLORS.dark }}
        ios_backgroundColor='#3e3e3e'
        value={isDarkMode}
        onValueChange={(value) => {
          setColorScheme(value ? 'dark' : 'light')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
})

export default App
