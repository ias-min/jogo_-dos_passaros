import { View, Image} from 'react-native'
import { styles } from './styles'

type Props = {
  posX: number,
}

export function Ball2({ posX }: Props) {
  return (
    <View style={[styles.container2, {bottom: posX}]}>
     <Image style={styles.logo} source={require('../../assets/passaro.png')}/>
    </View>
  )
}