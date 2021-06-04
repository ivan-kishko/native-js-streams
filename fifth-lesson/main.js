const array = [22,12,1,34,99,56,0,65,76]

console.log(array)

//bubble sort
for(let j = 0; j < array.length - 1; j++) {
    for (let i = 0; i < array.length - 1 - j; i++) {
        if (array[i] > array[i + 1]) {
            //destructuring here do the same as code commented below
            [array[i], array[i + 1]] = [array[i + 1], array[i]]
            // let temp = array[i]
            // array[i] = array[i + 1]
            // array[i + 1] = temp
        }
    }
}

console.log(array)

//Array.sort (this method changes initial array, doesnt return a copy)
//for strings it sorts by default according to unicode characters ascending way
const strings = ['Ivan', 'Viktor', 'Oleg', 'redux', '900', 'Галя', '700']
console.log(strings.sort())
//for numbers its converting them to strings and do same thing
const numbers = [1000, 100, 2, 90, 88]
console.log(numbers.sort())

// ---------------------------------------------//
function compareFn(a ,b) {
    if(a <= b) {
        //for sort method if return is negative it places a before b
        //if return is 0 it doesnt touch elements
        //if return is positive it places b before a
        //and its for numbers
        return -1000
    } else {
        return 4
    }
}
//with arrow function
// if -num dont switch, if +num switch, if zero dont touch
// ascending order a - b, descending order b - a
const newCompareFn = (n, m) => n - m

const newNumbers = [1000, 100, 2, 90, 88]
console.log(newNumbers.sort(compareFn))
console.log(newNumbers.sort(newCompareFn))

//-----------------------------------------------//
//Array.sort with objects and arrays
const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: false,
        scores: 89
    },
    {
        name: "Helge",
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
        isMarried: true,
        scores: 121
    },
];
//reverse() is making it upside down
console.log(students
    .sort((a, b) => a.scores - b.scores)
    .reverse()
)

console.log(students.sort((a, b) => a.name < b.name ? -1 : 1))
//console.log(students.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1))
console.log(students.sort((a, b) => a.isMarried === true && b.isMarried === false ? -1 : 1))
console.log(students.sort((a, b) => a.isMarried < !b.isMarried ? -1 : 1))