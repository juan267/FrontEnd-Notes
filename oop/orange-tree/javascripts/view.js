// write your view code here. use a constructor function!

var View = function(args) {
  // this.model = args.model
  // this.plant = function () {
  //   var button = document.querySelector('button.plant');
  //   button.addEventListener('click', this.renderTree);
  // }
  // this.model.age = function () {
  //   var button = document.querySelector('button.age');
  //   button.addEventListener('click', this.model.grow);
  //   console.log(this.model.age);
  // }
}

View.prototype = {
  renderTree: function () {
    var mockGrove = document.querySelector(".grove")
    var tree_div = document.createElement('div')
    tree_div.className = "display-tree-small"
    tree_div.id = "tree"
    mockGrove.appendChild(tree_div)
  },
  renderOldTree: function() {
    this.tree = document.querySelector("#tree")
    this.tree.className = "display-tree-big"
  },
  howManyRenderedOranges: function (){
    var existing_oranges = document.querySelectorAll('.orange').length
    return existing_oranges
  },
  renderOrange: function(diameter) {
      var img = document.createElement('img')
      img.className = "orange alive"
      img.src = "images/orange.gif"
      var width = diameter*5;
      img.style.width = width + "px";
      img.style.height = "auto";
      img.style.top = (Math.ceil(Math.random() * 400)+120) + "px";
      img.style.left = (Math.ceil(Math.random() * 700)+100) + "px";
      this.tree.appendChild(img)
      return img
    },
  dropOrange: function(){
    var orange = document.querySelectorAll('.alive')[0];
    orange.className = "orange dead"
    orange.style.top = "750px";
  },
  pickOrange: function(orange){
    orange.style.display = 'none'
  }
}

