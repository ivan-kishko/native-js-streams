import {div, mult, sub, sum, calculator, getDeepCopyStudent} from "./tasks";

test('summing 10 and 5 should return 15', () => {
    //test data
    const a: number = 10;
    const b: number = 5;

    //test actions with test data
    const result = sum(a, b)

    //checking expected result of test
    expect(result).toBe(15)
})
test('dividing 10 on 5 should return 2', () => {
    //test data
    const a: number = 10;
    const b: number = 5;

    //test actions with test data
    const result = div(a, b)

    //checking expected result of test
    expect(result).toBe(2)
})
test('multiplying 10 on 5 should return 50', () => {
    //test data
    const a: number = 10;
    const b: number = 5;

    //test actions with test data
    const result = mult(a, b)

    //checking expected result of test
    expect(result).toBe(50)
})
test('subtracting 5 from 10 should return 5', () => {
    //test data
    const a: number = 10;
    const b: number = 5;

    //test actions with test data
    const result = sub(a, b)

    //checking expected result of test
    expect(result).toBe(5)
})

test('calculator test', () => {
    let sumResult = calculator(10, 5, {type: "sum"})
    let multResult = calculator(10, 5, {type: "mult"})
    let divResult = calculator(10, 5, {type: "div"})
    let subResult = calculator(10, 5, {type: "sub"})

    expect(sumResult).toBe(15)
    expect(multResult).toBe(50)
    expect(divResult).toBe(2)
    expect(subResult).toBe(5)

    expect(calculator(10,5,{type: 'random'})).toBe('error')
})

// TDD

test('tdd test copy of student', () => {
    const student = {
        name: "Mike",
        age: 35,
        isMarried: false,
        friends: ['Chandler', 'Joey', 'Ross']
    }

    const copyStudent = getDeepCopyStudent(student)

    expect(copyStudent).not.toBe(student)
    expect(copyStudent.friends).not.toBe(student.friends)
    expect(copyStudent.name === student.name).toBe(true)
    expect(copyStudent.age === student.age).toBe(true)
    expect(copyStudent.isMarried === student.isMarried).toBe(true)
})



