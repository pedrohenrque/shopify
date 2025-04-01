import { ExpoIcon } from '@/components/ui/expoIcon'
import { useTheme } from '@/hooks/useTheme'
import { Text, View } from 'react-native'
import { styles } from './dashboard.styles'

export function Dashboard() {
  const { colors } = useTheme()

  return (
    <View style={styles.container}>
      <View>
        <Text>Shopify</Text>

        <View>
          <ExpoIcon
            iconSet="Ionicons"
            name="notifications-outline"
            color={colors.icon}
            size={22}
          />
        </View>
      </View>
    </View>
  )
}
