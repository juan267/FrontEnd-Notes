var tree = {
  age: 4,
  planTgrow: function() {
    $('#grow').on('click', this.grow())
  },
  grow: function() {
    this.age += 1
    $('#arbol').html(this.age)
  }
}

tree.planTgrow()
