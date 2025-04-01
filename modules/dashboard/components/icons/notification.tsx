import { ExpoIcon } from '@/components/ExpoIcon'
import { useTheme } from '@/hooks/useTheme'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

type INotificationIcon = {
  hasNewNotification: boolean
}

export function NotificationIcon({ hasNewNotification }: INotificationIcon) {
  const { colors } = useTheme()

  const styles = StyleSheet.create({
    container: {
      padding: 5,
      borderColor: colors.border,
      borderWidth: 0.6,
      borderRadius: 4
    },
    dot: {
      position: 'absolute',
      right: 8,
      top: 5,
      height: 6,
      width: 6,
      borderRadius: 3,
      backgroundColor: 'red'
    }
  })

  return (
    <TouchableOpacity style={styles.container}>
      <View style={hasNewNotification ? styles.dot : null} />
      <ExpoIcon
        iconSet="Ionicons"
        name="notifications-outline"
        color={colors.icon}
        size={22}
      />
    </TouchableOpacity>
  )
}
