import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    color: 'white',
  },
  menu: {
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 10,
    width: '100%',
    backgroundColor: 'rgb(255,128,0)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  areaTitle: {
    width: '70%',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 24
  },
  buttonOut: {
    textAlign: 'right',
    marginLeft: 70
  },
  buttonProfile: {
    textAlign: 'left',
    marginRight: 70
  },
})