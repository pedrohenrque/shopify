import { Tabs } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'

import { ExpoIcon } from '@/components/ui/expoIcon'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute'
          },
          default: {}
        })
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <ExpoIcon name="home" size={24} color={color} iconSet="AntDesign" />
          )
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: 'Wishlist',
          tabBarIcon: ({ color }) => (
            <ExpoIcon
              iconSet="MaterialIcons"
              name="favorite-border"
              size={24}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          title: 'Transaction',
          tabBarIcon: ({ color }) => (
            <ExpoIcon
              iconSet="Ionicons"
              name="document-text-outline"
              size={24}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <ExpoIcon iconSet="AntDesign" name="user" size={24} color={color} />
          )
        }}
      />
    </Tabs>
  )
}
