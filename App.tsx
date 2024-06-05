import { useState, useEffect } from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, Image } from 'react-native'
import { styles } from './styles'
import { Ball } from './components/Ball'
import { Ball2 } from './components/Ball2'

let timer: number
let timer2: number
// teste

export default function App() {
  // Valor da gravidade da terra
  const [gravity, setGravity] = useState(0.98)

  const [upForce, setUpForce] = useState(0)
  const [speed, setSpeed] = useState(0)
  const [posY, setPosY] = useState(0)
  const [posX, setPosX] = useState(0)


  // Efeito colateral - preto
  useEffect(() => {
    const applyGravity = () => {
      // decremento da gravidade
      let newUpForce = upForce - gravity
      newUpForce = newUpForce < 0 ? 0 : newUpForce
      setUpForce(newUpForce)

      // modificador da velocidade
      let newSpeed = speed + (gravity - (newUpForce / 2))
      setSpeed(newSpeed)

      // calculo da posição da bolinha 1
      let newPosY = posY - newSpeed

      if (newPosY < 0) {
        newPosY = 0
        setSpeed(0)
      }
      setPosY(newPosY)
    }

    clearTimeout(timer)

    timer = setTimeout(applyGravity, 30)
  }, [gravity, upForce, speed, posY])

  // Efeito colateral 2 - rosiu
  useEffect(() => {
    const applyGravity = () => {
      // decremento da gravidade
      let newUpForce = upForce - gravity
      newUpForce = newUpForce < 0 ? 0 : newUpForce
      setUpForce(newUpForce)

      // modificador da velocidade
      let newSpeed = speed + (gravity - (newUpForce / 2))
      setSpeed(newSpeed)
      // calculo da posição da bolinha 2
      let newPosX = posX - newSpeed

      if (newPosX < 0) {
        newPosX = 0
        setSpeed(0)
      }
      setPosX(newPosX)
    }

    clearTimeout(timer2)

    timer2 = setTimeout(applyGravity, 30)
  }, [gravity, upForce, speed, posX])

  const handleForceButton = () => {
    setUpForce(5)
  }

  const handleForceButton2 = () => {
    setUpForce(7)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.area}>
      <Image source={require('./assets/63b348ab5e56f905763d4dbc47845cb0.jpg')}/>
        <Ball posY={posY}/>
        <Ball2 posX={posX}/>
      </View>

      <View style={styles.control}>
        <View>
          <Text style={styles.controlText}>UpForce: {upForce.toFixed(2)}</Text>
          <Text style={styles.controlText}>Speed: {speed.toFixed(2)}</Text>
          <Text style={styles.controlText}>PosY: {posY.toFixed(2)}</Text>
          <Text style={styles.controlText}>PosX: {posX.toFixed(2)}</Text>


        </View>
        <TouchableOpacity 
          style={styles.controlButton}
          onPress={handleForceButton}
        >
          <Text style={styles.controlText1}>CLICK</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.controlButton2}
          onPress={handleForceButton2}
        >
          <Text style={styles.controlText1}>CLICK</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}