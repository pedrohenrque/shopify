import React from 'react'
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View
} from 'react-native'

interface SafeAreaContainerProps {
  children: React.ReactNode
  style?: object
}

export function SafeAreaContainer({ children, style }: SafeAreaContainerProps) {
  return (
    <View style={[styles.container, style]}>
      {Platform.OS === 'ios' ? (
        <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
      ) : (
        <View
          style={[
            styles.androidContainer,
            { paddingTop: StatusBar.currentHeight || 0 }
          ]}
        >
          {children}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  safeArea: {
    flex: 1
  },
  androidContainer: {
    flex: 1
  }
})
