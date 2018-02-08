import React, {Component} from 'react'
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight
} from 'react-native'


class Hello extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hola: {this.props.name}</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Presiona Para siguiente Estudiante</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Estudiante Anterior</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
    color: 'tomato'
  }
})

export default Hello
