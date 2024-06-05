import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  area: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
  },
  control: {
    flexDirection: 'row',
    gap: 20,
    margin: 20,
    alignItems: 'center',
  },
  controlText: {
    color: '#000',
  },
  controlText1: {
    color: '#fff',
  },
  controlButton: {
    flex: 1,
    height: 100,
    backgroundColor: '#000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
   controlButton2: {
    flex: 1,
    height: 100,
    backgroundColor: '#f60B8A',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})