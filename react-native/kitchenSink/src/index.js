/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 // En react Native escribimos el codigo por separado para cada plataforma, pero podemos hacer que cada plataforma importe un archivo de entrada en comun por lo cual es posible tener la misma base de codifgo para ambas plataformas.

// Aca importamos todo los componentes y librerias que vamos a utilizar en este archivo.
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
  Navigator,
  Image // Todos estos son componentes que nos brinda React-native y que se mapean a componentes nativos de cada plataforma
} from 'react-native';
import Hello from './Hello'


// Este es nuestro Componente Raiz
// class Root extends Component {
//   render() {
//     return (
//       <View style={{flex: 1}}>
//         {/* en react native los estilos los pasmos como un objeto al prop style de cada componente*/}
//         <View style={{flex: 1, backgroundColor: 'powderblue'}} />
//         <View style={{flex: 2, backgroundColor: 'skyblue'}} />
//         <View style={{flex: 3, backgroundColor: 'tomato'}} />
//       </View>
//     )
//   }
// }

// Para manejar layouts se usa flexbox, el mismo que conoces del navegador, la unica diferencia es que tienen unos defaults dierentes:

//  - flexdirection inicia con el valor 'column'
//  - alignItems por default tiene strech no 'flex-start'
//  - el parametro 'flex' solo soporta un parametro


// class Root extends Component {
//   render() {
//     return (
//       <View style={
//         {
//           flex: 1,
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center'
//         }
//       }>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     )
//   }
// }
// class AirplaneTranslator extends Component {
//   constructor() {
//     super()
//     this.state = {
//       text: ''
//     }
//     this.handleChangeText = this.handleChangeText.bind(this)
//   }
//   handleChangeText(text) {
//     this.setState({
//       text: text
//     })
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <TextInput
//           style={styles.input}
//           placeholder="Type here to translate!"
//           onChangeText={this.handleChangeText}
//         />
//         <Text>
//           {this.state.text.split(' ').map(word => word && '✈️').join(' ')}
//         </Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'skyblue',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   input: {
//     height: 40,
//     width: 400,
//     borderRadius: 10,
//     backgroundColor: 'steelblue'
//   }
// })

// class ListViewBasics extends Component {
//   // Initialize the hardcoded data
//   constructor(props) {
//     super(props);
//     this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     this.state = {
//       dataSource: this.ds.cloneWithRows([])
//     };
//   }
//   createStudents() {
//     let students = []
//     for (var i = 0; i < 100; i++) {
//       students.push('Juan')
//     }
//     return students
//   }
//   componentDidMount() {
//     fetch('https://facebook.github.io/react-native/movies.json')
//       .then(response => response.json())
//       .then(data => {
//         // console.log(data)
//         // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//         this.setState({
//           dataSource: this.ds.cloneWithRows(data.movies)
//         })
//       })
//   }
//   render() {
//     return (
//       <View style={{paddingTop: 22}}>
//         <ListView
//           dataSource={this.state.dataSource}
//           renderRow={(rowData) => <Text>{rowData.title}: {rowData.releaseYear}</Text>}
//         />
//       </View>
//     );
//   }
// }


class Navigation extends Component {
  constructor() {
    super()
    this.state = {
      students: ['Angie', 'Maria', 'Diego', 'German']
    }
    this.handleRenderScene = this.handleRenderScene.bind(this)
  }
  handleRenderScene(route, navigator) {
    const onForward = () => {
      let nextIndex
      if (route.index < this.state.students.length - 1) {
        nextIndex = route.index + 1
      } else {
        nextIndex = 0
      }
      navigator.push({
        name: this.state.students[nextIndex],
        index: nextIndex
      })
    }
    const onBack = () => {
      if (route.index > 0) {
        navigator.pop()
      }
    }
    return (
      <Hello
        name={route.name}
        onForward={onForward}
        onBack={onBack}
      />
    )
  }
  render() {
    return (
      <Navigator
        initialRoute={{name: this.state.students[0], index: 0}}
        renderScene={this.handleRenderScene}
      >

      </Navigator>
    )
  }
}


export default Navigation

