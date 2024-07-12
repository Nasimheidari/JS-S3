const students = [
    {
        name: 'Davina J Eskew',
        gender: 'female',
        age: 61,
        courses: ['math', 'bio']
    },
    {
        name: 'Jordan M Johnson',
        gender: 'male',
        age: 67,
        courses: ['math', 'chemistry']
    },
    {
        name: 'James G Carmona',
        gender: 'male',
        age: 25,
        courses: ['bio', 'computer']
    },
    {
        name: 'Orville S Schuyler',
        gender: 'male',
        age: 59,
        courses: ['computer', 'bio']
    },
    {
        name: 'Monica H Hill',
        gender: 'female',
        age: 37,
        courses: ['computer', 'math', 'chemistry']
    },
    {
        name: 'Zachary J Hawkins',
        gender: 'male',
        age: 34,
        courses: ['bio']
    },
    {
        name: 'Elizabeth J Mercer',
        gender: 'female',
        age: 12,
        courses: []
    },
]

const femaleStudents = students .filter((person)=>{
    return person.gender ==="female"
})
console.log(femaleStudents)

const computerCourse = students .filter((person)=>{
    return person.courses .includes('computer')
})
console.log(computerCourse)





const x = students.filter((person) => person.age < 50)
                  .filter((person) => person.courses.includes('chemistry'));

console.log(x);

///

const y = students.filter((person) => person.gender === 'male')
                  .filter((person) => person.courses.includes('math'));

console.log(y);

///

const z = students.filter((person) => person.age > 40 && 
                  person.courses.includes('computer') &&
                  !person.courses.includes('math'));

console.log(z);

///

const noCourses = students .filter((person)=>{
    return person.courses.length === 0
})
console.log(noCourses)

///

const hasName = students.some((person)=>{
    return students.name === 'Elizabeth'
})
console.log(hasName)

///
const j = students.some((person)=>
    person.age > 60 &&
    person.gender === 'male'
)
console.log(j)

///
const femaleStudent = []
const femaleCourses= []
students.forEach((person)=>{
    if (person.gender === 'female'){

        femaleStudent.push(person) 
    }
});  
console.log(femaleStudent)

femaleStudent.forEach((person)=>{
    
    femaleCourses.push(person.courses) 
})
console.log(femaleCourses)

///

students.sort((a, b) => a.age - b.age);
console.log(students)

