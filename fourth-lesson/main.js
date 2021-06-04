// todolist upgrade data structure for lesson 5
const todoListID_1 = '31fd-4tgf'
const todoListID_2 = '66aa-4sss'

const todoLists = [
    {
        id: todoListID_1,
        title: 'what to learn',
        filter: 'all',
    },
    {
        id: todoListID_2,
        title: 'what to buy',
        filter: 'all',
    },
]

const tasks = {
    [todoListID_1]: [ // '31fd-4tgf'
        {id: 'as3-dd', title: 'react', isDone: true},
        {id: 'as3-12', title: 'redux', isDone: false},
        {id: 'as3-gf', title: 'CSS', isDone: false},
    ],
    [todoListID_2]: [ // '66aa-4sss'
        {id: 'as3-bb', title: 'HTML', isDone: false},
        {id: 'as3-ss', title: 'HTML', isDone: false},
        {id: 'as3-ee', title: 'HTML', isDone: false},
    ],
}

//reduce

let numbers = [21, 55, 65, 78, 2, 90]; // -> one result value with reduce
console.log(numbers.reduce((acc, el) => acc + el, 0))
console.log(numbers.reduce((acc, el) => acc > el ? acc : el))

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

console.log(students.reduce((acc, el) => acc + el.scores, 0))
// reduce as find
console.log(students.reduce((acc, el) => {
    if(el.name === 'Bob'){
        acc = el
    }
    return acc
}, null))
// reduce as filter
console.log(students.reduce((acc, el) => {
    if(el.isMarried) {
        acc.push(el)
    }
    return acc
}, []))
// reduce as map
console.log(students.reduce((acc, el) => {
    acc.push(el.name)
    return acc
}, []))

