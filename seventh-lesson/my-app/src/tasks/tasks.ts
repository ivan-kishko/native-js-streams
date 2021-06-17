export function sum(a: number, b: number): number {
    return a + b
}
export function mult(a: number, b: number): number {
    return a * b
}
export function div(a: number, b: number): number {
    return a / b
}
export function sub(a: number, b: number): number {
    return a - b
}

type ActionType = {
    type: "sum" | "mult" | "div" | "sub" | string
}

export function calculator(a: number, b: number, action: ActionType) {
    switch(action.type) {
        case "sum":
            return a + b
        case "div":
            return a / b
        case "mult":
            return a * b
        case "sub":
            return a - b
        default:
            return 'error'
    }
}

export type StudentType = {
    name: string
    age: number
    isMarried: boolean
    friends: string[]
}

export function getDeepCopyStudent(student: StudentType) {
    return {
        ...student,
        friends: [...student.friends]
    }
}
