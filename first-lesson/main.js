const studentFirst = {
    name: 'Bob',
    age: 23,
    friends: ['Alex', 'Donald']
}

const studentSecond = {...studentFirst};
studentSecond.name = 'Helga';

console.log(studentFirst.name)
console.log(studentSecond.name)

const copyStudent = {
    ...studentFirst,
    name: 'John',
    friends: [...studentFirst.friends]
};

console.log(studentFirst.name)
console.log(copyStudent.name)

copyStudent.friends.push('Helga')
console.log(studentFirst.friends)
console.log(copyStudent.friends)

function func(num) {
    const fn = () => console.log(num)
    return [num, fn()]
}

const [ten, logTen] = func(10);
logTen();





