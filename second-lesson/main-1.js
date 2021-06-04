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
    },{
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

const newArr = students.map(s => s.name)

function map(array, func) {
    const newArray = [];
    // newArray[0] = func(array[0]);
    for (let i = 0; i < array.length; i++) {
        newArray[i] = func(array[i])
    }
    return newArray
}

const mapFN = s => ({name: s.name})

console.log(map(students, mapFN))

function filter(array, func) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            newArray.push(array[i])
        }
    }
    return newArray
}

function getMarried(s) {
    return s.isMarried
}

console.log(filter(students, getMarried))

function find(array, func) {
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            return array[i]
        }
    }
}

function multiTable(number) {
    debugger;
    let result = '';
    for(let i = 1; i++; i < 11) {
        if(i === 10) {
            result += `${i} * ${number} = ${i * number}`
        }
        result += `${i} * ${number} = ${i * number}\n`
    }
    return result
}

for(let i = 1; i++; i < 11) {
    console.log(i)
}