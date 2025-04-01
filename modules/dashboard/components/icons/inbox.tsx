import { ExpoIcon } from '@/components/ExpoIcon'
import { useTheme } from '@/hooks/useTheme'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

type IInboxIcon = {
  hasNewNotification: boolean
}

export function InboxIcon({ hasNewNotification }: IInboxIcon) {
  const { colors } = useTheme()

  const styles = StyleSheet.create({
    container: {
      marginRight: 5,
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
        iconSet="AntDesign"
        name="inbox"
        color={colors.icon}
        size={22}
      />
    </TouchableOpacity>
  )
}
