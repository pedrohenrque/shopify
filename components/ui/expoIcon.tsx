import * as Icons from '@expo/vector-icons'
import React from 'react'
import { View } from 'react-native'

interface IconProps {
  name: string
  size?: number
  color?: string
  iconSet: keyof typeof Icons
}

export function ExpoIcon({
  name = 'home',
  size,
  color,
  iconSet = 'AntDesign'
}: IconProps) {
  const IconSetComponent = (Icons as any)[iconSet]

  if (!IconSetComponent) {
    console.warn(`Ícone não encontrado no conjunto ${iconSet}: ${name}`)
    return null
  }

  return (
    <View>
      <IconSetComponent name={name} size={size} color={color} />
    </View>
  )
}
