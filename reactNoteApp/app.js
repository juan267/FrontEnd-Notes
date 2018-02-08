function randomRange(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Board = React.createClass({
    componentWillMount(){
        console.log(this)
        var self = this
        if(this.props.count){
            console.log(this)
            $.getJSON("http://baconipsum.com/api/?type=all-meat&sentences=" +
            this.props.count + "&start-with-lorem=1&callback=?", function(results){
                results[0].split('. ').forEach(function(sentence, index){
                    self.state.notes.push(sentence.substring(0,40));
                    self.setState({
                      notes: self.state.notes
                    })
                });
            })
        }
    },
    getInitialState(){
        return {
            notes: [
              'Aprender Javascript',
              'Aprender React',
              'Sacar el Perro',
              'Lavar los platos'
            ]
        }
    },
    update(newText, i){
        this.state.notes[i] = newText
        this.setState({
            notes: this.state.notes
        })
    },
    remove(index) {
      this.state.notes.splice(index, 1)
      this.setState({
        notes: this.state.notes
      })
    },
    uniqueId() {
      uniqueId ||
      uniqueId++
    },
    createNote(event) {
      const newNotes = [...this.state.notes, 'New Note']
      this.setState({
        notes: newNotes
      })
    },
    render(){
        return(
            <div className="board">
                <button onClick={this.createNote} />
                {this.state.notes.map((text, index)=>{
                    return <Note
                              key={index}
                              index={index}
                              onUpdate={this.update}
                              onRemove={this.remove}
                              >{text}
                              </Note>
                })}
            </div>
        )
    }
})

var Note = React.createClass({
    getInitialState: function() {
        return {editing: false}
    },
    edit: function() {
        this.setState({editing: true});
    },
    save: function() {
        let val = this.refs.newText.value;
        let index = this.props.index;
        this.props.onUpdate(val, index);
        this.setState({editing: false});
    },
    remove: function() {
       this.props.onRemove(this.props.index)
    },
    componentWillMount() {
        this.style = {
            note:{
                transform: 'rotate('+randomRange(-30, 30)+'deg)',
                position:'absolute',
                top: Math.floor(Math.random() * 85)+'vh',
                left: Math.floor(Math.random() * 85)+'vw'
            }
        }
    },
    componentDidMount() {
      $(ReactDOM.findDOMNode(this)).draggable();
      // $(this).draggable()
    },
    renderDisplay: function() {
        return (
            <div className="note" style={this.style.note}>
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit}
                            className="btn btn-primary glyphicon glyphicon-pencil"/>
                    <button onClick={this.remove}
                            className="btn btn-danger glyphicon glyphicon-trash"/>
                </span>
            </div>
            );
    },
    renderForm: function() {
        return (
            <div className="note">
            <textarea ref="newText" defaultValue={this.props.children}
            className="form-control"></textarea>
            <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
            </div>
            )
    },
    render: function() {
        if (this.state.editing) {
            return this.renderForm();
        }
        else {
            return this.renderDisplay();
        }
    }
});



ReactDOM.render(<Board count={10}/>, document.getElementById('react-container'));
