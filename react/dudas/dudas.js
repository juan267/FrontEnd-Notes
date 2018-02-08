  // const Button = React.createClass({
  //   render() {
  //     return (
  //      <button className='btn btn-success'>
  //        {this.props.text}
  //      </button>
  //     )
  //   }
  // })

  // const ButtonList = React.createClass({ // Container
  //   render() {
  //     let textList = ['Galletas', 'cafe', 'audifonos']
  //     return (
  //       <ul>
  //         {textList.map(function{
  //           {console.log(this)}
  //           return <Button text={text} />
  //         })}
  //       </ul>
  //     )
  //   }
  // })

const Hello = React.createClass({
  render() {
    return (
      <div>
        <div>
          <ul>
            <li>Hola</li>
          </ul>
        </div>
      </div>
    )
  }
})

ReactDOM.render(<Hello />, document.getElementById('root'))


// Dudas 13 de Octubre

// // Crear el component Note con el comportamiendo neceario
// var Note = React.createClass({
//     getInitialState() {
//       return {
//         editing: false,
//         textArea: this.props.children
//       }
//     },
//     edit(event){
//       this.setState({
//         editing: true
//       })
//     },
//     remove(event){
//       alert("removing note")
//     },
//     save(event) {
//       this.setState({
//         editing: false
//       }),
//       console.log(this.state.textArea)
//     },
//     renderDisplay(){
//       return (
//         <div className="note">
//           <p></p>
//           <span>
//             <button
//               className="btn btn-primary glyphicon glyphicon-pencil"
//               onClick={this.edit}
//               />
//             <button
//               className="btn btn-danger glyphicon glyphicon-trash"
//               onClick={this.remove}
//               />
//           </span>
//         </div>
//       )
//     },
//     handleTextAreaChange(event) {
//       this.setState({
//         textArea: event.target.value
//       })
//       console.log(this.state.textArea)
//     },
//     renderForm() {
//       return (
//         <div className="note">
//           <textarea value={this.state.textArea} onChange={this.handleTextAreaChange}
//           className="form-control"></textarea>
//           <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
//         </div>
//       )
//     },
//     render: function() {
//       if (!this.state.editing) {
//         return this.renderDisplay()
//       } else {
//         return this.renderForm()
//       }
//     }
// });


const Dog = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    age: React.PropTypes.number,
  },
  getDefaultProps() {
    return {
      age: 1
    }
  },
  clickClousure() {
    const index = this.props.index
    this.props.handleClick(index)
  },
  render() {
    return (
      <li>
        {this.props.name}, Age: {this.props.age}
        <a onClick={this.clickClousure}>Delete</a>
      </li>
    )
  }
})

const DogList = React.createClass({
  getInitialState() {
    return {
      dogNames: ['ozu', 'moshi']
    }
  },
  handleDeleteClick(index, event) {
    console.log(index)
    console.log('Mi hijo esta llamando la funcion que yo Padre le di')
    // this.state.dogNames.splice(, 1)
    // this.setState({
    //   dogNames: this.state.dogNames
    // })
  },
  render() {
    return (
      <div>
       <ul>
         {this.state.dogNames.map((name, index) => {
           return <Dog key={index} index={index} name={name} handleClick={this.handleDeleteClick}/>
         })}
       </ul>
      </div>
    )
  }
})

ReactDOM.render(<DogList />,
    document.getElementById('react-container'));










