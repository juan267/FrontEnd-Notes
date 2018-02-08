$(document).ready(function(){

  $('#create-todo').on('submit', function(event){
    // YO tengo el control Im cathe captain
    event.preventDefault()

    // REcopilar informacion
    var inputValue = $('input[name=todoItem]').val()
    // var inputValue2 = event.target.todoItem.value
    var url = $(this).attr('action')

    // Crear el request
    var request = $.ajax({
      method: 'post',
      url: url,
      data: {
        todoItem: inputValue
      }
    })

    // Manejar la respuesta
    request.done(function(response) {
      console.log(response)
       $('#todo-list').replaceWith(response)
      // Modificar el DOM
      // var ul = $('#todo-list')
      // ul.html('')
      // response.forEach(function(todo, index) {
      //   ul.append(`
      //     <li>
      //       ${todo.todoItem}
      //       <a class="deleteTodo" href="/todos/${index}/delete">Borrar</a>
      //     </li>`
      //   )
      // })
      // $('#todo-list').append(`<li>${response[response.length - 1].todoItem}</li>`)
    })

  })

  $('body').on('click', '.deleteTodo',  function(event) {
    // Yp tengo el control
    event.preventDefault()
    console.log(this)

    // Recopilar informacion
    var url = $(this).attr('href')

    // Hacer el request

    var request = $.ajax({
      method: 'get',
      url: url
    })

    // Tomar la respuesta
    request.done(function(response) {
      var ul = $('#todo-list')
      ul.html('')
      response.forEach(function(todo, index) {
        ul.append(`
          <li>
            ${todo.todoItem}
            <a class="deleteTodo" href="/todos/${index}/delete">Borrar</a>
          </li>`
        )
      })
    })
  })

})





// $(document).ready(function(){
//   $('#create-todo').on('submit', function(event) {
//     // Evitar que el form haga el request
//     event.preventDefault()

//     /// Conseguir el valor
//     var value = event.target.todoItem.value
//     var value2 = $(this).find('input[name=todoItem]').val()
//     console.log(value, value2)


//     // url a la que vamos
//     var url = $(this).attr('action')
//     // Datos que vamos a enviar
//     var data = $(this).serialize()

//     // Hacer el request
//     var request = $.ajax({
//       method: 'post',
//       url: url,
//       data: {
//         todoItem: value
//       }
//     })

//     // Cuando tenga una respuesta de regreso
//     request.done((response) => {

//       // Modifico el DOM
//       // var todoList = $('#todo-list')
//       // todoList.html('')
//       // response.forEach((todo) => {
//       //   console.log(todo)
//       //   $('<li>').text(todo.todoItem).appendTo(todoList)
//       // })


//       $('#todo-list').replaceWith(response)
//     })
//   })

//   /// Hacemos event delegation para los nuevos elementos
//   $('body').on('click', '#delete-todo', function(event)  {
//     event.preventDefault()

//     // Cogemos la url del atributo href
//     let url = $(this).attr('href')

//     /// Hacemos el Request
//     $.get(url, function(response) {
//       $('#todo-list').replaceWith(response)
//     })
//   })

// })
