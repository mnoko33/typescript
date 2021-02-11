/*
*   generic 은 타입 정보가 동적으로 결정되는 타입
*   generic 을 사용할 경우 같은 규칙을 여러 타입에 적용할 수 있기 때문에 타입 코드를 작성할 때 발생하는 중복을 줄일 수 있다
* */

function makeNumberArray(defaultValue: number, size: number): number[] {
    const arr: number[] = [];
    for (let i = 0; i < size; i++) {
        arr.push(defaultValue);
    }
    return arr;
}

function makeStringArray(defaultValue: string, size: number): string[] {
    const arr: string[] = [];
    for (let i = 0; i < size; i++) {
        arr.push(defaultValue);
    }
    return arr;
}

// 함수 오버로드를 이용하여 리팩토링을 해보자!
function makeArray(defaultValue: number, size: number): number[];
function makeArray(defaultValue: string, size: number): string[];
// @ts-ignore
function makeArray(defaultValue, size) {
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(defaultValue);
    }
    return arr;
}

// 여전히 불편하다. 이럴 때 generic 을 사용하면 된다
function makeArrayWithGeneric<T>(defaultValue: T, size: number): T[] {
    const arr: T[] = [];
    for (let i = 0; i < size; i++) {
        arr.push(defaultValue);
    }
    return arr;
}
// 타입 T의 경우 함수를 사용하는 시점에서 입력되기 때문에 어떤 타입인지 정의되지 않았다.
// 하지만 여기서 타입 T를 제한하고 싶으면 extends 를 사용하면 된다
function genericFunc<T extends string | number>(param: T): T {
    return param
}