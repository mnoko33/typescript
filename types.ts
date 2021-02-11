/*
*   아래의 코드는 주석을 풀 경우 에러가 타입 에러를 확인할 수 있다.
*   v1에 number인 123을 할당했기 때문에 타입을 명시적으로 입력하지 않아도 number 타입이라고 추론한다.
* */
let v1 = 123;
// v1 = 'abc';

/*
*   그렇다면 타입을 직접적으로 명시하는 방법은 다음과 같다
* */

let v2: number;
let v3: string;
let v4: number | string;


/*
*   기본적으로 사용할 수 있는 타입들은 다음과 같다
* */

let v5: number = 1;
let v6: string = '1';
let v7: boolean = true;
let v8: number[] = [1, 2, 3];       // 배열은 v8, v9처럼 두가지 방법으로 정의할 수 있다.
let v9: Array<number> = [1, 2, 3];
let v10: [string, number] = ['1', 2];
let v11: undefined = undefined;
let v12: null = null;
let v13: any;

/*
*   문자열 리터럴과 숫자 리터럴을 타입으로도 정의할 수 있다
* */

let v14: 10 | 20 | 30;
// v14 = 11;
let v15: 'A' | 'B' | 'C';
// v15 = 'D';

/*
*   함수의 리턴값이 없을 경우 void, never 타입을 사용할 수 있다.
* */
function f1 (): void {
    console.log('this is void function');
}

function f2 (): never {
    throw new Error('this is never function');
}

function f3 (): never {
    while (true) {
        console.log('infinite loop...');
    }
}

/*
*   객체는 object 타입을 사용한다.
*   하지만 객체의 속상값에 접근하면 타입에러가 발생하므로 속성 정보를 포함한 타입을 정의하기 위해선 interface 를 사용해야한다.
* */

let v16: object;

/*
*   교차 타입과 유니온 타입
*   타입들의 교집합 > 교차 타입
*   타입들으 합집합 > 유티온 타입
* */

let v17: string | number;
let v18: (1 | 3 | 5) & (1 | 4 | 6);
// v18 = 1; > success
// v18 = 3; > error

/*
*   type 키워드를 이용하여 타입에 별칭을 줄 수 있다.
* */

type Width = number | string;
let width: Width;
// width = '10px';
// width = 10;

/*
*   열거형 타입
*   enum 키워드를 사용한다
* */

enum Fruit {
    Apple,
    Banana,
    Orange,
}
let fruit1: Fruit = Fruit.Apple;
let fruit2: Fruit.Banana | Fruit.Orange;

/*
*   선택 매개변수
* */

function f4 (a: string, b: string, c?: string): string {
    return `${a} + ${b} + ${c}`
}