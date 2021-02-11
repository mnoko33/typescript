/*
*   mapped 를 사용하면 몇 가지 규칙을 적용한 새로운 인터페이스를 만들 수 있다.
*   기존 인터페이스의 모든 속성을 선택 속성 또는 읽기 전용으로 만들 때 주로 사용한다.
* */

interface Person {
    name: string;
    age: number;
}

interface PersonOptional {
    name?: string;
    age?: number;
}

interface PersonReadOnly {
    readonly name: string;
    readonly age: number;
}

// 일일이 선언해야하는걸 이렇게 간단하게 해보자!
type T1 = {
    prop1: boolean;
    prop2: boolean;
}
type T2 = { [K in 'prop1' | 'prop2']: boolean }

const test1: T1 = {
    prop1: true,
    prop2: false,
};

const test2: T2 = {
    prop1: true,
    prop2: false,
};

