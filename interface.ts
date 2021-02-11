/*
*   기본적인 interface 의 사용
*  */

interface Person {
    name: string;
    age: number;
}

const person1: Person = { name: 'person1', age: 0 };
const person2: Person = { name: 'person2', age: 1 };

/*
*   선택속성 or undefined 유니온 타입
* */

interface Animal1 {
    kind: string;
    age?: number;
}

interface Animal2 {
    kind: string;
    age: number | undefined;
}

const dog: Animal1 = { kind: 'dog' };
const cat: Animal2 = { kind: 'cat', age: undefined };

/*
*   readonly 속성을 정의할 수 있다
* */

interface Student {
    readonly name: string;
    grade: number;
}

const student1: Student = { name: 'lee', grade: 1 };
// student1.name = 'kim';

/*
*   그렇다면 객체의 interface 에 등록되지 않는 프로퍼티를 추가하고 싶을 때는 어떻게 할까?
* */

const student2 = {
    name: 'kim',
    grade: 1,
    teacher: 'park',
};

const student3: Student = student2;

/*
*   interface 로 정의하는 인덱스 타입
* */

interface Person {
    [key: string]: string | number;
}