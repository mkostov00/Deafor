function ungroupStudents(students) {
    const newStudents = students.map(teacher => {
        return teacher.data.map(student => {
            return {
                teacher: teacher.teacher,
                ...student,
            }
        })
    })

    return console.log(newStudents.flat());
}

ungroupStudents([{ 
    teacher: "Ms. Car", 
    data: [{ 
       name: "James", 
       emergenceNumber: "617-771-1082", 
    }, { 
       name: "Alice", 
       alergies: ["nuts", "carrots"], 
    }], 
  }, { 
    teacher: "Mr. Lamb", 
    data: [{ 
      name: "Aaron", 
      age: 3 
    }] 
  }]);