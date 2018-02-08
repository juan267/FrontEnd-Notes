var students = []
function Student(name, age) {
  this.name = name
  this.age = age
}

module.exports = {
  students: students,
  createStudent: Student
}
