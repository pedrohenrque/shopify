import { SearchInput } from '@/components'
import { Text, View } from 'react-native'
import { InboxIcon, NotificationIcon } from './components/icons'
import { styles } from './dashboard.styles'

export function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Shopify</Text>

        <View style={styles.iconContent}>
          <InboxIcon hasNewNotification />
          <NotificationIcon hasNewNotification />
        </View>
      </View>

      <SearchInput />
    </View>
  )
}
